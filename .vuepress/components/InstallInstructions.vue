<template>
  <div>
    <div class="instructions">Choose your system</div>
    <div class="os-tabs">
      <div class="os-tab"
        v-for="system in systems"
        :class="{ 'selected': selectedSystem === system[0] }" @click="selectSystem(system[0])">
        <img :src="`/os/${system[0]}.${system[0] === 'pine64' ? 'png' : 'svg'}`">
        <div class="os-label">{{system[1]}}</div>
      </div>
    </div>
    <div class="instructions" v-if="selectedSystem === 'tux'">Choose your package manager</div>
    <div class="distro-tabs" v-if="selectedSystem === 'tux'">
      <div class="distro-tab"
        :class="{ 'selected': selectedDistro === 'deb' }" @click="selectDistro('deb')">
        <div>
          <img src="/os/ubuntu.svg" title="Ubuntu" />
          <img src="/os/debian.svg" style="filter: grayscale(100%)" title="Debian" />
          <img src="/os/linuxmint.svg" title="Linux Mint" />
          <img src="/os/elementary.svg" style="margin-left: 2px" title="Elementary" />...
        </div>
        <div class="distro-label">APT (.deb packages)</div>
      </div>
      <div class="distro-tab"
        :class="{ 'selected': selectedDistro === 'rpm' }" @click="selectDistro('rpm')">
        <div>
          <img src="/os/redhat.svg" title="RedHat" />
          <img src="/os/opensuse.svg" style="margin-left: 2px; margin-bottom: 2px; filter: grayscale(100%) brightness(0)" title="openSUSE" />
          <img src="/os/mageia.svg" style="filter: grayscale(100%)" title="Mageia" />
          <img src="/os/fedora.svg" style="filter: grayscale(100%)" title="Fedora" />...
        </div>
        <div class="distro-label">RPM (.rpm packages)</div>
      </div>
    </div>
    <div class="instructions" v-if="selectedSystem">Choose your version</div>
    <div class="version-tabs" v-if="selectedSystem">
      <div class="version-tab"
        v-for="version in versions"
        :class="{ 'selected': selectedVersion === version[0] }" @click="selectVersion(version[0])">
        {{version[1]}}
      </div>
    </div>
    <div v-if="selectedSystem === 'tux' && selectedDistro === 'deb'">
      <hr>
      <h3>Package Installation (Recommended)</h3>
      <ol>
        <li>Add the repository key</li>
          <pre><code>wget -qO - 'https://bintray.com/user/downloadSubjectPublicKey?username=openhab' | sudo apt-key add -</code></pre>
        <li>Add the HTTPS transport for APT</li>
          <pre><code>sudo apt-get install apt-transport-https</code></pre>
        <li>Add the repository</li>
          <pre><code v-if="selectedVersion === 'stable'">echo 'deb https://dl.bintray.com/openhab/apt-repo2 stable main' | sudo tee /etc/apt/sources.list.d/openhab2.list</code><code v-else-if="selectedVersion === 'testing'">echo 'deb https://dl.bintray.com/openhab/apt-repo2 testing main' | sudo tee /etc/apt/sources.list.d/openhab2.list</code><code v-else="selectedVersion === 'snapshot'">echo 'deb https://openhab.jfrog.io/openhab/openhab-linuxpkg unstable main' | sudo tee /etc/apt/sources.list.d/openhab2.list</code></pre>
        <li>Update the package lists and install the openHAB distribution package</li>
          <pre><code>sudo apt-get update && sudo apt-get install openhab2</code></pre>
        <li>(Optional) Install the add-ons for offline use</li>
          <pre><code>sudo apt-get install openhab2-addons</code></pre>
      </ol>
    </div>
    <div v-if="selectedSystem === 'tux' && selectedDistro === 'rpm'">
      <hr>
      <h3>Package Installation (Recommended)</h3>
      <ol>
        <li>Create a new <code>/etc/yum.repos.d/openhab.repo</code> file with the following content:</li>
<pre><code>[openHAB-{{selectedVersion === 'stable' ? 'Stable' : selectedVersion === 'testing' ? 'Testing' : 'Snapshots'}}]
name=openHAB 2.x.x {{selectedVersion === 'stable' ? 'Stable' : selectedVersion === 'testing' ? 'Testing' : 'Snapshots'}}
baseurl={{selectedVersion === 'stable' ? 'https://dl.bintray.com/openhab/rpm-repo2/stable' : selectedVersion === 'testing' ? 'https://dl.bintray.com/openhab/rpm-repo2/testing' : 'https://openhab.jfrog.io/openhab/openhab-linuxpkg-rpm/unstable'}}
gpgcheck=1
gpgkey=https://bintray.com/user/downloadSubjectPublicKey?username=openhab
enabled=1
</code></pre>
        <li>Install the openHAB distribution package</li>
          <pre><code>sudo yum install openhab2</code></pre>
        <li>(Optional) Install the add-ons for offline use</li>
          <pre><code>sudo yum install openhab2-addons</code></pre>
      </ol>
    </div>

    <div v-if="selectedSystem === 'win10' && selectedVersion === 'stable'">
      <hr>
      <h3>Install with Chocolatey</h3>
      <ol>
        <li>Right-click on the Start menu and select <em>Command Prompt (admin)</em> or <em>Windows PowerShell (admin)</em></li>
        <li>Install the <a target="_blank" href="https://chocolatey.org/install">Chocolatey</a> package manager by running one of these commands:
          <ul>
            <li>If you opened a command prompt (cmd.exe)
            <pre><code>@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"</code></pre></li>
            <li>If you opened PowerShell
            <pre><code>Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))</code></pre></li>
          </ul>
        </li>
        <li>Install the <a target="_blank" href="https://chocolatey.org/packages/openhab">openHAB Chocolatey package</a>:</li>
        <pre><code>choco install openhab</code></pre>
      </ol>
    </div>

    <div v-if="selectedSystem === 'raspberry-pi' || selectedSystem === 'pine64'">
      <hr>
      <h3>Install openHABian (Recommended)</h3>
      <ol>
        <li>Download and install <a target="_blank" href="https://etcher.io/">Etcher</a></li>
        <li>Download the latest openHABian image (<code>.img.xz</code> file) for your system at <a target="_blank" href="https://github.com/openhab/openhabian/releases/latest">https://github.com/openhab/openhabian/releases/latest</a></li>
        <li>Write the image to your SD card using Etcher</li>
        <li>Insert the SD card in your device, ensure the network is connected (<router-link to="/docs/installation/openhabian.html#wi-fi-based-setup-notes">or setup the Wi-Fi</router-link> first) and boot!</li>
        <li>openHABian will take between 15 and 45 minutes to perform the initial setup</li>
      </ol>
    </div>

    <div v-if="selectedSystem === 'docker'">
      <hr>
      <h3>Docker Container Quick Installation</h3>
      <p>These are very simplified instructions, check the <router-link to="/docs/installation/docker.html">documentation article</router-link> or <a target="_blank" href="https://hub.docker.com/r/openhab/openhab/">https://hub.docker.com/r/openhab/openhab/</a> for more information.</p>
      <ol>
        <li>Create the <code>openhab</code> user:</li>
<pre><code>groupadd -g 9001 openhab
groupadd -g 9001 openhab
usermod -a -G openhab myownuser
</code></pre>
        <li>Pull and run the container (command line version):</li>
<pre><code>docker run \
        --name openhab \
        --net=host \
        --tty \
        -v /etc/localtime:/etc/localtime:ro \
        -v /etc/timezone:/etc/timezone:ro \
        -v openhab_addons:/openhab/addons \
        -v openhab_conf:/openhab/conf \
        -v openhab_userdata:/openhab/userdata \
        -d \
        --restart=always \
        openhab/openhab:{{selectedVersion === 'stable' ? $page.frontmatter.currentVersion : $page.frontmatter.currentSnapshotVersion.toLowerCase()}}-amd64-debian
</code></pre>
      </ol>
    </div>

    <div v-if="selectedSystem !== 'docker' && selectedVersion === 'stable'">
      <hr>
      <h3>Manual Installation</h3>
      <ol>
        <li>Install a recent Java 8 platform (we recommend <a target="_blank" href="https://www.azul.com/products/zulu/">Zulu</a>)</li>
        <li>Download and extract the platform independent archive:</li>
        <div class="download-button-container">
          <a class="download-button" :href="`https://bintray.com/openhab/mvn/download_file?file_path=org%2Fopenhab%2Fdistro%2Fopenhab%2F${$page.frontmatter.currentVersion}%2Fopenhab-${$page.frontmatter.currentVersion}.zip`">Download openHAB {{$page.frontmatter.currentVersion}} Stable Runtime</a>
        </div>
        <li>(Optional) Download the addons archive for offline use:</li>
        <div class="download-button-container">
          <a class="download-button" :href="`https://bintray.com/openhab/mvn/download_file?file_path=org%2Fopenhab%2Fdistro%2Fopenhab-addons%2F${$page.frontmatter.currentVersion}%2Fopenhab-addons-${$page.frontmatter.currentVersion}.kar`">Download openHAB {{$page.frontmatter.currentVersion}} Stable Add-ons</a>
        </div>
        <li>(Optional) Download the legacy addons archive for offline use:</li>
        <div class="download-button-container">
          <a class="download-button" :href="`https://bintray.com/openhab/mvn/download_file?file_path=org%2Fopenhab%2Fdistro%2Fopenhab-addons-legacy%2F${$page.frontmatter.currentVersion}%2Fopenhab-addons-legacy-${$page.frontmatter.currentVersion}.kar`">Download openHAB {{$page.frontmatter.currentVersion}} Stable Legacy Add-ons</a>
        </div>
      </ol>
    </div>

    <div v-if="selectedSystem !== 'docker' && selectedVersion === 'snapshot'">
      <hr />
      <h3>Manual Installation</h3>
      <ol>
        <li>Install a recent Java 8 platform (we recommend <a target="_blank" href="https://www.azul.com/products/zulu/">Zulu</a>)</li>
        <li>Download and extract the distribution from Cloudbees:</li>
        <div class="download-button-container">
          <a target="_blank" class="download-button" :href="`https://openhab.ci.cloudbees.com/job/openHAB-Distribution/`">Latest openHAB {{$page.frontmatter.currentSnapshotVersion}} Build</a>
        </div>
      </ol>
    </div>

  </div>

</template>

<style lang="stylus">
.instructions
  margin-top 1rem
  margin-bottom .3rem
  font-size 1.5rem
  font-weight bold
  text-align center
  font-family 'Open Sans', sans-serif
  font-weight 400
.os-tabs
  display flex
  flex-direction row
  align-items justify
  align-content center
  justify-content center
  .os-tab
    margin auto
    width 17%
    padding 3px
    text-align center
    position relative
    border 2px solid transparent
    cursor pointer
    &:hover
      background #f0f0f0
    &.selected
      border 2px solid #ff6600
    img
      height 48px
      display block
      position absolute
      left 50%
      transform translateX(-50%)
      object-fit contain
    .os-label
      margin-top 48px
      font-size 12px

.distro-tabs
  display flex
  flex-direction row
  align-items center
  align-content center
  justify-content center
  .distro-tab
    width 30%
    padding 3px
    text-align center
    position relative
    border 2px solid transparent
    cursor pointer
    font-size 15px
    img
      height 24px
    &:hover
      background #f0f0f0
    &.selected
      border 2px solid #ff6600
.version-tabs
  display flex
  flex-direction row
  align-items center
  align-content center
  justify-content center
  .version-tab
    width 20%
    padding 3px
    text-align center
    position relative
    border 2px solid transparent
    cursor pointer
    font-size 15px
    &:hover
      background #f0f0f0
    &.selected
      border 2px solid #ff6600
.download-button-container
  display flex
  flex-direction row
  align-items center
  align-content center
  justify-content center
.download-button
  margin 2rem
  display inline-block
  font-family 'Open Sans', sans-serif
  font-size 1rem
  color #ff6600
  padding 0.8rem 1.6rem
  border-radius 4px
  font-weight bold
  transition background-color .1s ease
  box-sizing border-box
  border 2px solid #ff6600
  &:hover
    background-color #ff6600
    color white

@media (max-width: 480px)
  .os-tabs
    flex-flow wrap
    column-count 3
    .os-tab
      width 33%
  .distro-tabs
    .distro-tab
      width 50%

</style>

<script>
export default {
  data () {
    return {
      systems: [
        ['tux', 'Linux'],
        ['win10', 'Windows'],
        ['apple', 'macOS'],
        ['raspberry-pi', 'Raspberry Pi'],
        ['pine64', 'PINE A64'],
        ['docker', 'Docker'],
      ],
      selectedSystem: 'tux',
      selectedDistro: 'deb',
      selectedVersion: 'stable'
    }
  },
  computed: {
    versions () {
      if (this.selectedSystem === 'tux') {
        return [
          ['stable', 'Stable'],
          ['testing', 'Testing'],
          ['snapshot', 'Snapshot']
        ]
      } else {
        return [
          ['stable', 'Stable'],
          ['snapshot', 'Snapshot']
        ]
      }
    }
  },
  methods: {
    selectSystem (system) {
      this.selectedSystem = system
      if (system !== 'tux' && this.selectedVersion === 'testing') {
        this.selectedVersion = null
      }
    },
    selectVersion (version) {
      this.selectedVersion = version
    },
    selectDistro (distro) {
      this.selectedDistro = distro
    }
  }
}
</script>

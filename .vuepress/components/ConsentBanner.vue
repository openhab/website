<template>
  <div class="consent-banner" v-if="!consentAlreadySet">
    <p>We use cookies for analysis and insights.
      <a href="/privacy.html">Privacy Policy</a>
    </p>
    <button @click="reject">Reject</button>
    <button @click="accept">Accept</button>
  </div>
</template>

<script>
  export default {
    name: 'ConsentBanner',
    data() {
      return {
        consentAlreadySet: false,
        consentValue: -1,
        fetchScriptElement: null,
        setupScriptElement: null
      }
    },
    methods: {
      removePreviousConsent() {
        const withoutConsentCookies = document.cookie.replace("Consent=0; ", "").replace("Consent=1; ", "");
      },
      updateCookie(consentValue) {
        document.cookie = `Consent=${consentValue}; ` + document.cookie
        this.consentValue = consentValue;
        this.consentAlreadySet = true
      },
      reject() {
        const consentValue = 0;

        this.removePreviousConsent();
        this.updateCookie(consentValue);
      },
      accept() {
        const consentValue = 1;

        this.removePreviousConsent();
        this.updateCookie(consentValue);
      },
      addGoogleAnalyticsScript() {
        this.fetchScriptElement.setAttribute("async", true)
        this.fetchScriptElement.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=UA-47717934-1")

        this.setupScriptElement.textContent = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-47717934-1');
        `

        document.head.appendChild(this.fetchScriptElement);
        document.head.appendChild(this.setupScriptElement);
      },
      removeGoogleAnalyticsScript() {
        this.fetchScriptElement.remove();
        this.setupScriptElement.remove();
      }
    },
    mounted() {
      this.fetchScriptElement = document.createElement("script");
      this.setupScriptElement = document.createElement("script");
      const cookies = document.cookie;

      this.consentAlreadySet = cookies.split("; ").some((cookie) => cookie.startsWith("Consent="))

      if (this.consentAlreadySet) {
        const consentCookieValue = cookies.split("; ").find((cookie) => cookie.startsWith("Consent="))?.split("=")[1];

        this.consentValue = parseInt(consentCookieValue, 10);

        console.log({ consentValue: this.consentValue})
      }

      console.log({ consentAlreadySet: this.consentAlreadySet })
    },
    updated() {
      console.log("updated")

      if (this.consentValue === 1) {
        console.log("add GA")
        this.addGoogleAnalyticsScript();
      } else {
        console.log("remove GA")
        this.removeGoogleAnalyticsScript();
      }
    }
  }
</script>

<style>
  .consent-banner {
    position: fixed;
    bottom: 0px;
    /* NOTE: This z-index should be just a temporary fix. It is needed for the
    consent banner to not be overlayed by some layout sections due to the current
    stacking context happening. */
    z-index: 9999;

    box-sizing: border-box;
    width: 100%;
    min-height: 48px;
    padding: 8px 18px;

    display: flex;
    gap: 18px;

    color: #FFFFFF;
    background-color: #645862;
  }

  p, button {
    font-family: verdana, arial, sans-serif;
    font-size: 14px;
    line-height: 21px;
  }

  p {
    margin: 0;

    align-self: center;
    flex-grow: 1;
  }

  a {
    text-decoration: none;

    color: #F1D600;
  }

  button {
    align-self: center;

    min-width: 100px;
    height: 32px;

    border: none;
    border-radius: 5px;
    background-color: rgb(241, 214, 0);
  }

  button:hover {
    cursor: pointer;

    filter: brightness(110%);
  }

  button:active {
    filter: brightness(90%);
  }
</style>

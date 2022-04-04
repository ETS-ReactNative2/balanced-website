/* global Stripe */

import jQuery from "jquery";

var accounting;

const Bloomerang = {
  version: "1.0",
  ready: function(callback) {
    return Bloomerang._isReady
      ? callback()
      : Bloomerang._readyFunctions.push(callback);
  },
  _lang: "en",
  _readyFunctions: [],
  _isReady: false,

  // Sets the API key, verifying that you're using the public one, not the private
  useKey: function(publicKey) {
    if (publicKey.indexOf("pub_") !== 0) {
      alert(
        "You need to provide your *PUBLIC* Api Key (the one that starts with 'pub_').\nThe private key is only for server side integrations."
      );
    } else {
      Bloomerang.Api.Key = publicKey;
    }
    return this;
  },

  // Sets the processor id, type and public key
  useProcessor: function(id, type, publicKey, isTestMode, bluePayTPS) {
    isTestMode = isTestMode !== undefined && isTestMode;
    if (type != "BluePay" && type != "Stripe") {
      alert(
        "Processor can only be set to 'BluePay' or 'Stripe'. '" +
          type +
          "' isn't valid."
      );
    } else {
      if (type == "Stripe") {
        if (Bloomerang.Util.isStripeJsLoaded()) {
          Stripe.setPublishableKey(publicKey);
        } else {
          Bloomerang.Util.load(
            Bloomerang.Util.StripeUri,
            Bloomerang.Util.isStripeJsLoaded,
            function() {
              Stripe.setPublishableKey(publicKey);
            }
          );
        }
      }
      Bloomerang.Api.ProcessorId = id;
      Bloomerang.Api.ProcessorType = type;
      Bloomerang.Api.ProcessorKey = publicKey;
      Bloomerang.Api.ProcessorIsTestMode = isTestMode;
      Bloomerang.Api.ProcessorBluePayTPS = bluePayTPS;
    }
    return this;
  },

  // Sets the form ID for the email signup widget
  useEmailId: function(value) {
    if (Bloomerang.Data.Interaction.WidgetId) {
      return false;
    }
    Bloomerang.Data.Interaction.WidgetId = value;
    return true;
  },

  // Sets the form ID for the donation widget
  useDonationId: function(value) {
    if (Bloomerang.Data.Donation.WidgetId) {
      return false;
    }
    Bloomerang.Data.Donation.WidgetId = value;
    Bloomerang.Data.RecurringDonation.WidgetId = value;
    return true;
  },

  // DEPRECATED: use useEmailId or useDonationId instead
  // Sets the form id
  useId: function(value) {
    Bloomerang.Data.Donation.WidgetId = value;
    Bloomerang.Data.RecurringDonation.WidgetId = value;
    Bloomerang.Data.Interaction.WidgetId = value;
  },

  // Language toggles for widgets
  english: function() {
    Bloomerang._lang = "en";
    return this;
  },
  isEnglish: function() {
    return Bloomerang._lang == "en";
  },
  spanish: function() {
    Bloomerang._lang = "es";
    return this;
  },
  isSpanish: function() {
    return Bloomerang._lang == "es";
  },

  // Builds up our data items
  Data: {
    // When we submit, this is a reference to the data object we're constructing in _post()
    ServerModel: {},

    Account: {
      Type: "Individual"
    },
    Donation: {
      Date:
        new Date().getMonth() +
        1 +
        "/" +
        new Date().getDate() +
        "/" +
        new Date().getFullYear()
    },
    RecurringDonation: {
      Date:
        new Date().getMonth() +
        1 +
        "/" +
        new Date().getDate() +
        "/" +
        new Date().getFullYear()
    },

    Method: "CreditCard",
    CreditCard: {},
    InKind: {},
    Check: {},
    Eft: {},

    Interaction: {
      Date:
        new Date().getMonth() +
        1 +
        "/" +
        new Date().getDate() +
        "/" +
        new Date().getFullYear()
    }
  },

  Util: {
    // In case we need to load dynamic content
    AccountingUri: function() {
      return Bloomerang.Web.Uri + "Content/Scripts/Lib/accounting.min.js";
    },
    JQueryUri: "https://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.8.3.js",
    JQueryValidationUri:
      "https://ajax.aspnetcdn.com/ajax/jquery.validate/1.9/jquery.validate.min.js",
    JQueryValidationExtrasUri:
      "https://ajax.aspnetcdn.com/ajax/jquery.validate/1.9/additional-methods.min.js",
    StripeUri: "https://js.stripe.com/v2/",

    // Dynamically load a script URI
    load: function(uri, isLoaded, callback) {
      callback = callback || function() {};

      // Check to see if we're already loading a script with this uri
      var script = document.querySelector("script[src='" + uri + "']");
      if (script) {
        Bloomerang.Util.waitForLoaded(isLoaded, callback);
        return;
      }

      script = document.createElement("script");
      script.type = "text/javascript";

      // Must append the script tag before setting onload per
      // http://stackoverflow.com/questions/16230886/trying-to-fire-onload-event-on-script-tag
      document.getElementsByTagName("head")[0].appendChild(script);

      if (script.readyState) {
        //IE
        script.onreadystatechange = function() {
          if (
            script.readyState == "loaded" ||
            script.readyState == "complete"
          ) {
            script.onreadystatechange = null;
            Bloomerang.Util.waitForLoaded(isLoaded, callback);
          }
        };
      } else {
        //Others
        script.onload = function() {
          Bloomerang.Util.waitForLoaded(isLoaded, callback);
        };
      }

      script.src = uri;
    },

    waitForLoaded: function(isLoaded, callback) {
      if (isLoaded()) {
        callback();
      } else {
        setTimeout(function() {
          Bloomerang.Util.waitForLoaded(isLoaded, callback);
        }, 100);
      }
    },

    isJQueryLoaded: function() {
      return typeof jQuery !== "undefined";
    },

    isJQueryValidationLoaded: function() {
      return typeof jQuery().validate !== "undefined";
    },

    isStripeJsLoaded: function() {
      return typeof Stripe !== "undefined";
    },

    isAccountingLoaded: function() {
      return typeof accounting !== "undefined";
    },

    requireJQuery: function(callback) {
      if (Bloomerang.Util.isJQueryLoaded()) {
        var version = jQuery().jquery.split(".");
        if (
          parseInt(version[0]) < 1 ||
          (parseInt(version[0]) == 1 && parseInt(version[1]) < 8)
        ) {
          //jQuery version is less than 1.8, which is what we use
          Bloomerang.Util.load(
            Bloomerang.Util.JQueryUri,
            Bloomerang.Util.isJQueryLoaded,
            callback
          );
        } else if (callback) {
          callback();
        }
      } else {
        Bloomerang.Util.load(
          Bloomerang.Util.JQueryUri,
          Bloomerang.Util.isJQueryLoaded,
          callback
        );
      }
    },

    requireJQueryValidation: function(callback) {
      Bloomerang.Util.requireJQuery(function() {
        if (!Bloomerang.Util.isJQueryValidationLoaded()) {
          Bloomerang.Util.load(
            Bloomerang.Util.JQueryValidationUri,
            Bloomerang.Util.isJQueryValidationLoaded,
            function() {
              Bloomerang.Util.load(
                Bloomerang.Util.JQueryValidationExtrasUri,
                function() {
                  return true;
                },
                callback
              );
            }
          );
        } else if (callback) {
          callback();
        }
      });
    },

    getQueryStringValue: function(value) {
      //  Function to get the query string in Javascript taken from here:
      //  http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
      if (!Bloomerang.queryString) {
        Bloomerang.queryString = (function(a) {
          if (a == "") return {};
          var b = {};
          for (var i = 0; i < a.length; ++i) {
            var p = a[i].split("=", 2);
            if (p.length == 1) b[p[0]] = "";
            else b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
          }
          return b;
        })(window.location.search.substr(1).split("&"));
      }
      return Bloomerang.queryString ? Bloomerang.queryString[value] : null;
    },

    getCookie: function(cookieName) {
      // The browser stores all cookies as a single string with the form "key1=value1; key2=value2; ..."
      // This function splits up the cookies and returns the value for the one we are interested in.
      var cookies = document.cookie.split(";");
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) === " ") cookie = cookie.substring(1);
        if (cookie.indexOf(cookieName) === 0) {
          return cookie.substring(cookieName.length + 1);
        }
      }
      return null;
    },

    setAccountCookie: function() {
      if (!Bloomerang.Data.Account.CookieId) {
        Bloomerang.Data.Account.CookieId = Bloomerang.Util.getCookie(
          "bloomerangConstituent"
        );
      }
      return Bloomerang.Data.Account.CookieId;
    },

    requireAccounting: function(callback) {
      if (!Bloomerang.Util.isAccountingLoaded()) {
        Bloomerang.Util.load(
          Bloomerang.Util.AccountingUri(),
          Bloomerang.Util.isAccountingLoaded,
          callback
        );
      } else if (callback) {
        callback();
      }
    },

    getOldIEId: function() {
      return Math.random() * Math.pow(10, 16);
    },

    // http://www.markandey.com/2011/10/design-of-cross-domain-post-api-in.html
    crossDomainPost: function(
      url,
      data,
      oldIEIdentifier,
      successCallback,
      errorMessage,
      isBluePay
    ) {
      // Add the iframe with a unique name
      var iframe = document.createElement("iframe");
      document.body.appendChild(iframe);
      iframe.style.display = "none";
      iframe.contentWindow.name = oldIEIdentifier;

      // construct a form with hidden inputs, targeting the iframe
      var form = document.createElement("form");
      form.target = oldIEIdentifier;
      form.action = url;
      form.method = "POST";

      // If the request is going to BluePay, we need to send them all the parameters
      if (isBluePay) {
        // repeat for each parameter
        for (var key in data) {
          if (data.hasOwnProperty(key)) {
            var input = document.createElement("input");
            input.type = "hidden";
            input.name = key;
            input.value = data[key];
            form.appendChild(input);
          }
        }
      } else {
        // if the request is going to Bloomerang, just send one parameter with the JSON-serialized data
        var dataString = JSON.stringify(data);

        var input = document.createElement("input");
        input.type = "hidden";
        input.name = "jsonData";
        input.value = dataString;
        form.appendChild(input);
      }

      document.body.appendChild(form);

      var removeListener = function() {
        if (window.removeEventListener) {
          window.removeEventListener("message", helperCallback);
        } else {
          // less than IE 10
          window.detachEvent("onmessage", helperCallback);
        }
      };

      var helperCallback = function(event) {
        // If the event doesn't start with the old IE Identifier, it's some other event
        if (event.data.indexOf(oldIEIdentifier) == 0) {
          var data = jQuery.parseJSON(
            event.data.substring(oldIEIdentifier.toString().length + 1)
          ); // There's a space between the ID and the actual message
          clearTimeout(timeout);
          removeListener();
          successCallback(data);
        }
      };

      if (window.addEventListener) {
        window.addEventListener("message", helperCallback, false);
      } else {
        // less than IE 10
        window.attachEvent("onmessage", helperCallback);
      }

      var timeout = setTimeout(function() {
        removeListener();
        Bloomerang.Api.OnError({
          IsSuccess: false,
          Message: errorMessage,
          Id: 0
        });
      }, 60000);

      form.submit();
    },

    // Splits a string in a cross-platform way. Depending on where the string is coming from, it might
    // be split with carriage return, line feed, or both!
    splitNewLines: function(stringToSplit) {
      var splitter = null;
      if (stringToSplit.indexOf("\r\n") > 0) {
        splitter = "\r\n";
      } else if (stringToSplit.indexOf("\r") > 0) {
        splitter = "\r";
      } else if (stringToSplit.indexOf("\n") > 0) {
        splitter = "\n";
      }

      if (splitter) {
        return stringToSplit.split(splitter);
      }
      return [stringToSplit]; // return as an array to match split behavior
    },

    // callback is a function that takes status and response
    // status is undefined
    // if not successful, response is of the form:
    // {
    //   error: {
    //     message: "Something went wrong."
    //   }
    // }
    // if successful, response is of the form:
    // {
    //   key: value,
    //   ...
    // }
    // where the keys and values are determined by BluePay's specification
    // at http://www.bluepay.com/sites/default/files/documentation/BluePay_bp10emu/BluePay%201-0%20Emulator.txt
    makeBluePayToken: function(isRecurring, callback) {
      var uri = Bloomerang.Api.Uri + "v1/BluePayRedirect";

      var data = {
        MISSING_URL: uri,
        APPROVED_URL: uri,
        DECLINED_URL: uri,
        RESPONSEVERSION: 9999,
        TRANSACTION_TYPE: "AUTH",
        MERCHANT: Bloomerang.Api.ProcessorKey,
        MODE: Bloomerang.Api.ProcessorIsTestMode ? "TEST" : "LIVE",
        DUPLICATE_OVERRIDE: 1,
        TPS_DEF: "TRANSACTION_TYPE",
        TAMPER_PROOF_SEAL: Bloomerang.Api.ProcessorBluePayTPS
      };

      if (Bloomerang.Data.Account.Type == "Organization") {
        data["IS_CORPORATE"] = 1;
        data["COMPANY_NAME"] = Bloomerang.Data.Account.FullName;
      } else {
        data["NAME1"] = Bloomerang.Data.Account.FirstName;
        data["NAME2"] = Bloomerang.Data.Account.LastName;
      }

      if (Bloomerang.Data.Account.Address) {
        if (Bloomerang.Data.Account.Address.Street) {
          var streetSplit = Bloomerang.Util.splitNewLines(
            Bloomerang.Data.Account.Address.Street
          );
          data["ADDR1"] = streetSplit[0];
          if (streetSplit.length > 1) data["ADDR2"] = streetSplit[1];
        }
        if (Bloomerang.Data.Account.Address.City) {
          data["CITY"] = Bloomerang.Data.Account.Address.City;
        }
        if (Bloomerang.Data.Account.Address.State) {
          data["STATE"] = Bloomerang.Data.Account.Address.State;
        }
        if (Bloomerang.Data.Account.Address.PostalCode) {
          data["ZIPCODE"] = Bloomerang.Data.Account.Address.PostalCode;
        }
      }

      if (Bloomerang.Data.Account.PrimaryPhone) {
        data["PHONE"] = Bloomerang.Data.Account.PrimaryPhone.Number.replace(
          /\D/g,
          ""
        );
      }
      if (Bloomerang.Data.Account.PrimaryEmail) {
        data["EMAIL"] = Bloomerang.Data.Account.PrimaryEmail.Value;
      }

      if (Bloomerang.Data.Method == "CreditCard") {
        data["PAYMENT_TYPE"] = "CREDIT";
        data["AMOUNT"] = isRecurring ? 0 : Bloomerang.Data.Donation.Amount;
        data["CC_NUM"] = Bloomerang.Data.CreditCard.Number;
        data["CC_EXPIRES_MONTH"] = (
          "0" + Bloomerang.Data.CreditCard.ExpMonth
        ).slice(-2);
        data["CC_EXPIRES_YEAR"] = Bloomerang.Data.CreditCard.ExpYear.slice(-2);

        if (Bloomerang.Data.CreditCard.SecurityCode) {
          data["CVCCVV2"] = Bloomerang.Data.CreditCard.SecurityCode;
        }
      } else if (Bloomerang.Data.Method == "Eft") {
        data["PAYMENT_TYPE"] = "ACH";
        data["AMOUNT"] = 0; // for EFTs auth for the amount doesn't work, so just auth 0
        data["ACH_ROUTING"] = Bloomerang.Data.Eft.RoutingNumber;
        data["ACH_ACCOUNT"] = Bloomerang.Data.Eft.AccountNumber;
        data["ACH_ACCOUNT_TYPE"] = Bloomerang.Data.Eft.AccountType.substring(
          0,
          1
        );
      }

      var oldIEId = Bloomerang.Util.getOldIEId();
      data.oldIEId = oldIEId;

      Bloomerang.Util.crossDomainPost(
        "https://secure.bluepay.com/interfaces/bp10emu",
        data,
        oldIEId,
        function(data) {
          if (data.Result == "APPROVED") {
            callback(undefined, data);
          } else {
            callback(undefined, { error: { message: data.MESSAGE } });
          }
        },
        "No response received from credit card processor.  Please try again later.",
        true
      );
    },

    makeStripeToken: function(callback) {
      var name = Bloomerang.Data.Account.FullName
        ? Bloomerang.Data.Account.FullName
        : Bloomerang.Data.Account.FirstName +
          " " +
          Bloomerang.Data.Account.LastName;

      var data = {
        name: name,
        number: Bloomerang.Data.CreditCard.Number,
        exp_month: Bloomerang.Data.CreditCard.ExpMonth,
        exp_year: Bloomerang.Data.CreditCard.ExpYear
      };

      if (Bloomerang.Data.Account.Address) {
        if (Bloomerang.Data.Account.Address.Street) {
          var streetSplit = Bloomerang.Util.splitNewLines(
            Bloomerang.Data.Account.Address.Street
          );
          data["address_line1"] = streetSplit[0];
          if (streetSplit.length > 1) data["address_line2"] = streetSplit[1];
        }
        if (Bloomerang.Data.Account.Address.City) {
          data["address_city"] = Bloomerang.Data.Account.Address.City;
        }
        if (Bloomerang.Data.Account.Address.State) {
          data["address_state"] = Bloomerang.Data.Account.Address.State;
        }
        if (Bloomerang.Data.Account.Address.PostalCode) {
          data["address_zip"] = Bloomerang.Data.Account.Address.PostalCode;
        }
      }

      if (Bloomerang.Data.CreditCard.SecurityCode) {
        data["cvc"] = Bloomerang.Data.CreditCard.SecurityCode;
      }

      // If the call to Stripe throws an exception (public key has a space in it),
      // catch the exception and call our callback appropriately
      try {
        Stripe.card.createToken(data, callback);
      } catch (exception) {
        callback(null, { error: { message: exception.message } });
      }
    },

    makeDonation: function(data, isRecurring) {
      /* We need to call OnSubmit beore sending the credit card information, because that 
                   function is what populates the Bloomerang.Data.CreditCard object with the card data */

      var submitParameter = { operation: "v1/OnlineDonation", data: data };
      var keepGoing = Bloomerang.Widget.Donation.OnSubmit
        ? Bloomerang.Widget.Donation.OnSubmit(submitParameter)
        : Bloomerang.Api.OnSubmit(submitParameter);

      if (typeof keepGoing != "undefined" && !keepGoing) {
        return;
      }

      if (
        Bloomerang.Api.ProcessorType == "Stripe" &&
        Bloomerang.Data.Method == "CreditCard"
      ) {
        if (Stripe) {
          Bloomerang.Util.makeStripeToken(function(status, response) {
            if (response.error) {
              Bloomerang.Api.OnError({
                IsSuccess: false,
                Message: response.error.message,
                Id: 0
              });
            } else {
              data["StripeToken"] = response;
              Bloomerang.Api._post(
                "v1/OnlineDonation",
                data,
                undefined /* success */,
                undefined /* error */,
                true /* onSubmitCalled */
              );
            }
          });
        } else {
          Bloomerang.Api.OnError({
            IsSuccess: false,
            Message: "Stripe.js failed to load.  Please try again later.",
            Id: 0
          });
        }
      } else if (
        Bloomerang.Api.ProcessorType == "BluePay" &&
        (Bloomerang.Data.Method == "CreditCard" ||
          Bloomerang.Data.Method == "Eft")
      ) {
        Bloomerang.Util.makeBluePayToken(isRecurring, function(
          status,
          response
        ) {
          if (response.error) {
            Bloomerang.Api.OnError({
              IsSuccess: false,
              Message: response.error.message,
              Id: 0
            });
          } else {
            data["BluePayToken"] = response;
            Bloomerang.Api._post(
              "v1/OnlineDonation",
              data,
              undefined /* success */,
              undefined /* error */,
              true /* onSubmitCalled */
            );
          }
        });
      } else {
        // not Stripe or BluePay, or not a credit card payment

        /* If they are not using Stripe or BluePay, we DO NOT want to get credit card numbers.
                       So we instead replace them with blank data. This will error out in the API and send
                       them an email. Same with EFT. */
        if (Bloomerang.Data.CreditCard && Bloomerang.Data.CreditCard.Number) {
          Bloomerang.CreditCard.number("0000000000000000")
            .expirationMonth("01")
            .expirationYear("01")
            .securityCode("000");
        }
        if (Bloomerang.Data.Eft && Bloomerang.Data.Eft.accountNumber) {
          Bloomerang.Eft.accountNumber("000000000").routingNumber("000000000");
        }

        data["CreditCard"] = Bloomerang.Data.CreditCard;
        data["Eft"] = Bloomerang.Data.Eft;
        Bloomerang.Api._post(
          "v1/OnlineDonation",
          data,
          undefined /* success */,
          undefined /* error */,
          true /* onSubmitCalled */,
          "Donation" /* widgetType */
        );
      }
    }
  },

  Web: {
    Uri:
      window.location.href.indexOf("starwars") >= 0
        ? "https://starwars.bloomerang.co/"
        : window.location.href.indexOf("production") >= 0
          ? "https://crm.bloomerang.co/"
          : window.location.href.indexOf("localhost") >= 0
            ? "http://localhost:9090/Web/"
            : /qa[0-9]*\.bloomerang\.co/i.test(window.location.href)
              ? "https://" +
                /qa[0-9]*\.bloomerang\.co/i.exec(window.location.href)[0] +
                "/"
              : window.location.href.indexOf("file://") >= 0
                ? "http://localhost:9090/Web/" // keep as last check!!
                : "https://crm.bloomerang.co/"
  },

  // The API operations we've encapsulated
  Api: {
    _Processing: false,
    OnSubmit: function(args) {},
    OnSuccess: function(response) {},
    OnError: function(response) {},

    Key: "",
    Processor: "",
    ProcessorKey: "",
    Uri: "https://api.bloomerang.co/",

    // Make an online donation
    donate: function() {
      Bloomerang.Util.setAccountCookie();
      Bloomerang.Util.makeDonation(
        {
          Account: Bloomerang.Data.Account,
          Donation: Bloomerang.Data.Donation,
          Method: Bloomerang.Data.Method,
          InKind: Bloomerang.Data.InKind,
          Check: Bloomerang.Data.Check
        },
        false
      );
    },

    recurringDonate: function() {
      Bloomerang.Util.setAccountCookie();
      Bloomerang.Util.makeDonation(
        {
          Account: Bloomerang.Data.Account,
          RecurringDonation: Bloomerang.Data.RecurringDonation
        },
        true
      );
    },

    joinMailingList: function() {
      Bloomerang.Util.setAccountCookie();
      Bloomerang.Api._post(
        "v1/OnlineEmailInteractionRegistration",
        {
          Account: Bloomerang.Data.Account,
          Interaction: Bloomerang.Data.Interaction
        },
        null,
        null,
        false,
        "Email"
      );
    },

    onlineInteraction: function() {
      Bloomerang.Util.setAccountCookie();
      Bloomerang.Api._post("v1/OnlineEventRegistration", {
        Account: Bloomerang.Data.Account,
        Interaction: Bloomerang.Data.Interaction
      });
    },

    registerEvent: function() {
      Bloomerang.Util.setAccountCookie();
      Bloomerang.Api._post("v1/OnlineEventRegistration", {
        Account: Bloomerang.Data.Account,
        Interaction: Bloomerang.Data.Interaction
      });
    },

    _post: function(
      operation,
      data,
      success,
      error,
      onSubmitCalled,
      widgetType
    ) {
      // HACK: Have "global" access to this object until we can turn this into a more clean plugin
      Bloomerang.Data.ServerModel = data;
      success = success ? success : Bloomerang.Api.OnSuccess;
      error = error ? error : Bloomerang.Api.OnError;

      // Try our onsubmit handler and if we want to short circuit execution, stop before sending request
      var keepGoing = onSubmitCalled;
      if (!keepGoing) {
        // If there are multiple widgets on the page, then we only want a post from the email or donation widget to trigger its validation.
        // So check if that's where it came from before using the default OnSubmit function.
        var submitParameter = { operation: operation, data: data };

        if (widgetType == "Email") {
          keepGoing = Bloomerang.Widget.Email.OnSubmit
            ? Bloomerang.Widget.Email.OnSubmit(submitParameter)
            : Bloomerang.Api.OnSubmit(submitParameter);
        } else if (widgetType == "Donation") {
          keepGoing = Bloomerang.Widget.Donation.OnSubmit
            ? Bloomerang.Widget.Donation.OnSubmit(submitParameter)
            : Bloomerang.Api.OnSubmit(submitParameter);
        } else {
          keepGoing = Bloomerang.Api.OnSubmit(submitParameter);
        }
      }
      if (typeof keepGoing != "undefined" && !keepGoing) {
        return;
      }

      // Build POST uri
      var uri = "{URI}/{OPERATION}?ApiKey={KEY}"
        .replace(/\{URI\}/g, Bloomerang.Api.Uri.replace(/\/$/, ""))
        .replace(/\{OPERATION\}/g, operation)
        .replace(/\{KEY\}/g, Bloomerang.Api.Key);

      if (
        navigator.userAgent.indexOf("MSIE") > 0 &&
        !("withCredentials" in new XMLHttpRequest())
      ) {
        var oldIEId = Bloomerang.Util.getOldIEId();
        uri = uri + "&OldIEIdentifier=" + oldIEId;

        Bloomerang.Util.crossDomainPost(
          uri,
          data,
          oldIEId,
          function(result) {
            return result.IsSuccess ? success(result) : error(result);
          },
          "Error sending request. Please try again later"
        );
      } else {
        // Using jQuery.ajax rather than jQuery.getJSON because that was not sending the correct contentType
        // Using single quotes instead of double quotes because of IE 8 as well
        jQuery.support.cors = true; // for IE 8 and other old IE support
        jQuery.ajax({
          type: "POST",
          contentType: "application/json; charset=UTF-8",
          url: uri,
          data: JSON.stringify(data),
          timeout: 60000,
          success: function(result) {
            return result.IsSuccess ? success(result) : error(result);
          },
          error: function(jqXHR, textStatus, errorThrown) {
            var message =
              textStatus == "timeout"
                ? "Could not connect to Bloomerang. Please try again later."
                : "The request failed with the following error: [" +
                  textStatus +
                  "] [" +
                  errorThrown +
                  "].";
            error({ IsSuccess: false, Message: message, Id: 0 });
          }
        });
      }
    }
  },

  // Responsible for loading widgets
  Widget: {
    Email: {},
    Donation: {},

    load: function(id, callback) {
      Bloomerang.ready(function() {
        // wait until jquery is loaded
        var path = jQuery("script[src*='Bloomerang.js']").attr("src");
        Bloomerang.Util.load(
          path.replace(/\/Bloomerang\.js/, "/Bloomerang.Widget." + id + ".js"),
          function() {
            return true;
          },
          callback
        );
      });
    },
    loadDonation: function(callback) {
      Bloomerang.Widget.load("Donation", callback);
    },
    loadEmailRegistration: function(callback) {
      Bloomerang.Widget.load("EmailRegistration", callback);
    }
  },

  // public API building
  Account: {
    // Account Types
    individual: function() {
      Bloomerang.Data.Account.Type = "Individual";
      return this;
    },
    organization: function() {
      Bloomerang.Data.Account.Type = "Organization";
      return this;
    },
    // Name Info
    organizationName: function(value) {
      this.organization();
      Bloomerang.Data.Account.FullName = value;
      return this;
    },
    firstName: function(value) {
      Bloomerang.Data.Account.FirstName = value;
      return this;
    },
    middleName: function(value) {
      Bloomerang.Data.Account.Middle = value;
      return this;
    },
    lastName: function(value) {
      Bloomerang.Data.Account.LastName = value;
      return this;
    },
    prefix: function(value) {
      Bloomerang.Data.Account.Prefix = value;
      return this;
    },
    suffix: function(value) {
      Bloomerang.Data.Account.Suffix = value;
      return this;
    },
    informalName: function(value) {
      Bloomerang.Data.Account.InformalName = value;
      return this;
    },
    formalName: function(value) {
      Bloomerang.Data.Account.FormalName = value;
      return this;
    },
    envelopeName: function(value) {
      Bloomerang.Data.Account.EnvelopeName = value;
      return this;
    },
    recognitionName: function(value) {
      Bloomerang.Data.Account.RecognitionName = value;
      return this;
    },
    jobTitle: function(value) {
      Bloomerang.Data.Account.JobTitle = value;
      return this;
    },
    employer: function(value) {
      Bloomerang.Data.Account.Employer = value;
      return this;
    },
    website: function(value) {
      Bloomerang.Data.Account.Website = value;
      return this;
    },
    facebook: function(value) {
      Bloomerang.Data.Account.FacebookId = value;
      return this;
    },
    twitter: function(value) {
      Bloomerang.Data.Account.TwitterId = value;
      return this;
    },
    linkedInId: function(value) {
      Bloomerang.Data.Account.LinkedInId = value;
      return this;
    },
    gender: function(value) {
      if (value != "Male" && value != "Female" && value != "Other") {
        alert(
          "Gender can only be set to 'Male', 'Female', or 'Other'. '" +
            value +
            "' isn't valid."
        );
      } else {
        Bloomerang.Data.Account.Gender = value;
      }
      return this;
    },
    birthdate: function(value) {
      Bloomerang.Data.Account.Birthdate = value;
      return this;
    },

    cookieId: function(value) {
      Bloomerang.Data.Account.CookieId = value;
      return this;
    },

    // Phone numbers (only supports setting one at a time right now)
    setPhone: function(type, value, ext) {
      if (type && value) {
        Bloomerang.Data.Account.PrimaryPhone = {
          TypeName: type,
          Number: value,
          Extension: ext || "",
          IsPrimary: true
        };
      }
      return this;
    },
    homePhone: function(value, ext) {
      return this.setPhone("Home", value, ext);
    },
    workPhone: function(value, ext) {
      return this.setPhone("Work", value, ext);
    },

    // Email addresses (only supports setting one at a time right now)
    setEmail: function(type, value) {
      if (type && value) {
        Bloomerang.Data.Account.PrimaryEmail = {
          TypeName: type,
          Value: value,
          IsPrimary: true
        };
      }
      return this;
    },
    homeEmail: function(value) {
      return this.setEmail("Home", value);
    },
    workEmail: function(value) {
      return this.setEmail("Work", value);
    },

    // Addresses (only supports setting one at a time right now)
    setAddress: function(type, street, city, state, zip, country) {
      Bloomerang.Data.Account.Address = {
        TypeName: type,
        Street: street,
        City: city,
        State: state,
        PostalCode: zip,
        Country: country,
        IsPrimary: true
      };
      return this;
    },
    homeAddress: function(street, city, state, zip, country) {
      return this.setAddress("Home", street, city, state, zip, country);
    },
    workAddress: function(street, city, state, zip, country) {
      return this.setAddress("Work", street, city, state, zip, country);
    },

    customField: function(fieldName) {
      Bloomerang.Data.Account.CustomFields =
        Bloomerang.Data.Account.CustomFields || {};
      Bloomerang.Data.Account.CustomFields[fieldName] = jQuery.isArray(
        arguments[1]
      )
        ? arguments[1]
        : Array.prototype.slice.call(arguments, 1);
      return this;
    },

    customFreeformField: function(fieldId) {
      Bloomerang.Data.Account.CustomFreeformFields =
        Bloomerang.Data.Account.CustomFreeformFields || {};
      Bloomerang.Data.Account.CustomFreeformFields[
        fieldId
      ] = Array.prototype.slice.call(arguments, 1);
      return this;
    },

    customPickField: function(fieldId) {
      Bloomerang.Data.Account.CustomPickFields =
        Bloomerang.Data.Account.CustomPickFields || {};
      Bloomerang.Data.Account.CustomPickFields[fieldId] = jQuery.isArray(
        arguments[1]
      )
        ? arguments[1]
        : Array.prototype.slice.call(arguments, 1);
      return this;
    },

    clearCustomFields: function() {
      Bloomerang.Data.Account.CustomFields = {};
      Bloomerang.Data.Account.CustomFreeformFields = {};
      Bloomerang.Data.Account.CustomPickFields = {};
    }
  },

  Donation: {
    date: function(value) {
      Bloomerang.Data.Donation.Date = value;
      return this;
    },
    note: function(value) {
      Bloomerang.Data.Donation.Note = value;
      return this;
    },
    amount: function(value) {
      if (typeof accounting === "undefined") {
        Bloomerang.Data.Donation.Amount = (value + "" || "").replace(
          /[\$,]/g,
          ""
        );
      } else {
        // Use accounting.parse, because BluePay can't handle $ or ,
        Bloomerang.Data.Donation.Amount = accounting.parse(value);
      }
      return this;
    },
    nonDeductible: function(value) {
      Bloomerang.Data.Donation.NonDeductible = value;
      return this;
    },
    fund: function(name) {
      Bloomerang.Data.Donation.FundName = name;
      return this;
    },
    fundId: function(id) {
      Bloomerang.Data.Donation.Fund = Bloomerang.Data.Donation.Fund || {};
      Bloomerang.Data.Donation.Fund.Id = id;
      return this;
    },
    campaign: function(name) {
      Bloomerang.Data.Donation.CampaignName = name;
      return this;
    },
    appeal: function(name) {
      Bloomerang.Data.Donation.AppealName = name;
      return this;
    },
    tribute: function(name) {
      Bloomerang.Data.Donation.TributeName = name;
      return this;
    },
    tributeType: function(name) {
      Bloomerang.Data.Donation.TributeTypeName = name;
      return this;
    },
    customField: function(fieldName) {
      Bloomerang.Data.Donation.CustomFields =
        Bloomerang.Data.Donation.CustomFields || {};
      Bloomerang.Data.Donation.CustomFields[fieldName] = jQuery.isArray(
        arguments[1]
      )
        ? arguments[1]
        : Array.prototype.slice.call(arguments, 1);
      return this;
    },
    customFreeformField: function(fieldId) {
      Bloomerang.Data.Donation.CustomFreeformFields =
        Bloomerang.Data.Donation.CustomFreeformFields || {};
      Bloomerang.Data.Donation.CustomFreeformFields[
        fieldId
      ] = Array.prototype.slice.call(arguments, 1);
      return this;
    },
    customPickField: function(fieldId) {
      Bloomerang.Data.Donation.CustomPickFields =
        Bloomerang.Data.Donation.CustomPickFields || {};
      Bloomerang.Data.Donation.CustomPickFields[fieldId] = jQuery.isArray(
        arguments[1]
      )
        ? arguments[1]
        : Array.prototype.slice.call(arguments, 1);
      return this;
    },

    clearCustomFields: function() {
      Bloomerang.Data.Donation.CustomFreeformFields = {};
      Bloomerang.Data.Donation.CustomPickFields = {};
      return this;
    }
  },

  RecurringDonation: {
    date: function(value) {
      Bloomerang.Data.RecurringDonation.Date = value;
      return this;
    },
    note: function(value) {
      Bloomerang.Data.RecurringDonation.Note = value;
      return this;
    },
    amount: function(value) {
      Bloomerang.Data.RecurringDonation.Amount = (value + "" || "").replace(
        /\$/g,
        ""
      );
      return this;
    },
    nonDeductible: function(value) {
      Bloomerang.Data.RecurringDonation.NonDeductible = value;
      return this;
    },
    fund: function(name) {
      Bloomerang.Data.RecurringDonation.FundName = name;
      return this;
    },
    fundId: function(id) {
      Bloomerang.Data.RecurringDonation.Fund =
        Bloomerang.Data.RecurringDonation.Fund || {};
      Bloomerang.Data.RecurringDonation.Fund.Id = id;
      return this;
    },
    campaign: function(name) {
      Bloomerang.Data.RecurringDonation.CampaignName = name;
      return this;
    },
    appeal: function(name) {
      Bloomerang.Data.RecurringDonation.AppealName = name;
      return this;
    },
    tribute: function(name) {
      Bloomerang.Data.RecurringDonation.TributeName = name;
      return this;
    },
    tributeType: function(name) {
      Bloomerang.Data.RecurringDonation.TributeTypeName = name;
      return this;
    },
    frequency: function(value) {
      if (
        value != "Weekly" &&
        value != "Monthly" &&
        value != "Quarterly" &&
        value != "Yearly"
      ) {
        alert(
          "Frequency can only be set to 'Weekly', 'Monthly', 'Quarterly' or 'Yearly'. '" +
            value +
            "' isn't valid."
        );
      } else {
        Bloomerang.Data.RecurringDonation.Frequency = value;
      }
      return this;
    },
    weekly: function() {
      return this.frequency("Weekly");
    },
    monthly: function() {
      return this.frequency("Monthly");
    },
    quarterly: function() {
      return this.frequency("Quarterly");
    },
    yearly: function() {
      return this.frequency("Yearly");
    },
    startDate: function(value) {
      Bloomerang.Data.RecurringDonation.StartDate = value;
      return this;
    },
    customField: function(fieldName) {
      Bloomerang.Data.RecurringDonation.CustomFields =
        Bloomerang.Data.RecurringDonation.CustomFields || {};
      Bloomerang.Data.RecurringDonation.CustomFields[
        fieldName
      ] = jQuery.isArray(arguments[1])
        ? arguments[1]
        : Array.prototype.slice.call(arguments, 1);
      return this;
    },
    customFreeformField: function(fieldId) {
      Bloomerang.Data.RecurringDonation.CustomFreeformFields =
        Bloomerang.Data.RecurringDonation.CustomFreeformFields || {};
      Bloomerang.Data.RecurringDonation.CustomFreeformFields[
        fieldId
      ] = Array.prototype.slice.call(arguments, 1);
      return this;
    },
    customPickField: function(fieldId) {
      Bloomerang.Data.RecurringDonation.CustomPickFields =
        Bloomerang.Data.RecurringDonation.CustomPickFields || {};
      Bloomerang.Data.RecurringDonation.CustomPickFields[
        fieldId
      ] = jQuery.isArray(arguments[1])
        ? arguments[1]
        : Array.prototype.slice.call(arguments, 1);
      return this;
    },

    clearCustomFields: function() {
      Bloomerang.Data.RecurringDonation.CustomFreeformFields = {};
      Bloomerang.Data.RecurringDonation.CustomPickFields = {};
      return this;
    }
  },

  CreditCard: {
    number: function(value) {
      Bloomerang.Data.ServerModel.Method = Bloomerang.Data.Method =
        "CreditCard";
      Bloomerang.Data.CreditCard.Number = value;
      return this;
    },
    securityCode: function(value) {
      Bloomerang.Data.ServerModel.Method = Bloomerang.Data.Method =
        "CreditCard";
      Bloomerang.Data.CreditCard.SecurityCode = value;
      return this;
    },
    expirationMonth: function(value) {
      Bloomerang.Data.ServerModel.Method = Bloomerang.Data.Method =
        "CreditCard";
      Bloomerang.Data.CreditCard.ExpMonth = value;
      return this;
    },
    expirationYear: function(value) {
      Bloomerang.Data.ServerModel.Method = Bloomerang.Data.Method =
        "CreditCard";
      Bloomerang.Data.CreditCard.ExpYear = value;
      return this;
    }
  },

  InKind: {
    marketValue: function(val) {
      Bloomerang.Data.ServerModel.Method = Bloomerang.Data.Method = "InKind";
      Bloomerang.Data.InKind.MarketValue = (val + "" || "").replace(/\$/g, "");
      return this;
    },
    description: function(value) {
      Bloomerang.Data.ServerModel.Method = Bloomerang.Data.Method = "InKind";
      Bloomerang.Data.InKind.Description = value;
      return this;
    },
    type: function(value) {
      Bloomerang.Data.ServerModel.Method = Bloomerang.Data.Method = "InKind";
      Bloomerang.Data.InKind.InKindType =
        value == "Goods" ? value : value == "Services" ? value : "";

      return this;
    },
    goods: function() {
      return Bloomerang.InKind.type("Goods");
    },
    services: function() {
      return Bloomerang.InKind.type("Services");
    }
  },

  Check: {
    number: function(value) {
      Bloomerang.Data.ServerModel.Method = Bloomerang.Data.Method = "Check";
      Bloomerang.Data.Check.Number = value;
      return this;
    },
    date: function(value) {
      Bloomerang.Data.ServerModel.Method = Bloomerang.Data.Method = "Check";
      Bloomerang.Data.Check.Date = value;
      return this;
    }
  },

  Eft: {
    type: function(value) {
      Bloomerang.Data.ServerModel.Method = Bloomerang.Data.Method = "Eft";
      Bloomerang.Data.Eft.AccountType =
        value == "Checking" ? value : value == "Savings" ? value : "";

      return this;
    },
    checking: function() {
      return Bloomerang.Eft.type("Checking");
    },
    savings: function() {
      return Bloomerang.Eft.type("Savings");
    },
    accountNumber: function(value) {
      Bloomerang.Data.ServerModel.Method = Bloomerang.Data.Method = "Eft";
      Bloomerang.Data.Eft.AccountNumber = value;
      return this;
    },
    routingNumber: function(value) {
      Bloomerang.Data.ServerModel.Method = Bloomerang.Data.Method = "Eft";
      Bloomerang.Data.Eft.RoutingNumber = value;
      return this;
    }
  },

  Interaction: {
    date: function(value) {
      Bloomerang.Data.Interaction.Date = value;
      return this;
    },
    subject: function(value) {
      Bloomerang.Data.Interaction.Subject = value;
      return this;
    },
    note: function(value) {
      Bloomerang.Data.Interaction.Note = value;
      return this;
    },
    channel: function(value) {
      Bloomerang.Data.Interaction.Channel = value;
      return this;
    },
    purpose: function(value) {
      Bloomerang.Data.Interaction.Purpose = value;
      return this;
    },
    inbound: function() {
      Bloomerang.Data.Interaction.IsInbound = true;
      return this;
    },
    customField: function(fieldName) {
      Bloomerang.Data.Interaction.CustomFields =
        Bloomerang.Data.Interaction.CustomFields || {};
      Bloomerang.Data.Interaction.CustomFields[fieldName] = jQuery.isArray(
        arguments[1]
      )
        ? arguments[1]
        : Array.prototype.slice.call(arguments, 1);
      return this;
    },
    customFreeformField: function(fieldId) {
      Bloomerang.Data.Interaction.CustomFreeformFields =
        Bloomerang.Data.Interaction.CustomFreeformFields || {};
      Bloomerang.Data.Interaction.CustomFreeformFields[
        fieldId
      ] = Array.prototype.slice.call(arguments, 1);
      return this;
    },
    customPickField: function(fieldId) {
      Bloomerang.Data.Interaction.CustomPickFields =
        Bloomerang.Data.Interaction.CustomPickFields || {};
      Bloomerang.Data.Interaction.CustomPickFields[fieldId] = jQuery.isArray(
        arguments[1]
      )
        ? arguments[1]
        : Array.prototype.slice.call(arguments, 1);
      return this;
    },

    clearCustomFields: function() {
      Bloomerang.Data.Interaction.CustomFreeformFields = {};
      Bloomerang.Data.Interaction.CustomPickFields = {};
      return this;
    }
  }
};

// Make sure we've got JQuery loaded so that we can make the JSONP call
Bloomerang.Util.requireJQuery(function() {
  // force recurring donation to have all of the properties of a normal donation (plus its scheduling ones)
  Bloomerang._isReady = true;
  for (var i = 0; i < Bloomerang._readyFunctions.length; i++)
    Bloomerang._readyFunctions[i]();

  Bloomerang._readyFunctions = [];
});

Bloomerang.Util.requireAccounting();

export default Bloomerang;

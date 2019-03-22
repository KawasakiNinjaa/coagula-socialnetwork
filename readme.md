# FINAL PROJECT:

## BVG KONTROLLEUR APP (no official name yet)

Let people know when and where there is a control on the berlin transportation network in a selected amount of time.
This app will be implemented for iOS and Android using ReactNative.

What I'll be using:

-   React + Google Maps Geolocation API
-   Express
-   Sockets

---

## Content

#### Landing page

-   Intro & Registration
-   Log in:
    -   Password match check
    -   (possible) Activating account with email link (nodemailer, new gmail account for that purpose)

#### App

-   Toggle Push Notifications: https://developers.google.com/web/ilt/pwa/introduction-to-push-notifications

*   List of last recorded controls:

    -   modal: Report a control: Username, Timestamp, Location, Line and Direction(options dropdown), other(maybe a description of the controllers).
    -   modal: Map with pointers //react google maps

*   Statistics: Control prevalence in time per line.

    -   Parameters: Days of the month, at what time.

*   Legal Advice: A section to inform users of their rights. How to proceed in case they get caught, sanctions, controller's performace limitation.

*   Profile: Edit profile, password

*   About us

*   Log out

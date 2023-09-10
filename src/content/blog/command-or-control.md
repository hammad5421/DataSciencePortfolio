---
isDraft: true
title: Command or Control
subtitle: Knowing What Modifier Key to Put in Your Search Bar
description: A quick walk-through of OS detection, using JavaScript, to know if "Cmd" or "Ctrl" is the user's modifier key.
image:
    src: /images/command-and-control-search-samples.png
    alt: Screenshots from the TailwindCSS and TanStack Query doc sites showing modifier keys.
    caption: Screenshots from the TailwindCSS and TanStack Query doc sites showing modifier keys.
publishDate: "2023-09-10"
tags:
- javascript
- modifier-key
# - data-science
# - machine-learning
# - clustering
# - color-theory
# - image-processing
recommended: []
# - predict-spotify-skips
# - big-query-data-augmentation
---

You've just built a great new site and the last step is to add search. You put in a search component and you want to add the hotkey `Cmd + K` to open the search bar. But should the hotkey be `Cmd + K` or `Ctrl + K`?

If your user is on a Mac, it should be `Cmd` (aka "command" aka `⌘` ). Otherwise it should be `Ctrl` (aka "control" aka `^`). So how can you tell?

One option is [`navigator.platform`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/platform) which is a string identifying the platform on which the browser is running (e.g. `"MacIntel"`, `"Win32"`, etc.).

!["navigator.platform" MDN support grid](/images/navigator.platform-support-grid.png)  
_"navigator.platform" MDN support grid_

While this has been supported for quite a while, unfortunately it is now marked as deprecated.

Pre-deprecation, MDN recommended avoiding using this feature _except_ in this case, when identifying the platform's modifier key.

> `navigator.platform` should almost always be avoided in favor of feature detection. But there is one case where, among the options you could use, `navigator.platform` may be the least-bad option: When you need to show users advice about whether the modifier key for keyboard shortcuts is the `⌘` command key (found on Apple systems) rather than the `⌃` control key (on non-Apple systems)

See their example reproduced below:

```js
let modifierKeyPrefix = "^"; // control key
if (
  navigator.platform.indexOf("Mac") === 0 ||
  navigator.platform === "iPhone"
) {
  modifierKeyPrefix = "⌘"; // command key
}
```

If `navigator.platform` is deprecated, what should we use instead?

Well MDN points you to [`navigator.userAgentData.platform`](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorUAData/platform). The `navigator.userAgentData` property is of type [`NavigatorUAData`](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorUAData) which has the properties `platform` (a string identifying the platform running the browser), `mobile` (a boolean set to `true` if running on a mobile device), and `brands` (an array with brand data about the user's browser).

As a brief aside, those properties are considered "low entropy" and the `NavigatorUAData` object also contains a method for obtaining "high entropy" values from the user-agent – where low entropy values are unlikely to identify the user and high entropy values are more likely to identify the user.

!["navigator.userAgentData.platform" MDN support grid](/images/navigator.userAgentData.platform-support.png)  
_"navigator.userAgentData.platform" MDN support grid_

Unfortunately, `navigator.userAgentData.platform` is considered experimental and currently is only supported by Chromium-based browsers.

So now we have one deprecated API and one experimental API. Is that it? Fortunately, no! There's a third option... the [`User-Agent`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent), a string that contains information about how a user is accessing the site (browser type and version, operating system, etc.) and is sent as an HTTP header in requests to the server.

The good news is that `User-Agent` data is available and well-supported in both the browser (via [`navigator.userAgent`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/userAgent); see below support table) and on the server side (again, as an HTTP request header). This means, unlike `navigator.platform` and `navigator.userAgentData.platform`, the data can be used with a SSR framework like NextJS.

![](https://firebasestorage.googleapis.com/v0/b/reflect-prod.appspot.com/o/users%2FvmrYh4LgUkUEf7TbSktt3rvxqFC3%2F781c889d62fb4e4ca2fafe5d76fe41e5?alt=media\&token=05b2bd69-eee1-4f28-9bae-b54a9468e058)

!["navigator.userAgent" MDN support grid](/images/navigator.userAgent-support.png)  
_"navigator.userAgent" MDN support grid_

The bad news is `User-Agent` data can messy and unreliable. According to MDN:

> Browser identification based on detecting the user agent string is **unreliable** and **is not recommended**, as the user agent string is user configurable.

That being said, while this may not be the most reliable method of _browser_ identification, hopefully the _operating system_ information is a bit more reliable and even then, the worst case scenario here is displaying the wrong modifier key which shouldn't break your app.

MDN has another great article on using `User-Agent` data to detect the OS, which you can find [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent#os).

Currently there isn't one consistent way to detect the user's OS. Hopefully the `navigator.userAgentData` API gets support but until then we may be stuck using a combination of approaches to polyfill. Fortunately, between the three approaches outlined above, we should be able to get a mostly-reliable answer and if our guess is wrong it isn't the end of the world.

![Screenshot from the Astro Docs showing the search hotkey is "/"](/images/astro-search.png)  
_Screenshot from the Astro Docs_

If you _really_ care that much about making sure you don't show your user the wrong modifier key you can always skip `Ctrl+K`/`Cmd+K` and use `/` instead, like Astro does!

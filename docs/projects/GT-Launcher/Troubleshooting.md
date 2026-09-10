# Troubleshooting & FAQ

##  Common Issues

### 1. Back and Recents buttons don't work!
**Solution:** enable the **GT-Launcher Accessibility Service**.
- Go to **Engineering → SIDEBAR → SYSTEM CONTROLS**.
- Tap **Enable Accessibility Service**.
- Find "GT-Launcher" in your system settings and toggle it ON.

### 2. OBD-II isn't connecting.
**Solution:**
- Confirm your adapter is **BLE (Bluetooth Low Energy)** — classic Bluetooth is not supported.
- Pair the adapter in Android's Bluetooth settings first.
- Grant **Location** permission — Android requires it for Bluetooth scanning.

### 3. Music Visualizer is flat.
**Solution:**
- Grant both **Notification Access** and **Record Audio** permissions.
- Play music through a supported player (Spotify, YouTube Music, etc.).

### 4. Gradle says `JAVA_HOME` is not set or Java can't be found.
**Solution:**
- Install **Java 17**.
- Export `JAVA_HOME` to that installation.
- Ensure `$JAVA_HOME/bin` is on `PATH`.
- Re-run the baseline commands from the repo root:
  `./gradlew assembleDebug`
  `./gradlew testDebugUnitTest`
  `./gradlew lintDebug`

### 5. Release build opens the unauthorized screen.
**Solution:**
- Add `OWNER_SIGNATURE_SHA256_BASE64` to `local.properties`.
- The value must match the **Base64-encoded SHA-256 digest** of the APK's signing certificate.
- If the release keystore changes, update the property before generating release artifacts.
- Debug builds skip this check entirely — this only affects release builds.

### 6. A drawn Gesture Input shape does not run its action.
**Solution:** confirm that Gesture Input is attached to the card and has a bound action, then press, hold, and draw the stroke on the card in one continuous motion. The testing toast displays the recognized shape and confidence. Circle, triangle, and rectangle accept either clockwise or counter-clockwise strokes; if recognition is low, make the gesture larger and more distinct.

### 7. A Tasker/MacroDroid action or remote command does nothing.
**Solution:** verify the selected Tasker task or MacroDroid macro still exists and is enabled. For launcher remote commands, use GT-Launcher's documented intent action and make sure a target App Launch card title matches exactly when asking the launcher to open it. Check Android's automation-app logs for a rejected intent or missing target.

### 8. Quick Toggles cannot enable Do Not Disturb.
**Solution:** grant **Notification Policy Access** to GT-Launcher in Android system settings, then retry the Do Not Disturb toggle. Wi-Fi and Bluetooth correctly open their Android-provided control/settings surfaces where platform restrictions require it.

##  Frequently Asked Questions

**Q: Can I use my own icon packs?**
A: Yes — go to **Engineering → APPEARANCE → ICON PACK** and pick any pack installed from the Play Store.

**Q: How do I back up my layout?**
A: Go to **Engineering → SYSTEM → LAYOUT PRESETS & PROFILE BACKUP**. The current page keeps the name field, Save action, and saved-profile list visible together; tap a listed profile to load it. Use the profile export/import controls for a portable `.json` backup of layout, theme, and settings.

**Q: Is there a "Pro" version?**
A: GT-Launcher has an optional Premium unlock (Drive Mode, Finance card, capability stacking, extra Visual Styles, the Adaptive layout engine) — the core launcher experience is fully usable without it.

---
*Still stuck? Open an issue on [GitHub](https://github.com/alazndy/GT-Launcher/issues).*

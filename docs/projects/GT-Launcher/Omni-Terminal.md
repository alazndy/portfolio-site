# Omni-Terminal: Unified Search

Omni-Terminal is GT-Launcher's search layer — it lives inside the **App Drawer** and opens the moment you start typing there, or via the sidebar's **Search** button. One query fans out across every source the launcher knows about and comes back as a single, categorized results list.

##  What It Searches

Type a query and Omni-Terminal checks, in parallel:

![Omni-Terminal: calculator result, then an app search](assets/omni-terminal/search-mixed-results.gif)

| Category | What it finds |
|---|---|
| **Calc** | Inline math — type an expression, get the answer as a result card |
| **Top Result / Apps** | Your installed apps, ranked by match quality |
| **Contacts** | Matching contacts, shown with photo and one-tap Call/SMS |
| **Calendar** | Upcoming events matching your query |
| **Media** | Music/media search shortcuts routed to your default player |
| **System** | Launcher and Android Settings screens (e.g. searching "wifi" surfaces the WiFi settings shortcut directly) |
| **Web** | Web search, Google Maps, and Play Store lookups as single-tap actions |
| **AI** | AI-assisted results, where enabled |

Which sources are active, and how they're presented, is configurable from **Engineering → SIDEBAR → SEARCH** (basic controls: density, style, icons; advanced controls: which sources run and how aggressively they debounce).

##  Smart Result Cards

Results aren't plain text rows — they're interactive GT cards:
- **Contact results** show a photo and one-tap Call/SMS buttons.
- **App results** support long-press for context actions like Uninstall.
- **Calc results** show the computed value with a Copy-to-Clipboard action.
- **System/Web results** open their exact destination directly — no intermediate chooser dialog.

Results, category labels, and calendar-date formatting all follow your app's selected language, not just the device locale.

---
*Tip: dragging on any result dismisses the keyboard, so scrolling through a long result list never fights with the IME.*

---

## v4.15–v4.18.1 Search and Automation Updates

All OmniSearch sources run concurrently and return as soon as each source finishes instead of waiting for the slowest source. Settings results expanded from section-level matches to individual destinations; Settings search is also available from every Settings sub-page and now reaches more than 55 controls. Results take the user directly to the relevant nested row and briefly highlight it.

Tasker and MacroDroid integrate with the same action system: a card or Gesture Input binding can launch an external task or macro, and an external remote-command intent can drive GT-Launcher itself (including opening the App Drawer, switching theme, loading a profile, toggling Drive Mode/Edit Mode/sidebar, or launching an App Launch card by title).

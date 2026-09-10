# Navigation & Interface: The Tactical Guide

Mastering the GT interface is mostly muscle memory. This guide covers every interaction layer, from the home grid to the sidebar rail.

##  Core Navigation

### The Home Grid
- **Single Tap** on a card: its primary action (launch app, toggle state, etc.).
- **Triple Tap on empty grid space:** enters **Edit Mode**.
- **Fast upward swipe (fling)** anywhere on the grid, or the **ALL APPS** dock bar at the bottom of the screen: opens the **App Drawer**.

### The Sidebar
Drag toward the sidebar's edge from anywhere on screen to reveal it temporarily; a full drag locks it open. If your "hidden restore" behavior is set to permanent, revealing it once makes it stay open from then on.

---

##  Card-Specific Gestures

Most cards are interactive: **Swipe Up / Down / Left / Right** are each independently configurable per card.
- *Example:* Swipe Up on an App Launch card → opens Spotify. Swipe Down → YouTube Music.
- *Example:* Left/Right swipes on a Media card → Previous/Next track.

Configure these in **Card Settings → BEHAVIOR**, or during creation in the builder's **BEHAVIOR** tab.

---

##  The Sidebar Utility Rail

The sidebar is a fully configurable button rail — every button is a `SidebarItem` with its own tap and swipe bindings.

![Configuring sidebar rail buttons and shortcuts](assets/navigation/sidebar-interaction.gif)

### Per-Button Actions
- **Tap:** primary action (app launch, OmniSearch, system shortcut, URL, and more).
- **Swipe Up:** independent secondary action.
- **Swipe Down:** independent tertiary action.
  - *Example:* Tap **Search** → opens Omni-Terminal search. Swipe Up/Down → your own custom shortcuts.

### Configuring Buttons
Go to **Engineering → SIDEBAR**, tap any item to open the **Sidebar Item Editor**.

| Type | Description |
|---|---|
| App Launch | Opens any installed app |
| OmniSearch | Opens the search overlay |
| System Shortcut | WiFi, Bluetooth, Flashlight, Volume, etc. |
| URL | Opens a URL in the default browser |

---

##  Edit Mode Controls

Triple-tap an empty grid area to enter Edit Mode.

![Triple-tap to enter Edit Mode](assets/navigation/enter-edit-mode.gif)

![Moving and rearranging cards with grid snap and cascade push](assets/navigation/grid-drag-resize.gif)

| Control | Action |
|---|---|
| Drag card | Move to a new grid position |
| Resize handle (bottom-right) | Drag to resize span |
| Gear icon on card | Open Card Settings |
| ` HEADER` button | Open Header Widget Editor directly |
| `ADD` button | Open the Card Builder to add a new card |
| Triple-tap empty space | Enter/exit Edit Mode |

---

##  System States

GT-Launcher has three separate visual-alert mechanisms — worth knowing apart, since they look similar but mean different things:

- **Battery theme recolor:** an *optional* adaptive theme strategy (Engineering → APPEARANCE → Theme Automation → `BATTERY`) that passively shifts your accent color as charge drops — green above 80%, sliding through teal, yellow, and orange, down to red at 15% or below. It's a color choice, not a popup.
- **Anomaly overlay:** a real full-screen, pulsing **ANOMALY DETECTED** warning in red, shown only in Drive Mode, triggered by an active OBD trouble code or coolant temperature above 110°C.
- **Traffic alert banner:** a **RED ALERT** strip on the Drive Mode map HUD, unrelated to the vehicle's own sensors — it fires when a connected navigation app posts a notification mentioning an accident, police, or speed-camera warning nearby.
- **Clean Mode:** strips every card's background down to a minimal, text-only HUD. Toggle in **Engineering → APPEARANCE**.

---

##  Accessibility & System Back

The **GT-Launcher Accessibility Service** must be enabled for:
- Sidebar **Back** button (system back gesture).
- Sidebar **Recents** button (overview screen).

Enable it in **Engineering → SIDEBAR → SYSTEM CONTROLS**.

---

*Pro Tip: tune tactile feedback strength for every gesture from **Engineering → SYSTEM**.*

---

## Current Gesture and Edit Model (v4.15–v4.18.1)

**Gesture Input** adds a press-hold-drag recognizer to compatible cards. It recognizes ten `$1 Unistroke` templates — circle, triangle, rectangle, checkmark, caret, zigzag, and up/down/left/right arrows — with clockwise and counter-clockwise forms for closed shapes. Bind a resulting gesture to a normal action, a Tasker task, or a MacroDroid macro. The capability also works on its own as a reference grid when no other card content is present.

**Combo Link Gesture** binds two cards: hold the source card, then swipe the linked card to run its action. The hold is tracked by the first finger's pointer ID, so a second card consuming its own swipe cannot cancel the link. This is separate from the single-card Gesture Input recognizer.

Edit Mode is now selection-first. Tap a card to select it, then use the floating dock for move, resize, −45° to +45° rotation, settings, or delete. Only the selected card exposes resize handles; collision feedback is dashed gold for a free placement and red for an overlap. Two-finger input is scroll-only — pinch-to-resize was removed to prevent accidental resizing or sidebar reveals. The movable dock can be dragged vertically and moves to the opposite screen half if a dragged item passes underneath it; its surfaces inherit the active Style Studio recipe.

Sidebar editing uses the same model: select a button, then use its dock to move, size, open settings, or delete. Buttons occupy a real free-cell grid, can leave intentional gaps, and cannot overlap; legacy overlapping layouts self-repair on load. The App Settings gear is a protected, movable sidebar button, and one shared Undo action covers both card and sidebar edits.

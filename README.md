# 🎨 Color DNA Letters Script for Adobe Illustrator

This script automatically colors the DNA letters `A`, `T`, `C`, and `G` in selected text frames:

- **A** = Green  
- **T** = Blue  
- **C** = Yellow  
- **G** = Red  

---

## 📂 How to Install & Use

### ✅ Option 1: Run Once (Quick Method)
1. Open Adobe Illustrator.
2. Select **one or more text frames** containing DNA letters.
3. Go to **File > Scripts > Other Script...**
4. Locate and run the `colorDNA.jsx` script file.

---

### ✅ Option 2: Install Script for Quick Access
1. Copy `colorDNA.jsx` into Illustrator's Scripts folder:

   - **Windows**:  
     ```
     C:\Program Files\Adobe\Adobe Illustrator [VERSION]\Presets\en_US\Scripts\
     ```

   - **macOS**:  
     ```
     /Applications/Adobe Illustrator [VERSION]/Presets/en_US/Scripts/
     ```

2. Restart Illustrator.
3. Your script will now appear under **File > Scripts > colorDNA**.
4. Select text frames, then run the script from that menu.

---

### ⚡ Bonus: Assign a Keyboard Shortcut (Optional)
1. Open **Window > Actions**.
2. Click **New Action**, give it a name like `Color DNA`.
3. Assign a **Function Key** (e.g. `F5`).
4. Hit **Record**, then run the script via **File > Scripts > colorDNA**.
5. Hit **Stop** in the Actions panel.

You can now run the script by pressing your shortcut key (e.g. `F5`).

---

## 📝 Notes
- Works on **multiple selected text frames**.
- Ignores non-A/T/C/G characters.
- Only affects **visible text** (not grouped inside symbols or locked layers).

---

## 🔧 Customization
Want to change the colors or add more letters? Just modify the `colorMap` section inside the script:

```javascript
var colorMap = {
    "A": [0, 255, 0],     // Green
    "T": [0, 0, 255],     // Blue
    "C": [255, 255, 0],   // Yellow
    "G": [255, 0, 0]      // Red
};

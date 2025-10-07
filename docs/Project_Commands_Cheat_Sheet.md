# 🚀 Project Commands Cheat Sheet
## Quick Reference for Web Development

---

## 📁 Project Setup Commands

### **Create New Project:**
```bash
# Create React project with Vite
npm create vite@latest my-website -- --template react

# Navigate to project
cd my-website

# Install dependencies
npm install
```

### **Install Tailwind CSS:**
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### **Install Common Packages:**
```bash
# UI Components
npm install lucide-react
npm install @radix-ui/react-dialog

# Forms
npm install react-hook-form

# Routing
npm install react-router-dom

# Animations
npm install framer-motion
```

---

## ⚡ Development Commands

### **Start Development:**
```bash
npm run dev
# Opens at http://localhost:5173
```

### **Build for Production:**
```bash
npm run build
# Creates dist/ folder with optimized files
```

### **Preview Production Build:**
```bash
npm run preview
# Opens at http://localhost:4173
```

### **Install New Package:**
```bash
npm install package-name
npm install -D package-name  # For dev dependencies
```

---

## 🔧 Troubleshooting Commands

### **PowerShell (Windows):**
```powershell
# Navigate to project
cd C:\path\to\your\project

# Run multiple commands (use semicolon)
cd C:\xampp\htdocs\juwafinal; npm run dev
cd C:\xampp\htdocs\juwafinal; npm run build

# Kill all node processes
taskkill /f /im node.exe
```

### **Fix Common Issues:**
```bash
# Clear npm cache
npm cache clean --force

# Delete and reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Check for outdated packages
npm outdated

# Update packages
npm update
```

---

## 📝 File Structure Template

```
my-website/
├── src/
│   ├── App.jsx          # Main application
│   ├── main.jsx         # Entry point
│   ├── index.css        # Global styles
│   └── components/      # Reusable components
│       ├── ui/          # UI components
│       └── pages/       # Page components
├── public/              # Static assets
│   ├── images/
│   ├── videos/
│   └── favicon.ico
├── package.json         # Project config
├── tailwind.config.js   # Tailwind config
├── vite.config.js       # Vite config
└── README.md           # Project documentation
```

---

## 🎨 Tailwind CSS Quick Reference

### **Colors:**
```jsx
className="bg-red-500 text-white"
className="bg-blue-600 hover:bg-blue-700"
className="text-gray-800 dark:text-white"
```

### **Spacing:**
```jsx
className="p-4 m-2"        // padding: 1rem, margin: 0.5rem
className="px-6 py-3"      // horizontal/vertical padding
className="mt-8 mb-4"      // top/bottom margin
```

### **Layout:**
```jsx
className="flex items-center justify-center"
className="grid grid-cols-3 gap-4"
className="w-full h-screen"
```

### **Responsive:**
```jsx
className="text-sm md:text-lg lg:text-xl"
className="hidden md:block"
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```

---

## 🔗 Common React Patterns

### **State Management:**
```jsx
const [count, setCount] = useState(0);
const [isOpen, setIsOpen] = useState(false);
```

### **Event Handlers:**
```jsx
onClick={() => setCount(count + 1)}
onClick={() => setIsOpen(!isOpen)}
onClick={() => window.open('https://example.com', '_blank')}
```

### **Conditional Rendering:**
```jsx
{isOpen && <div>Content</div>}
{count > 0 ? <p>Positive</p> : <p>Zero or negative</p>}
```

### **Lists:**
```jsx
{items.map((item, index) => (
  <div key={index}>{item.name}</div>
))}
```

---

## 📱 Mobile-First Development

### **Breakpoints:**
- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up

### **Mobile Patterns:**
```jsx
// Mobile menu
className="md:hidden" // Hide on desktop
className="hidden md:block" // Show only on desktop

// Responsive grid
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// Responsive text
className="text-sm md:text-base lg:text-lg"
```

---

## 🎯 AI Communication Templates

### **Start New Project:**
```
"Create a new React website for [purpose] with:
- [List pages needed]
- [Color scheme/style]
- [Key features]
- Mobile responsive design"
```

### **Add Features:**
```
"Add [specific feature] to [specific page]:
- [Detailed requirements]
- [Styling preferences]
- [Interactive behavior]"
```

### **Fix Issues:**
```
"[Describe the problem]
- [What should happen instead]
- [Any error messages]
- [Steps to reproduce]"
```

### **Style Changes:**
```
"Change [element] to:
- [New color/size/spacing]
- [Hover effects]
- [Responsive behavior]"
```

---

## ✅ Project Checklist

### **Before Starting:**
- [ ] Node.js installed
- [ ] Code editor ready
- [ ] Project requirements clear
- [ ] Design mockup ready
- [ ] Content prepared

### **During Development:**
- [ ] Development server running
- [ ] Mobile testing done
- [ ] All links working
- [ ] Forms functional
- [ ] Images optimized

### **Before Launch:**
- [ ] Production build successful
- [ ] All pages tested
- [ ] Mobile responsive
- [ ] Performance optimized
- [ ] SEO meta tags added

---

## 🚨 Emergency Fixes

### **Website Won't Start:**
```bash
# Kill all processes
taskkill /f /im node.exe

# Clear cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install

# Try again
npm run dev
```

### **Build Fails:**
```bash
# Check for syntax errors
npm run build

# Look for specific error messages
# Fix the reported issues
# Try building again
```

### **Images Not Loading:**
```jsx
// Check file paths (case-sensitive)
// Add error handling
onError={(e) => e.target.src = '/placeholder.jpg'}
```

---

**Keep this cheat sheet handy for quick reference!** 📚✨

# MSc AIML Academic Portal

> **"For the students, by the students"**  
> Maintained by **Dhruv** &bull; [www.satyaneev.me](https://www.satyaneev.me)  
> Repository: [github.com/dhruv-atomic-mui21/mscaiml](https://github.com/dhruv-atomic-mui21/mscaiml)

A mobile-first, 100% offline-ready Progressive Web Application (PWA) designed to provide instant access to master's level curricula, comprehensive lecture notes, verified assignment solutions, and interactive simulators for difficult AI and mathematical concepts.

---

## Classroom Offline Problem & Solution

### The Challenge
University classrooms, computer labs, and lecture halls frequently suffer from weak mobile network coverage, Wi-Fi dead zones, or proxy restrictions.

### The Solution
- **Load Once, Offline Always**: Visiting the site once triggers an active background caching pipeline (`sw.js` + `CacheStorage`).
- **Complete Payload Bundling**: All 6 subjects, 80+ lecture notes, and 130+ step-by-step solved assignments are bundled into a single local dataset (`data.js`).
- **Zero External CDNs at Runtime**: All styles, icons, fonts, and scripts are served locally from device memory.
- **PWA Installation**: Supports 1-tap "Add to Home Screen" on iOS, Android, macOS, and Windows.

---

## Curriculum Coverage (Semester 1)

| Subject Code | Subject Name | Key Focus Areas | Solved Assignments |
|---|---|---|---|
| **AIML-101** | **Artificial Intelligence** | Rational Agents, PEAS Framework, Search Algorithms, Heuristics, Minimax, Alpha-Beta, Tic-Tac-Toe Strategies | 20 Problems (Theory Assignment 1) |
| **AIML-102** | **Data Structures using C/C++** | Pointers, Dynamic Memory, OOP, Operator Overloading, Friends, Templates | 49 Programs (C Practical, DS Practical 1 & 2) |
| **AIML-103** | **Mathematical Foundation** | Set Theory, De Morgan's Laws, 2D/3D Geometry, Planes, Hyperplanes, Least Squares Regression | 55 Problems (Part-A, Part-B, Test Paper) |
| **AIML-104** | **Python Programming** | Core Logic, Number Theory, Pattern Generation Algorithms, Data Structures | 45 Programs (Practical Assignment 1) |
| **AIML-105** | **Scientific Computing** | Computational Errors, Root Finding (Bisection, Regula-Falsi, Secant, Newton-Raphson) | 7 Numerical Analyses with Iteration Tables |
| **AIML-106** | **Computer Vision** | Image Matrices, Spatial Convolutions, Sobel Edge Filters, Canny Pipeline, Homography | 4 Foundation Lab Exercises |
| **TOTAL** | **All 6 Core Subjects** | **Complete Sem-1 Theoretical & Practical Syllabus** | **180 Solved Assignments** |

---

## Interactive Simulators & Labs

1. **AI Game & Search Workbench**: Play Tic-Tac-Toe against AI with Strategy-3 (Heuristic Production Rules) or full Minimax game tree search, with real-time rule logging. Includes step-by-step BFS vs DFS state space visualizer.
2. **Scientific Computing Root Finder**: Computes numerical roots for equations (e.g. \(x^3 - 2x - 5\), \(x^3 - 15.2x + 13.2\)) with live convergence iteration tables.
3. **Mathematical Foundation Solvers**:
   - 3-Set Venn Diagram Calculator: Solves assignments Q8, Q9, and Q10 dynamically, calculating all 8 disjoint regions and set cardinalities.
   - Least Squares Linear Regression Calculator: Computes slope \(m\), intercept \(c\), and line \(y = mx + c\).
   - 2D Coordinate Geometry Solver: Calculates distance, midpoint, slope, and line equation.
4. **Data Structures Simulators**:
   - C++ Complex Class Operator Overloading Simulator: Demonstrates `c1 + c2` and `c1 * c2` operator methods.
   - Stack vs Heap Memory Model Visualizer: Illustrates pointer variables on the stack referencing dynamic contiguous arrays on the heap with allocation and `delete[]` deallocation.
5. **Python Algorithmic Pattern Generator**: Interactive visualization of pattern algorithms from Q27-Q45 (Triangles, Inverted pyramids, Even numbers, Hourglass, Pascal's triangle) with dynamic row slider and loop index breakdown.
6. **Computer Vision 2D Spatial Convolution Simulator**: Step-by-step 3x3 kernel convolution engine (Sobel X/Y, Gaussian, Sharpen, Box filter) across 5x5 image patches with full element-wise dot product breakdown.

---

## Deployment to Vercel

The repository includes pre-configured `vercel.json` routing files for seamless one-click Vercel deployments.

### Deploying via Vercel CLI
```bash
# Clone the repository
git clone https://github.com/dhruv-atomic-mui21/mscaiml.git
cd mscaiml

# Deploy to Vercel
vercel
```

Or connect the repository `https://github.com/dhruv-atomic-mui21/mscaiml.git` directly in your [Vercel Dashboard](https://vercel.com).

---

## Local Development & Testing

```bash
# Launch a local server
python -m http.server 8080 --directory site

# Open in browser
http://localhost:8080
```

To test offline functionality:
1. Open Chrome/Edge DevTools (`F12`).
2. Navigate to the **Network** tab and toggle the throttling dropdown to **Offline** (or enable Airplane Mode).
3. Refresh the page: the entire portal, all notes, and all solved assignments load instantly from device cache.

---

## Author & Credits

- **Curated & Developed by**: Dhruv
- **Portfolio & Contact**: [www.satyaneev.me](https://www.satyaneev.me)
- **Tagline**: *"For the students, by the students"*

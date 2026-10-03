# MSc AIML Academic Portal & Interactive Labs

> **"For the students, by the students"**  
> Maintained by **Dhruv** &bull; [www.satyaneev.me](https://www.satyaneev.me)  
> Repository: [github.com/dhruv-atomic-mui21/mscaiml](https://github.com/dhruv-atomic-mui21/mscaiml)

A modern Next.js 14 academic repository engineered for master's degree students. Pre-rendered with 180 step-by-step verified assignment solutions, comprehensive curriculum notes, 3D folder visual navigation, and interactive mathematical and engineering simulators.

---

## Core Engineering Features

- **Next.js 14 App Router & Static Generation (SSG)**: Out-of-the-box compatibility with Vercel edge deployment. Every subject, topic, and assignment is pre-rendered for instant load times.
- **Client-Side Instant Search**: Full-text client search across all 180 assignments and curriculum topics (`Ctrl+K` / `Cmd+K`).
- **3D Folder Architecture**: Realistic perspective folder flap design, layered paper peek, and contextual metadata inspired by modern digital archives.
- **Zero Emojis**: Clean SVG vector iconography and strict technical layout throughout.

---

## Curriculum Coverage (Semester 1)

| Subject Code | Subject Name | Key Focus Areas | Solved Assignments |
|---|---|---|---|
| **AIML-101** | **Artificial Intelligence** | Rational Agents, PEAS Framework, Search Algorithms, Heuristics, Minimax, Alpha-Beta, Tic-Tac-Toe Strategies | 20 Problems (Theory Assignment 1) |
| **AIML-102** | **Data Structures using C/C++** | Pointers, Dynamic Memory, Stack vs Heap, BST, Linked Lists, Operator Overloading | 49 Programs (C Practical, DS Practical 1 & 2) |
| **AIML-103** | **Mathematical Foundation** | Set Theory, 3-Set Venn Diagrams, 2D/3D Coordinate Geometry, Section Ratios, Least Squares Regression | 55 Problems (Part-A, Part-B, Test Paper) |
| **AIML-104** | **Python Programming** | Core Logic, Number Theory, Pattern Generation Algorithms, Data Structures, Pascal's Triangle | 45 Programs (Practical Assignment 1) |
| **AIML-105** | **Scientific Computing** | Computational Errors, Root Finding (Bisection, Regula-Falsi, Secant, Newton-Raphson), IEEE-754 Precision | 7 Numerical Analyses with Iteration Tables |
| **AIML-106** | **Computer Vision** | Image Matrices, Spatial Convolutions, Sobel Edge Filters, Laplacian, Gaussian Filtering | 4 Foundation Lab Exercises |
| **TOTAL** | **All 6 Core Subjects** | **Complete Sem-1 Theoretical & Practical Syllabus** | **180 Solved Assignments** |

---

## Interactive Engineering & Mathematical Simulators

1. **Data Structures Lab**:
   - **Stack vs Heap Memory Model**: Visualizes stack pointer addresses referencing contiguous heap blocks with `new int[N]` allocation, `delete[] ptr` deallocation, and dangling pointer diagnostics.
   - **Binary Search Tree (BST) Visualizer**: Dynamic SVG node layout with interactive insertion and step-by-step animated Inorder, Preorder, and Postorder traversals.
   - **Stack & Queue Visualizer**: Push/Pop (LIFO) and Enqueue/Dequeue (FIFO) animated container states.
   - **Complex Number Operator Overloading**: Interactive C++ binary operator (`+`, `-`, `*`) evaluator with signatures and mathematical proofs.

2. **Scientific Computing Lab**:
   - **Continuous Root Finder & Live Curve Plotter**: HTML5 Canvas graphing $f(x)$ with step-by-step tangent line projections (Newton-Raphson), interval brackets (Bisection), and secant trajectories with error tolerance.
   - **IEEE-754 Floating-Point Precision Lab**: 32-bit single-precision layout breakdown (1 sign bit, 8-bit biased exponent, 23-bit mantissa) and machine roundoff analysis.

3. **Mathematical Foundation Lab**:
   - **3-Set Venn Diagram Calculator**: Dynamic SVG region visualization solving all 8 mutually exclusive subsets for assignments Q8, Q9, and Q10.
   - **Least Squares Best-Fit Line Canvas**: Live calculation of normal equations $\sum y = m\sum x + nc$, drawing data points, regression line $y = mx + c$, and vertical residual error drops $(y_i - \hat{y}_i)$.
   - **2D Geometry & Section Ratio Solver**: Euclidean distance, midpoint, slope, standard line equation $Ax + By + C = 0$, and internal section points.

4. **AI Reasoning Lab**:
   - Tic-Tac-Toe Game Search: Strategy-3 production heuristic rules vs optimal Minimax utility evaluation.
   - State space graph traversal: BFS (FIFO Queue) vs DFS (LIFO Stack) step tracer.

5. **Python & Computer Vision Labs**:
   - Interactive nested loop pattern synthesizer and combinatorial Pascal's triangle.
   - 2D spatial convolution kernel matrix inspector (Sobel X/Y, Gaussian, Laplacian).

---

## Local Development & Build

```bash
# Clone the repository
git clone https://github.com/dhruv-atomic-mui21/mscaiml.git
cd mscaiml

# Install dependencies
npm install

# Start development server
npm run dev

# Build production bundle
npm run build
```

---

## Deployment to Vercel

The project is structured as a standard Next.js 14 App Router application:
1. Push changes to `main` branch.
2. Connect `https://github.com/dhruv-atomic-mui21/mscaiml.git` in Vercel.
3. Vercel automatically detects Next.js, executes `npm run build`, and deploys globally with zero custom configuration.

---

## Author & Credits

- **Curated & Developed by**: Dhruv
- **Portfolio & Contact**: [www.satyaneev.me](https://www.satyaneev.me)
- **Tagline**: *"For the students, by the students"*

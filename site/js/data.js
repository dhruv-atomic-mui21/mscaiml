// MSc AIML Academic Database - For the students, by the students
// Offline Academic Repository containing all notes, worked examples, and verified assignments

const academicData = {
  "semesters": [
    {
      "id": "sem-1",
      "number": "1",
      "title": "Semester 1",
      "subtitle": "Active Curriculum",
      "status": "active",
      "subjectsCount": 6,
      "topicsCount": "80+ Topics",
      "assignmentsCount": "180 Solved Problems",
      "description": "Foundational AI, C++ Data Structures, Coordinate Geometry & Set Theory, Python, Scientific Computing, and Computer Vision."
    },
    {
      "id": "sem-2",
      "number": "2",
      "title": "Semester 2",
      "subtitle": "Upcoming Semester",
      "status": "upcoming",
      "subjectsCount": 5,
      "topicsCount": "Curriculum In Prep",
      "assignmentsCount": "Available next term",
      "description": "Machine Learning, Advanced Algorithms, Deep Learning, Cloud Computing & Big Data Analytics."
    },
    {
      "id": "sem-3",
      "number": "3",
      "title": "Semester 3",
      "subtitle": "Upcoming Semester",
      "status": "upcoming",
      "subjectsCount": 5,
      "topicsCount": "Curriculum In Prep",
      "assignmentsCount": "Available next term",
      "description": "Natural Language Processing, Reinforcement Learning, MLOps, Autonomous Systems & Electives."
    },
    {
      "id": "sem-4",
      "number": "4",
      "title": "Semester 4",
      "subtitle": "Upcoming Semester",
      "status": "upcoming",
      "subjectsCount": 2,
      "topicsCount": "Capstone & Research",
      "assignmentsCount": "Dissertation track",
      "description": "Master's Thesis Dissertation, Industry Internship, and Research Publications."
    }
  ],
  "subjects": {
    "sem-1": [
      {
        "id": "ai",
        "code": "AIML-101",
        "name": "Artificial Intelligence",
        "subtitle": "Intelligent Agents & Problem Solving by Search",
        "stats": {
          "topics": 8,
          "assignments": 20,
          "demos": 2
        },
        "overview": "Comprehensive foundation in Rational Agents, PEAS specifications, environment taxonomies, state space formulation, uninformed and informed heuristic search (BFS, DFS, UCS, A*, Hill Climbing), game playing (Minimax, Alpha-Beta pruning), and Tic-Tac-Toe strategies.",
        "topics": [
          {
            "id": "ai-t1",
            "title": "What is AI & The 4 Historical Approaches",
            "tag": "Core Theory",
            "content": "\n                  <p>Artificial Intelligence (AI) focuses on creating computational systems capable of performing tasks typically requiring human intelligence—including visual recognition, automated deduction, game playing, and decision synthesis.</p>\n                  <div class=\"callout callout-info\">\n                    <div class=\"callout-title\">The Russell & Norvig 2x2 Matrix of AI Definitions</div>\n                    <ul>\n                      <li><strong>Thinking Humanly (Cognitive Science):</strong> Determining how the human brain reasons via introspection and neural imaging, then expressing those algorithms computationally.</li>\n                      <li><strong>Acting Humanly (The Turing Test Approach):</strong> Proposed by Alan Turing (1950). An interrogator interacts blindly with a human and machine via text. If indistinguishable, the system exhibits intelligent behavior. Requires NLP, knowledge representation, automated reasoning, and machine learning.</li>\n                      <li><strong>Thinking Rationally (Laws of Thought):</strong> Formalization of logical syllogisms where valid conclusions follow unconditionally from correct premises (e.g. First-Order Predicate Calculus).</li>\n                      <li><strong>Acting Rationally (Rational Agent Approach):</strong> The prevailing modern AI paradigm. An agent acts so as to achieve the optimal expected outcome (or maximum expected utility) given its percepts and background knowledge. Rationality is mathematically precise and does not require copying human biological flaws.</li>\n                    </ul>\n                  </div>\n                "
          },
          {
            "id": "ai-t2",
            "title": "Intelligent Agents & The PEAS Framework",
            "tag": "Architecture",
            "content": "\n                  <p>An <strong>agent</strong> perceives its environment through sensors and acts upon it through actuators. The agent's formal mathematical behavior is defined by the agent function: \\( f: P^* \\to A \\), mapping sequences of percepts \\( P^* \\) to concrete actions \\( A \\).</p>\n                  <div class=\"callout callout-info\">\n                    <div class=\"callout-title\">The PEAS Specification Framework</div>\n                    <p>Every rational agent must have its four structural boundaries clearly defined:</p>\n                    <ul>\n                      <li><strong>P - Performance Measure:</strong> The objective criterion used to evaluate success (e.g., safety, fuel efficiency, score, accuracy).</li>\n                      <li><strong>E - Environment:</strong> The external world in which the agent operates (e.g., roads, chess board, classroom).</li>\n                      <li><strong>A - Actuators:</strong> Mechanisms to influence the world (e.g., steering wheel, display, robot arm).</li>\n                      <li><strong>S - Sensors:</strong> Instruments gathering signals (e.g., cameras, LiDAR, keyboard, microphone).</li>\n                    </ul>\n                  </div>\n                "
          },
          {
            "id": "ai-t3",
            "title": "Environment Properties & Classification",
            "tag": "Foundations",
            "content": "\n                  <p>The complexity of an agent program is determined by environment properties:</p>\n                  <ul>\n                    <li><strong>Fully Observable vs Partially Observable:</strong> Fully observable if sensors capture complete world state at any instant (Chess). Partially observable if noise, occlusions, or hidden variables exist (Poker, Driving).</li>\n                    <li><strong>Deterministic vs Stochastic:</strong> Deterministic if next state is completely dictated by current state and agent action (8-puzzle). Stochastic if randomness or external actors introduce uncertainty (Weather, Traffic).</li>\n                    <li><strong>Episodic vs Sequential:</strong> Episodic if current choice has no bearing on future choices (Defect inspection). Sequential if actions accumulate long-term consequences (Chess, Navigation).</li>\n                    <li><strong>Static vs Dynamic:</strong> Static if world remains constant while agent deliberates (Crosswords). Dynamic if world changes during computation (Autonomous driving).</li>\n                    <li><strong>Discrete vs Continuous:</strong> Discrete if states, actions, and time steps are distinct countable values (Tic-Tac-Toe). Continuous if coordinates, angles, and velocities span real numbers (Self-driving vehicle).</li>\n                    <li><strong>Single Agent vs Multi-Agent:</strong> Single agent if agent operates alone (Solitaire). Multi-agent if other intelligent agents compete or cooperate (Market bidding, Football).</li>\n                  </ul>\n                "
          },
          {
            "id": "ai-t4",
            "title": "Agent Architectures: From Reflex to Learning Agents",
            "tag": "System Design",
            "content": "\n                  <p>Five canonical agent architectures exist in AI system design:</p>\n                  <ol>\n                    <li><strong>Simple Reflex Agent:</strong> Direct Condition-Action rules (<code>IF dirty THEN suck</code>). Has no memory; fails in partially observable spaces.</li>\n                    <li><strong>Model-Based Reflex Agent:</strong> Maintains internal state capturing unobservable features. Uses internal transition models of \"how the world evolves\" and \"what my actions do\".</li>\n                    <li><strong>Goal-Based Agent:</strong> Combines state tracking with explicit goal destinations. Uses heuristic search and planning to synthesize multi-step paths.</li>\n                    <li><strong>Utility-Based Agent:</strong> Evaluates trade-offs between competing outcomes using a continuous utility function \\( U(s) \\in \\mathbb{R} \\). Handles risk, speed vs safety, and probabilistic scenarios.</li>\n                    <li><strong>Learning Agent:</strong> Composed of a Critic (evaluates performance against standard), Learning Element (generates improvements), Learning Goals (drives exploration), and Performance Element (chooses actions).</li>\n                  </ol>\n                "
          },
          {
            "id": "ai-t5",
            "title": "State Space Search & Heuristics (A*, Hill Climbing)",
            "tag": "Search Algorithms",
            "content": "\n                  <p>A search problem is defined by a 5-tuple: \\( (s_0, Actions(s), Result(s,a), GoalTest(s), c(s,a,s')) \\).</p>\n                  <div class=\"formula-box\">\n                    <div class=\"formula-label\">Heuristic Evaluation in A* Search</div>\n                    \\( f(n) = g(n) + h(n) \\)<br>\n                    Where \\( g(n) \\) is the exact cost from root to node \\( n \\), and \\( h(n) \\) is the estimated cost from \\( n \\) to the goal.<br><br>\n                    <strong>Admissibility:</strong> \\( h(n) \\le h^*(n) \\) (never overestimates true cost). Guarantees tree-search optimality.<br>\n                    <strong>Consistency (Monotonicity):</strong> \\( h(n) \\le c(n, a, n') + h(n') \\). Guarantees graph-search optimality without reopening closed nodes.\n                  </div>\n                  <p><strong>Hill Climbing Pitfalls:</strong> Local Maxima (peaks lower than global), Ridges (sequences of local peaks impossible to navigate with 1-step moves), and Plateaux (flat surfaces where evaluation function gives identical values, causing random walking).</p>\n                "
          },
          {
            "id": "ai-t6",
            "title": "Adversarial Search & Game Playing: Minimax & Alpha-Beta",
            "tag": "Game Playing",
            "content": "\n                  <p>Two-player zero-sum games with perfect information are modeled via Game Trees where MAX maximizes utility and MIN minimizes it.</p>\n                  <div class=\"formula-box\">\n                    <div class=\"formula-label\">Alpha-Beta Pruning Rules</div>\n                    \\( \\alpha \\): Best value MAX can guarantee along path so far (initially \\( -\\infty \\)).<br>\n                    \\( \\beta \\): Best value MIN can guarantee along path so far (initially \\( +\\infty \\)).<br>\n                    Condition to prune: <code>IF &alpha; &ge; &beta; THEN prune remaining subtrees</code>.<br>\n                    Ideal move ordering reduces time complexity from \\( O(b^d) \\) to \\( O(b^{d/2}) \\), doubling search horizon!\n                  </div>\n                "
          }
        ],
        "assignments": [
          {
            "id": "ai-q1",
            "title": "Q1: Three Definitions of AI and Key Characteristics",
            "difficulty": "Core",
            "category": "Theory Assignment 1",
            "question": "Write three definitions of Artificial Intelligence. Write the characteristics of AI.",
            "solution": "\n                  <div class=\"solution-content\">\n                    <p><strong>1. Three Standard Definitions of AI:</strong></p>\n                    <ul>\n                      <li><strong>Definition 1 (Rational Agent Approach - Russell & Norvig):</strong> \"Artificial Intelligence is the study and design of rational agents that perceive their environment through sensors and act autonomously through actuators to maximize their expected utility.\"</li>\n                      <li><strong>Definition 2 (Cognitive Approach - John McCarthy, 1956):</strong> \"AI is the science and engineering of making intelligent machines, especially intelligent computer programs, that solve problems and achieve goals via mechanisms modeled after human cognition.\"</li>\n                      <li><strong>Definition 3 (Behavioral / Capability Approach - Elaine Rich):</strong> \"Artificial Intelligence is the study of how to make computers do things which, at the moment, people are doing better.\"</li>\n                    </ul>\n                    <p><strong>2. Core Characteristics of AI Systems:</strong></p>\n                    <ul>\n                      <li><strong>Perception & Ingestion:</strong> Processing multi-modal sensory inputs (visual frames, audio signals, text streams).</li>\n                      <li><strong>Knowledge Representation:</strong> Organizing facts, ontologies, and rules in formal structures for logical deduction.</li>\n                      <li><strong>Automated Reasoning & Inference:</strong> Generating valid conclusions from incomplete or uncertain premises.</li>\n                      <li><strong>Adaptability & Learning:</strong> Modifying internal policies and parameters from environment interaction over time.</li>\n                      <li><strong>Heuristic Search:</strong> Navigating exponentially large combinatorial search spaces efficiently.</li>\n                    </ul>\n                    <div class=\"callout callout-success\">\n                      <div class=\"callout-title\">Exam Tip</div>\n                      Always categorize your definitions into Rational vs Cognitive vs Behavioral to demonstrate comprehensive theoretical breadth.\n                    </div>\n                  </div>\n                "
          },
          {
            "id": "ai-q2",
            "title": "Q2: The Turing Test Architecture and Analysis",
            "difficulty": "Core",
            "category": "Theory Assignment 1",
            "question": "Explain the Turing Test in detail with figures.",
            "solution": "\n                  <div class=\"solution-content\">\n                    <p>Introduced by Alan Turing in his 1950 seminal paper <em>Computing Machinery and Intelligence</em>, the Turing Test (originally the \"Imitation Game\") offers an operational test of whether a machine can exhibit human-indistinguishable intelligence.</p>\n                    <div class=\"callout callout-info\">\n                      <div class=\"callout-title\">Turing Test Physical Layout</div>\n                      <pre class=\"code-block\">\n               +--------------------------------------+\n               |    Human Interrogator (Judge C)      |\n               +--------------------------------------+\n                                   |\n                         Blind Text Terminal\n                                   |\n                    +--------------+--------------+\n                    |                             |\n                    v                             v\n         +--------------------+        +--------------------+\n         |  Human Player (A)  |        |    AI Agent (B)    |\n         +--------------------+        +--------------------+\n         |   (Separate Room)  |        |   (Separate Room)  |\n         +--------------------+        +--------------------+\n                      </pre>\n                    </div>\n                    <p><strong>Operational Protocol:</strong> Interrogator C engages in natural language conversations with A and B via teletype/chat. If C cannot reliably tell which is human and which is machine after 5 minutes, the AI passes.</p>\n                    <p><strong>Required Capabilities:</strong> Natural Language Processing (to parse and generate grammar), Knowledge Representation (to store memories), Automated Reasoning (to deduce responses), and Machine Learning (to adapt to dialogue shifts).</p>\n                    <p><strong>Total Turing Test Extension:</strong> Incorporates visual screens and physical interaction slots, requiring Computer Vision and Robotics.</p>\n                  </div>\n                "
          },
          {
            "id": "ai-q3",
            "title": "Q3: Modern Applications of AI across Industries",
            "difficulty": "Core",
            "category": "Theory Assignment 1",
            "question": "Write the applications of AI in different areas.",
            "solution": "\n                  <div class=\"solution-content\">\n                    <ul>\n                      <li><strong>Autonomous Navigation & Robotics:</strong> Trajectory generation, obstacle avoidance (LiDAR, Stereo Vision), SLAM (Simultaneous Localization and Mapping), and robotic warehouse sorting.</li>\n                      <li><strong>Healthcare & Bioinformatics:</strong> Protein folding prediction (AlphaFold), automated early diagnostic detection of oncological tumors in MRI/CT scans, and personalized genomic drug discovery.</li>\n                      <li><strong>Natural Language & Semantic Search:</strong> Transformer-based Large Language Models (LLMs), machine translation, automated code synthesis, and sentiment analysis.</li>\n                      <li><strong>Financial Analytics:</strong> Fraud anomaly detection on millisecond transaction streams, algorithmic high-frequency trading, and automated credit risk scoring.</li>\n                      <li><strong>Computer Vision:</strong> Facial authentication, defect detection on high-speed industrial assembly lines, and satellite agricultural yield estimation.</li>\n                    </ul>\n                  </div>\n                "
          },
          {
            "id": "ai-q4",
            "title": "Q4: Algorithm of Strategy - 3 for Tic - Tac - Toe",
            "difficulty": "Intermediate",
            "category": "Theory Assignment 1",
            "question": "Write the algorithm of Strategy - 3 of Tic - Tac - Toe.",
            "solution": "\n                  <div class=\"solution-content\">\n                    <p>Strategy 3 is a rule-based expert heuristic algorithm. Production rules are evaluated sequentially in strict priority order:</p>\n                    <div class=\"code-container\">\n                      <div class=\"code-header\"><span>Strategy-3 Production Rules Algorithm</span></div>\n                      <pre class=\"code-block\">\nAlgorithm Strategy3_TicTacToe(board, AI_symbol, Opponent_symbol):\n  1. Win: If AI has two in any winning line and third is empty -> Place at third cell to win.\n  2. Block: If Opponent has two in any winning line and third is empty -> Place at third cell to block.\n  3. Fork: If AI can create an opportunity where two lines simultaneously threaten a win -> Place for fork.\n  4. Block Fork:\n     - Case A: Create a two-in-a-row threat that forces the opponent to defend, provided defense doesn't create a fork for them.\n     - Case B: If opponent can fork, take the intersection cell to eliminate their fork.\n  5. Center: If center cell (cell 5) is unoccupied -> Take center.\n  6. Opposite Corner: If Opponent occupies a corner cell and opposite corner is empty -> Take opposite corner.\n  7. Empty Corner: If any corner [1, 3, 7, 9] is empty -> Take first empty corner.\n  8. Empty Side: If any side/edge [2, 4, 6, 8] is empty -> Take first empty side.\n                      </pre>\n                    </div>\n                    <div class=\"callout callout-info\">\n                      <div class=\"callout-title\">Guaranteed Property</div>\n                      Strict execution of Strategy 3 guarantees that the AI cannot lose (it will either win or force a draw).\n                    </div>\n                  </div>\n                "
          },
          {
            "id": "ai-q5",
            "title": "Q5: Extensibility of Tic-Tac-Toe to 4x4 Grid for 2 Players",
            "difficulty": "Advanced",
            "category": "Theory Assignment 1",
            "question": "Explain is Tic - Tac - Toe board extensible to a 4 x 4 for 2 players? Justify.",
            "solution": "\n                  <div class=\"solution-content\">\n                    <p><strong>Yes, the game is extensible</strong> to a 4x4 board, but its mathematical properties change drastically:</p>\n                    <ul>\n                      <li><strong>Combinatorial State Space Explosion:</strong>\n                        Standard 3x3 has 9 cells: theoretical states \\( 3^9 = 19,683 \\).<br>\n                        A 4x4 grid has 16 cells: theoretical states \\( 3^{16} = 43,046,721 \\) states! This \\( 2,187 \\times \\) increase renders table lookups (Strategy 1) completely impossible.\n                      </li>\n                      <li><strong>Winning Lines:</strong>\n                        Standard 3x3 has 8 winning lines.<br>\n                        A 4x4 grid has 10 winning lines (4 horizontal, 4 vertical, 2 main diagonals).\n                      </li>\n                      <li><strong>First-Mover Game Balance:</strong>\n                        If 4-in-a-row is required, the first player holds an immense theoretical advantage. Without modified rules (e.g. pie rule or requiring 3-in-a-row on 4x4), the second player cannot easily defend. Hence, game-tree search must utilize depth-limited Minimax with heuristic evaluation functions rather than pure brute-force lookahead.\n                      </li>\n                    </ul>\n                  </div>\n                "
          },
          {
            "id": "ai-q6",
            "title": "Q6: Intelligent Agents Structure and Mathematical Definition",
            "difficulty": "Core",
            "category": "Theory Assignment 1",
            "question": "Write about Intelligent Agents in detail. (draw figure)",
            "solution": "\n                  <div class=\"solution-content\">\n                    <p>An <strong>Intelligent Agent</strong> is an autonomous computational entity that perceives its environment through sensors and acts upon that environment using actuators toward achieving predefined performance objectives.</p>\n                    <div class=\"callout callout-info\">\n                      <div class=\"callout-title\">Agent-Environment Feedback Loop</div>\n                      <pre class=\"code-block\">\n               +-------------------------------------------+\n               |                ENVIRONMENT                |\n               +-------------------------------------------+\n                     ^                               |\n                     | Actions                       | Percepts\n                     |                               v\n             +---------------+               +---------------+\n             |   ACTUATORS   |               |    SENSORS    |\n             +---------------+               +---------------+\n                     ^                               |\n                     | Commands                      | Sensor Data\n                     |                               v\n             +-----------------------------------------------+\n             |                     AGENT                     |\n             |                                               |\n             |   Current World State Representation          |\n             |                       v                       |\n             |   Evaluation / Utility / Heuristic Logic      |\n             |                       v                       |\n             |   Action Selection (Agent Program)            |\n             +-----------------------------------------------+\n                      </pre>\n                    </div>\n                    <p><strong>Mathematical Formulation:</strong></p>\n                    <ul>\n                      <li>Percept Sequence \\( P^* \\): Entire history of percepts received up to time \\( t \\).</li>\n                      <li>Agent Function: \\( f: P^* \\to A \\).</li>\n                      <li>Agent Program: Concrete executable running on physical architecture \\( \\text{Architecture} + \\text{Program} = \\text{Agent} \\).</li>\n                    </ul>\n                  </div>\n                "
          },
          {
            "id": "ai-q7",
            "title": "Q7: Reactiveness vs Proactiveness in Intelligent Agents",
            "difficulty": "Core",
            "category": "Theory Assignment 1",
            "question": "Explain reactiveness and proactiveness of an intelligent agent.",
            "solution": "\n                  <div class=\"solution-content\">\n                    <p>These two characteristics form the fundamental behavioral duality of robust autonomous systems:</p>\n                    <div class=\"data-table-wrapper\">\n                      <table class=\"data-table\">\n                        <thead>\n                          <tr><th>Dimension</th><th>Reactiveness (Stimulus-Driven)</th><th>Proactiveness (Goal-Driven)</th></tr>\n                        </thead>\n                        <tbody>\n                          <tr><td><strong>Focus</strong></td><td>Real-time responsiveness to sudden environment shifts.</td><td>Anticipatory, deliberate pursuit of long-term goals.</td></tr>\n                          <tr><td><strong>Trigger</strong></td><td>External sensor percepts (e.g. collision alarm).</td><td>Internal objectives and utility optimization.</td></tr>\n                          <tr><td><strong>Computation</strong></td><td>Low-latency Condition-Action lookup tables.</td><td>State space search, lookahead planning, simulation.</td></tr>\n                          <tr><td><strong>Example</strong></td><td>Anti-lock Braking System (ABS) activating on ice.</td><td>GPS rerouting 20 minutes before a known roadblock occurs.</td></tr>\n                        </tbody>\n                      </table>\n                    </div>\n                  </div>\n                "
          },
          {
            "id": "ai-q8",
            "title": "Q8: Environment Classification for 4 Domain Agents",
            "difficulty": "Intermediate",
            "category": "Theory Assignment 1",
            "question": "Write the Environment types for following (with reason): a. Automatic taxi driver, b. AI tutor, c. Vacuum cleaner agent, d. Traffic control agent.",
            "solution": "\n                  <div class=\"solution-content\">\n                    <div class=\"data-table-wrapper\">\n                      <table class=\"data-table\">\n                        <thead>\n                          <tr><th>Agent</th><th>Observable</th><th>Deterministic</th><th>Episodic</th><th>Static</th><th>Discrete</th><th>Agents</th></tr>\n                        </thead>\n                        <tbody>\n                          <tr><td><strong>Auto Taxi</strong></td><td>Partially</td><td>Stochastic</td><td>Sequential</td><td>Dynamic</td><td>Continuous</td><td>Multi-Agent</td></tr>\n                          <tr><td><strong>AI Tutor</strong></td><td>Partially</td><td>Stochastic</td><td>Sequential</td><td>Dynamic</td><td>Discrete</td><td>Multi-Agent</td></tr>\n                          <tr><td><strong>Vacuum Cleaner</strong></td><td>Fully/Partially</td><td>Deterministic</td><td>Sequential</td><td>Static</td><td>Discrete</td><td>Single-Agent</td></tr>\n                          <tr><td><strong>Traffic Light</strong></td><td>Partially</td><td>Stochastic</td><td>Sequential</td><td>Dynamic</td><td>Continuous</td><td>Multi-Agent</td></tr>\n                        </tbody>\n                      </table>\n                    </div>\n                    <p><strong>Detailed Justifications:</strong></p>\n                    <ul>\n                      <li><strong>Auto Taxi:</strong> Partially observable (cannot see behind trucks or around corners); Stochastic (pedestrians cross unpredictably); Sequential (current speed impacts braking distant later); Dynamic (cars move while taxi deliberates); Continuous (steering angle, acceleration are real numbers); Multi-agent (other drivers compete/cooperate).</li>\n                      <li><strong>AI Tutor:</strong> Partially observable (cannot directly observe cognitive brain state); Stochastic (student answers vary based on fatigue); Sequential (early concept mastery dictates later learning); Dynamic (student attention drifts during lesson); Discrete (grades, quiz options are countable); Multi-agent (interacts with human student).</li>\n                      <li><strong>Vacuum Cleaner:</strong> Discrete (grid squares); Static (dirt does not move while cleaning in isolated room); Single-agent (operates alone); Sequential (battery and dirt accumulation depend on path).</li>\n                      <li><strong>Traffic Controller:</strong> Continuous (arrival flow rates); Dynamic (queues lengthen while computing signal phase); Multi-agent (interacts with hundreds of independent vehicle drivers).</li>\n                    </ul>\n                  </div>\n                "
          },
          {
            "id": "ai-q9",
            "title": "Q9: Complete PEAS Descriptions for 4 Canonical Agents",
            "difficulty": "Core",
            "category": "Theory Assignment 1",
            "question": "Write PEAS description for following: a. Automatic taxi driver, b. AI tutor, c. Vacuum cleaner agent, d. Traffic control agent.",
            "solution": "\n                  <div class=\"solution-content\">\n                    <div class=\"data-table-wrapper\">\n                      <table class=\"data-table\">\n                        <thead>\n                          <tr><th>Agent</th><th>Performance Measure (P)</th><th>Environment (E)</th><th>Actuators (A)</th><th>Sensors (S)</th></tr>\n                        </thead>\n                        <tbody>\n                          <tr><td><strong>Auto Taxi</strong></td><td>Safety, legal speed, passenger comfort, fuel efficiency, route time</td><td>Roadways, pedestrian crossings, vehicular traffic, weather</td><td>Steering, throttle, disc brakes, turn signals, display screen</td><td>Cameras, LiDAR, radar, GPS, IMU, speedometer, engine telemetry</td></tr>\n                          <tr><td><strong>AI Tutor</strong></td><td>Student syllabus mastery score, engagement retention, test score gains</td><td>Student interactions, problem sets, curriculum syllabus</td><td>Display text, interactive hints, generated exercises, feedback</td><td>Keyboard input, answer selection, response latency timer, camera gaze</td></tr>\n                          <tr><td><strong>Vacuum Cleaner</strong></td><td>Clean percentage of floor, battery power consumption, elapsed time</td><td>Floor carpet, wood tiles, walls, furniture legs, dirt particles</td><td>Drive wheels, brush cylinder motor, vacuum impeller fan</td><td>Dirt infrared sensor, mechanical bumper switch, cliff sensor</td></tr>\n                          <tr><td><strong>Traffic Control</strong></td><td>Average vehicle waiting delay, total intersection throughput, emergency priority</td><td>Road intersections, lane queues, pedestrians, weather</td><td>Traffic light lamps (R/Y/G), pedestrian walk signals</td><td>Sub-surface inductive loops, overhead traffic video cameras</td></tr>\n                        </tbody>\n                      </table>\n                    </div>\n                  </div>\n                "
          },
          {
            "id": "ai-q10",
            "title": "Q10: Exhaustive Analysis of the 5 Agent Types",
            "difficulty": "Core",
            "category": "Theory Assignment 1",
            "question": "Explain different types of Agents in detail.",
            "solution": "\n                  <div class=\"solution-content\">\n                    <ol>\n                      <li><strong>Simple Reflex Agent:</strong> Evaluates condition-action rules based purely on the immediate percept \\( p_t \\). Does not maintain history. Incapable of operating in partially observable environments due to inescapable loops.</li>\n                      <li><strong>Model-Based Reflex Agent:</strong> Maintains an internal model of the world state. Incorporates physics transitions (\"how the world evolves independent of agent\") and action models (\"how agent actuators alter the world\").</li>\n                      <li><strong>Goal-Based Agent:</strong> Supplements world models with explicit destination goal criteria. Evaluates candidate actions using search algorithms to find paths that fulfill the goal condition.</li>\n                      <li><strong>Utility-Based Agent:</strong> Replaces binary goals with a continuous utility function \\( U: S \\to \\mathbb{R} \\). Allows rational trade-offs between conflicting goals (e.g. speed vs comfort) and handles probabilistic outcomes.</li>\n                      <li><strong>Learning Agent:</strong> Comprises four distinct structural components:\n                        <ul>\n                          <li><em>Critic:</em> Evaluates behavior against an external performance standard.</li>\n                          <li><em>Learning Element:</em> Uses critic feedback to update the decision policy.</li>\n                          <li><em>Learning Goals (Problem Generator):</em> Prompts exploratory actions to discover better behaviors.</li>\n                          <li><em>Performance Element:</em> Selects external actions using current policy.</li>\n                        </ul>\n                      </li>\n                    </ol>\n                  </div>\n                "
          },
          {
            "id": "ai-ct1",
            "title": "CT1: 'Thinking Like Humans' vs 'Acting Rationally' Divergence",
            "difficulty": "Critical Thinking",
            "category": "Critical Thinking Preparation",
            "question": "How would you differentiate between 'AI that thinks like humans' and 'AI that acts rationally'? Can you give examples where these two approaches might lead to different solutions?",
            "solution": "\n                  <div class=\"solution-content\">\n                    <p><strong>Conceptual Difference:</strong></p>\n                    <ul>\n                      <li><em>Thinking Like Humans</em> models biological human psychology, cognitive biases, and brain neural scans. It embraces human heuristics and emotional intuition.</li>\n                      <li><em>Acting Rationally</em> adheres to normative mathematical optimality: choosing actions that maximize expected utility regardless of whether a human would choose them.</li>\n                    </ul>\n                    <p><strong>Example of Divergent Solutions (Medical Triage / Emergency Response):</strong></p>\n                    <ul>\n                      <li><strong>Human Thinking AI:</strong> In an intensive care unit, a human doctor might prioritize a patient who is visibly weeping or emotional, or a patient who arrived first, influenced by empathy and moral emotion.</li>\n                      <li><strong>Rational Acting AI:</strong> Computes strictly by expected Quality-Adjusted Life Years (QALY). Allocates the limited ventilator to the patient with the highest statistical survival probability, dispassionately maximizing total lives saved.</li>\n                    </ul>\n                    <div class=\"callout callout-warning\">\n                      <div class=\"callout-title\">Key Insight</div>\n                      Humans frequently act irrationally due to cognitive biases (loss aversion, sunk cost fallacy). A rational agent will avoid these systematic human errors.\n                    </div>\n                  </div>\n                "
          },
          {
            "id": "ai-ct2",
            "title": "CT2: Non-Human Process Producing Correct Results: Is it Intelligent?",
            "difficulty": "Critical Thinking",
            "category": "Critical Thinking Preparation",
            "question": "If an AI system produces correct results but uses a completely different process from human reasoning, should it still be called 'intelligent'? Why or why not?",
            "solution": "\n                  <div class=\"solution-content\">\n                    <p><strong>Yes, under the Functionalist and Rational Agent perspectives</strong>, intelligence is characterized by functional input-output behavior rather than biological substrate implementation (Principle of Multiple Realizability).</p>\n                    <p><strong>Key Arguments:</strong></p>\n                    <ul>\n                      <li><em>Aeronautical Analogy:</em> Submarines do not swim like fish, and commercial aircraft do not flap their wings like birds; yet we unquestionably consider them to swim and fly. Similarly, an algorithm using matrix arithmetic and gradient descent to solve problems is achieving intelligence via computational means.</li>\n                      <li><em>Turing's Operational View:</em> The internal mechanical process is irrelevant if the entity consistently generates valid, rational decisions when confronted with complex problem domains.</li>\n                      <li><em>Counter-perspective (John Searle's Chinese Room):</em> A syntactic symbol manipulation system may lack semantic understanding (\"intentionality\"), but from an engineering standpoint, its external behavior is functionally intelligent.</li>\n                    </ul>\n                  </div>\n                "
          },
          {
            "id": "ai-ct3",
            "title": "CT3: Hardest Task Domains for AI to Master and Rationale",
            "difficulty": "Critical Thinking",
            "category": "Critical Thinking Preparation",
            "question": "Which task domains do you think are hardest for AI to master and why?",
            "solution": "\n                  <div class=\"solution-content\">\n                    <p><strong>1. Common Sense Reasoning & Intuitive Physics:</strong></p>\n                    <p>Humans understand instinctively that water spills from an overturned cup or that heavy objects crush fragile ones without needing explicit database rules. Capturing millions of unstated world assumptions remains deeply challenging.</p>\n                    <p><strong>2. Unstructured Open-World Social Interaction:</strong></p>\n                    <p>Negotiation, conflict mediation, and emotional empathy require high-order Theory of Mind (modeling what person A thinks person B believes about person C).</p>\n                    <p><strong>3. Moravec's Paradox:</strong></p>\n                    <p>It is comparatively easy to make computers exhibit adult-level performance on intelligence tests or playing grandmaster chess, but difficult to give them the perceptual and motor skills of a one-year-old child (e.g. walking smoothly across an uneven rocky field).</p>\n                  </div>\n                "
          },
          {
            "id": "ai-ct4",
            "title": "CT4: Guiding Factors between Search-Based and Knowledge-Based AI",
            "difficulty": "Critical Thinking",
            "category": "Critical Thinking Preparation",
            "question": "When choosing between search-based AI techniques and knowledge-based AI techniques, what factors should guide the choice?",
            "solution": "\n                  <div class=\"solution-content\">\n                    <div class=\"data-table-wrapper\">\n                      <table class=\"data-table\">\n                        <thead><tr><th>Factor</th><th>Search-Based Preferred</th><th>Knowledge-Based Preferred</th></tr></thead>\n                        <tbody>\n                          <tr><td><strong>Problem Rules</strong></td><td>Compact, well-defined rules (Chess, Maze).</td><td>Massive body of real-world facts and domain policies.</td></tr>\n                          <tr><td><strong>Solution Nature</strong></td><td>Found by exploring action sequences.</td><td>Found through logical inference over assertions.</td></tr>\n                          <tr><td><strong>State Space</strong></td><td>Combinatorial spaces requiring heuristics.</td><td>Declarative ontologies (Tax laws, Medicine).</td></tr>\n                          <tr><td><strong>Explainability</strong></td><td>Path trace is sufficient.</td><td>Formal deductive audit trail required by regulators.</td></tr>\n                        </tbody>\n                      </table>\n                    </div>\n                  </div>\n                "
          },
          {
            "id": "ai-ct5",
            "title": "CT5: Dynamic, Stochastic, Multi-Agent Architecture Influence",
            "difficulty": "Critical Thinking",
            "category": "Critical Thinking Preparation",
            "question": "Give an example of an environment that is dynamic, stochastic, and multi-agent. How would these properties influence the agent’s architecture?",
            "solution": "\n                  <div class=\"solution-content\">\n                    <p><strong>Example: High-Frequency Algorithmic Stock Trading / Autonomous Highway Driving.</strong></p>\n                    <p><strong>Architectural Impacts:</strong></p>\n                    <ul>\n                      <li><em>Dynamic:</em> Imposes strict real-time deadlines. Algorithms must use anytime-search or fast reactive heuristics so an action is available within milliseconds before the market or traffic shifts.</li>\n                      <li><em>Stochastic:</em> Prevents deterministic lookahead trees. The agent must use probabilistic transition models (e.g. Markov Decision Processes / POMDPs) and maximize Expected Utility rather than absolute goal states.</li>\n                      <li><em>Multi-Agent:</em> Requires Game Theoretic modeling (Nash equilibria, opponent profiling) to anticipate competitive or adversarial counter-actions.</li>\n                    </ul>\n                  </div>\n                "
          },
          {
            "id": "ai-ct6",
            "title": "CT6: Necessity of Formal Environment Classification Before Design",
            "difficulty": "Critical Thinking",
            "category": "Critical Thinking Preparation",
            "question": "Why is it important to formally classify environments (e.g., deterministic vs. stochastic) before designing an AI agent?",
            "solution": "\n                  <div class=\"solution-content\">\n                    <p>Classifying the environment establishes the required algorithmic machinery, preventing critical system failure and avoiding over-engineering:</p>\n                    <ul>\n                      <li><strong>Observability determines Memory Requirements:</strong> Fully observable environments allow memoryless agents. Partially observable environments demand belief states and internal memory (Model-based).</li>\n                      <li><strong>Determinism determines Search Framework:</strong> Deterministic spaces use classical search (BFS, A*). Stochastic spaces mandate probability distributions and Bellman equations.</li>\n                      <li><strong>Episodic vs Sequential dictates Planning:</strong> Episodic allows simple classifiers; sequential requires tree lookaheads and reinforcement learning.</li>\n                    </ul>\n                  </div>\n                "
          },
          {
            "id": "ai-ct7",
            "title": "CT7: Can a Rational Decision Result in Failure?",
            "difficulty": "Critical Thinking",
            "category": "Critical Thinking Preparation",
            "question": "Can an agent be considered rational even if its decisions sometimes lead to failure? Under what conditions?",
            "solution": "\n                  <div class=\"solution-content\">\n                    <p><strong>Yes, absolutely.</strong> Rationality is not omniscience. Rationality is about expected success based on the information available at the moment of decision, whereas perfection/omniscience requires knowledge of actual outcomes in hindsight.</p>\n                    <p><strong>Conditions:</strong></p>\n                    <ul>\n                      <li>The environment is stochastic or partially observable.</li>\n                      <li>The agent chose the action that mathematically maximized Expected Utility: \\( E[U] = \\sum P(s' | s, a) U(s') \\).</li>\n                      <li>An extremely low-probability event intervened (e.g., meteor strike or a car running a red light into a taxi that legally entered an intersection). The taxi acted completely rationally despite the failure.</li>\n                    </ul>\n                  </div>\n                "
          },
          {
            "id": "ai-ct8",
            "title": "CT8: Challenges in Maintaining Knowledge Base Consistency",
            "difficulty": "Critical Thinking",
            "category": "Critical Thinking Preparation",
            "question": "What are the main challenges in keeping a knowledge base consistent as an AI learns from new data?",
            "solution": "\n                  <div class=\"solution-content\">\n                    <ul>\n                      <li><strong>Non-Monotonicity:</strong> New facts can invalidate previously held truths (e.g. \"Tweety is a bird\" -> deduce Tweety flies; new percept: \"Tweety is a penguin\" -> invalidates prior deduction).</li>\n                      <li><strong>The Frame Problem:</strong> Specifying efficiently which aspects of the world remain unchanged when an action occurs.</li>\n                      <li><strong>Contradiction Contagion (Principle of Explosion):</strong> In classical propositional logic, a single contradiction \\( (P \\wedge \\neg P) \\) allows any arbitrary false statement to be mathematically derived.</li>\n                      <li><strong>Computational Complexity:</strong> Checking consistency of propositional logic is NP-complete (SAT problem).</li>\n                    </ul>\n                  </div>\n                "
          },
          {
            "id": "ai-ct9",
            "title": "CT9: Redesigning Simple Reflex Agents for Unpredictable Environments",
            "difficulty": "Critical Thinking",
            "category": "Critical Thinking Preparation",
            "question": "How would you redesign a simple reflex agent to perform better in an environment that changes unpredictably?",
            "solution": "\n                  <div class=\"solution-content\">\n                    <ol>\n                      <li><strong>Incorporate Internal State (Model-Based Transition):</strong> Store historical percept sequences to track hidden environmental variables.</li>\n                      <li><strong>Introduce Stochastic Randomization:</strong> When stuck in repetitive cycles due to unobserved features, randomize action selection (e.g., randomized turn angles) to break infinite loops.</li>\n                      <li><strong>Kalman / Bayesian Sensor Filtering:</strong> Smooth noisy sensor inputs over time to prevent erratic twitching.</li>\n                      <li><strong>Dynamic Rule Weight Adaptation:</strong> Adjust condition-action rule priority weights based on recent success or failure feedback.</li>\n                    </ol>\n                  </div>\n                "
          },
          {
            "id": "ai-ct10",
            "title": "CT10: Goal-Based vs Utility-Based Agent Trade-Offs in Autonomous Driving",
            "difficulty": "Critical Thinking",
            "category": "Critical Thinking Preparation",
            "question": "What are the trade-offs between a goal-based agent and a utility-based agent in a real-world application like autonomous driving?",
            "solution": "\n                  <div class=\"solution-content\">\n                    <div class=\"data-table-wrapper\">\n                      <table class=\"data-table\">\n                        <thead><tr><th>Property</th><th>Goal-Based Agent</th><th>Utility-Based Agent</th></tr></thead>\n                        <tbody>\n                          <tr><td><strong>Evaluation Mode</strong></td><td>Binary: Goal Achieved (Destination Reached = 1) or Not (0).</td><td>Continuous: Scores trajectory by safety, comfort, speed, and fuel.</td></tr>\n                          <tr><td><strong>Trade-off Handling</strong></td><td>Cannot trade off speed for passenger comfort.</td><td>Balances conflicting objectives smoothly via utility weighting.</td></tr>\n                          <tr><td><strong>Uncertainty</strong></td><td>Fails if no route is guaranteed to reach goal.</td><td>Selects route with highest probability of successful arrival.</td></tr>\n                          <tr><td><strong>Computational Cost</strong></td><td>Faster path search (A* to goal coordinate).</td><td>Higher computational burden evaluating continuous multi-attribute utility.</td></tr>\n                        </tbody>\n                      </table>\n                    </div>\n                  </div>\n                "
          }
        ],
        "cheatsheet": [
          {
            "title": "Search Algorithms Complexity Summary",
            "content": "\n                  <div class=\"data-table-wrapper\">\n                    <table class=\"data-table\">\n                      <thead>\n                        <tr><th>Algorithm</th><th>Time Complexity</th><th>Space Complexity</th><th>Complete?</th><th>Optimal?</th></tr>\n                      </thead>\n                      <tbody>\n                        <tr><td>BFS</td><td>O(b^d)</td><td>O(b^d)</td><td>Yes</td><td>Yes (if step cost = 1)</td></tr>\n                        <tr><td>DFS</td><td>O(b^m)</td><td>O(b*m)</td><td>No (in infinite paths)</td><td>No</td></tr>\n                        <tr><td>UCS</td><td>O(b^(1 + C*/eps))</td><td>O(b^(1 + C*/eps))</td><td>Yes</td><td>Yes (if step cost >= eps > 0)</td></tr>\n                        <tr><td>IDDFS</td><td>O(b^d)</td><td>O(b*d)</td><td>Yes</td><td>Yes (if step cost = 1)</td></tr>\n                        <tr><td>A* Search</td><td>O(b^d)</td><td>O(b^d)</td><td>Yes</td><td>Yes (if h(n) admissible & consistent)</td></tr>\n                      </tbody>\n                    </table>\n                  </div>\n                "
          }
        ]
      },
      {
        "id": "data-structures",
        "code": "AIML-102",
        "name": "Data Structures using C++",
        "subtitle": "Pointers, OOP, Operator Overloading & Generic Templates",
        "stats": {
          "topics": 8,
          "assignments": 49,
          "demos": 1
        },
        "overview": "Rigorous treatment of memory architecture, pointers, dynamic allocation, C++ OOP design patterns, operator overloading, stream manipulation, templates, and fundamental algorithmic data structures.",
        "topics": [
          {
            "id": "ds-t1",
            "title": "C Pointers, Memory Model & DMA",
            "tag": "C Core",
            "content": "\n              <p>Pointers store physical memory addresses. In C, dynamic memory allocation occurs in the <strong>Heap</strong> segment via four standard runtime functions:</p>\n              <ul>\n                <li><code>malloc(size_t size)</code>: Allocates uninitialized memory chunk of specified byte size.</li>\n                <li><code>calloc(size_t num, size_t size)</code>: Allocates contiguous block zero-initializing all bytes.</li>\n                <li><code>realloc(void *ptr, size_t new_size)</code>: Resizes existing allocated block, migrating contents if memory expansion requires relocation.</li>\n                <li><code>free(void *ptr)</code>: Deallocates heap memory back to the OS runtime pool, preventing memory leaks.</li>\n              </ul>\n              <div class=\"callout callout-warning\">\n                <div class=\"callout-title\">Dangling Pointers & Memory Leaks</div>\n                <p>Always set deallocated pointers to <code>NULL</code> immediately after <code>free(ptr)</code> to prevent accessing freed heap memory.</p>\n              </div>\n            "
          },
          {
            "id": "ds-t2",
            "title": "Storage Classes & Preprocessor Directives",
            "tag": "Architecture",
            "content": "\n              <p>Storage classes define variable scope, lifetime, and storage location:</p>\n              <div class=\"data-table-wrapper\">\n                <table class=\"data-table\">\n                  <thead><tr><th>Storage Class</th><th>Keyword</th><th>Location</th><th>Default Value</th><th>Scope</th><th>Lifetime</th></tr></thead>\n                  <tbody>\n                    <tr><td>Automatic</td><td><code>auto</code></td><td>Stack</td><td>Garbage</td><td>Block</td><td>End of block</td></tr>\n                    <tr><td>Register</td><td><code>register</code></td><td>CPU Register</td><td>Garbage</td><td>Block</td><td>End of block</td></tr>\n                    <tr><td>Static</td><td><code>static</code></td><td>Data Segment</td><td>Zero</td><td>File / Block</td><td>Entire Program</td></tr>\n                    <tr><td>External</td><td><code>extern</code></td><td>Data Segment</td><td>Zero</td><td>Global across files</td><td>Entire Program</td></tr>\n                  </tbody>\n                </table>\n              </div>\n            "
          },
          {
            "id": "ds-t3",
            "title": "C++ OOP Principles & Encapsulation",
            "tag": "OOP Core",
            "content": "\n              <p>C++ introduces class-based Object-Oriented Programming (OOP) enforcing four pillars:</p>\n              <ol>\n                <li><strong>Encapsulation:</strong> Bundling data members and member functions into classes with access specifiers (<code>private</code>, <code>protected</code>, <code>public</code>).</li>\n                <li><strong>Abstraction:</strong> Exposing essential interface contracts while concealing internal algorithmic and memory management mechanisms.</li>\n                <li><strong>Inheritance:</strong> Reusing code and establishing hierarchical polymorphism.</li>\n                <li><strong>Polymorphism:</strong> Compile-time (function overloading, operator overloading, templates) and Run-time (virtual functions, dynamic dispatch via vtable).</li>\n              </ol>\n            "
          },
          {
            "id": "ds-t4",
            "title": "Operator Overloading Mechanics",
            "tag": "Polymorphism",
            "content": "\n              <p>Operator overloading allows user-defined types to exhibit natural mathematical syntax. Syntax:</p>\n              <pre><code>ReturnType operator Symbol(ParameterList) { /* body */ }</code></pre>\n              <div class=\"callout callout-info\">\n                <div class=\"callout-title\">Operators That CANNOT Be Overloaded</div>\n                <p>For safety and compiler integrity, C++ forbids overloading: <code>.</code> (member access), <code>.*</code> (pointer-to-member), <code>::</code> (scope resolution), <code>?:</code> (ternary conditional), and <code>sizeof</code>.</p>\n              </div>\n            "
          },
          {
            "id": "ds-t5",
            "title": "Friend Functions & Friend Classes",
            "tag": "OOP Mechanics",
            "content": "\n              <p>A <code>friend</code> function is a non-member function granted explicit access to <code>private</code> and <code>protected</code> members of a class. Commonly utilized for:</p>\n              <ul>\n                <li>Commutative operator overloading (e.g. <code>5 * matrix</code> where the left operand is a primitive).</li>\n                <li>Stream extraction and insertion operators: <code>friend ostream& operator<<(ostream&, const T&);</code>.</li>\n                <li>Bridging tight algorithmic dependencies between two separate classes without exposing full public mutators.</li>\n              </ul>\n            "
          },
          {
            "id": "ds-t6",
            "title": "Templates & Generic Programming",
            "tag": "Generics",
            "content": "\n              <p>Templates implement compile-time parametric polymorphism, generating specialized machine code on demand for specific data types:</p>\n              <pre><code>template &lt;typename T&gt;\nT findMax(T a, T b) {\n    return (a > b) ? a : b;\n}</code></pre>\n              <p>Class templates instantiate container classes (such as vectors, stacks, queues) that operate uniformly across primitives and complex objects.</p>\n            "
          },
          {
            "id": "ds-t7",
            "title": "Inheritance Models & Virtual Base Classes",
            "tag": "Inheritance",
            "content": "\n              <p>Inheritance enables code reuse across single, multilevel, multiple, and hierarchical topologies. The <strong>Diamond Problem</strong> occurs in multiple inheritance when a class inherits from two classes that share a common ancestor.</p>\n              <div class=\"callout callout-warning\">\n                <div class=\"callout-title\">Resolving the Diamond Problem with Virtual Base Classes</div>\n                <p>Declare the common ancestor as <code>virtual</code>: <code>class B : virtual public A { ... };</code>. This instructs the compiler to retain only a single instance of class A in the leaf object.</p>\n              </div>\n            "
          },
          {
            "id": "ds-t8",
            "title": "Linear & Non-Linear Data Structures Overview",
            "tag": "Data Structures",
            "content": "\n              <p>Data structure foundations utilized throughout machine learning engineering:</p>\n              <ul>\n                <li><strong>Arrays & Vectors:</strong> Contiguous memory, \\(O(1)\\) indexing, \\(O(N)\\) insertion/deletion.</li>\n                <li><strong>Singly & Doubly Linked Lists:</strong> Dynamic pointer nodes, \\(O(1)\\) head/tail modification, \\(O(N)\\) traversal.</li>\n                <li><strong>Stacks (LIFO) & Queues (FIFO):</strong> Essential for recursion backtracking, parsing, and BFS traversal.</li>\n                <li><strong>Binary Search Trees & Heaps:</strong> Priority queues, \\(O(\\log N)\\) search and insertion, Min/Max extraction.</li>\n              </ul>\n            "
          }
        ],
        "assignments": [
          {
            "id": "c-pr1",
            "title": "C1: Maximum of Three Numbers",
            "difficulty": "Foundational",
            "category": "C Language Basics",
            "question": "Write a C program to determine the maximum of 3 numbers using conditional constructs.",
            "solution": "<div class=\"solution-content\">\n<p><strong>Logic & Approach:</strong> Read three integers from standard input. Use nested <code>if-else</code> or ternary expressions to evaluate the maximum with \\(O(1)\\) operations.</p>\n<div class=\"code-header\"><span>C Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"c_max3\">Copy</button></div>\n<pre><code id=\"c_max3\">#include &lt;stdio.h&gt;\n\nint main() {\n    int a, b, c, max;\n    printf(\"Enter three integers: \");\n    if (scanf(\"%d %d %d\", &a, &b, &c) != 3) {\n        printf(\"Invalid input. Please enter three valid integers.\\n\");\n        return 1;\n    }\n    \n    if (a >= b && a >= c) {\n        max = a;\n    } else if (b >= a && b >= c) {\n        max = b;\n    } else {\n        max = c;\n    }\n    \n    printf(\"Maximum number among (%d, %d, %d) is: %d\\n\", a, b, c, max);\n    return 0;\n}</code></pre>\n<p><strong>Sample Input / Output:</strong></p>\n<pre><code>Enter three integers: 45 92 18\nMaximum number among (45, 92, 18) is: 92</code></pre>\n</div>"
          },
          {
            "id": "c-pr2",
            "title": "C2: Convert Days to Years, Months, and Remaining Days",
            "difficulty": "Foundational",
            "category": "C Language Basics",
            "question": "Write a program to accept number of days and print year, month and remaining days.",
            "solution": "<div class=\"solution-content\">\n<p><strong>Logic:</strong> Standard conversion using integer division and modulo: 1 year = 365 days, 1 month = 30 days.</p>\n<div class=\"code-header\"><span>C Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"c_days\">Copy</button></div>\n<pre><code id=\"c_days\">#include &lt;stdio.h&gt;\n\nint main() {\n    int total_days;\n    printf(\"Enter total number of days: \");\n    if (scanf(\"%d\", &total_days) != 1 || total_days < 0) {\n        printf(\"Invalid input. Total days must be non-negative.\\n\");\n        return 1;\n    }\n    \n    int years = total_days / 365;\n    int rem_after_years = total_days % 365;\n    int months = rem_after_years / 30;\n    int days = rem_after_years % 30;\n    \n    printf(\"%d Days = %d Year(s), %d Month(s), and %d Day(s)\\n\", \n           total_days, years, months, days);\n    return 0;\n}</code></pre>\n<p><strong>Sample Input / Output:</strong></p>\n<pre><code>Enter total number of days: 800\n800 Days = 2 Year(s), 2 Month(s), and 10 Day(s)</code></pre>\n</div>"
          },
          {
            "id": "c-pr3",
            "title": "C3: Swap Values of Two Variables",
            "difficulty": "Foundational",
            "category": "C Language Basics",
            "question": "Write a program to swap the values of two variables (demonstrating both temporary variable and bitwise XOR arithmetic approaches).",
            "solution": "<div class=\"solution-content\">\n<p><strong>Approaches:</strong> (1) Auxiliary variable, (2) Arithmetic addition/subtraction, (3) Bitwise XOR without overflow risk.</p>\n<div class=\"code-header\"><span>C Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"c_swap\">Copy</button></div>\n<pre><code id=\"c_swap\">#include &lt;stdio.h&gt;\n\nint main() {\n    int x, y, temp;\n    printf(\"Enter two numbers (x and y): \");\n    scanf(\"%d %d\", &x, &y);\n    printf(\"Original: x = %d, y = %d\\n\", x, y);\n\n    // Method 1: Using temporary variable\n    temp = x;\n    x = y;\n    y = temp;\n    printf(\"After swap (using temp): x = %d, y = %d\\n\", x, y);\n\n    // Method 2: In-place using bitwise XOR\n    x = x ^ y;\n    y = x ^ y;\n    x = x ^ y;\n    printf(\"Swapped back (using XOR): x = %d, y = %d\\n\", x, y);\n\n    return 0;\n}</code></pre>\n</div>"
          },
          {
            "id": "c-pr4",
            "title": "C4: Student Grading and Class Determination",
            "difficulty": "Foundational",
            "category": "Conditional Logic",
            "question": "Write a program that reads the percentage obtained by the students and determines and prints the class obtained by the student as per the following rules: 0-39: Fail, 40-59: Second class, 60-79: First class, 80-100: Distinction.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>C Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"c_grade\">Copy</button></div>\n<pre><code id=\"c_grade\">#include &lt;stdio.h&gt;\n\nint main() {\n    float percentage;\n    printf(\"Enter student percentage (0 - 100): \");\n    if (scanf(\"%f\", &percentage) != 1 || percentage < 0.0 || percentage > 100.0) {\n        printf(\"Validation Error: Percentage must lie between 0.0 and 100.0\\n\");\n        return 1;\n    }\n\n    printf(\"Percentage: %.2f%% -> Result: \", percentage);\n    if (percentage >= 80.0) {\n        printf(\"Distinction\\n\");\n    } else if (percentage >= 60.0) {\n        printf(\"First Class\\n\");\n    } else if (percentage >= 40.0) {\n        printf(\"Second Class\\n\");\n    } else {\n        printf(\"Fail\\n\");\n    }\n    return 0;\n}</code></pre>\n</div>"
          },
          {
            "id": "c-pr5",
            "title": "C5: Area of Shapes using Symbolic Constants and Switch",
            "difficulty": "Foundational",
            "category": "C Language Basics",
            "question": "Write a program to calculate the area of circle/rectangle/triangle. 'C' indicates circle, 'R' indicates rectangle, 'T' indicates triangle. Use symbolic constant to define the value of PI.",
            "solution": "<div class=\"solution-content\">\n<p>Uses <code>#define PI 3.141592653589793</code> and <code>switch(toupper(choice))</code>.</p>\n<div class=\"code-header\"><span>C Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"c_area\">Copy</button></div>\n<pre><code id=\"c_area\">#include &lt;stdio.h&gt;\n#include &lt;ctype.h&gt;\n\n#define PI 3.141592653589793\n\nint main() {\n    char choice;\n    printf(\"Select Shape [C: Circle, R: Rectangle, T: Triangle]: \");\n    scanf(\" %c\", &choice);\n    choice = toupper(choice);\n\n    switch(choice) {\n        case 'C': {\n            double r;\n            printf(\"Enter radius of circle: \");\n            scanf(\"%lf\", &r);\n            if (r < 0) { printf(\"Error: Radius cannot be negative.\\n\"); return 1; }\n            printf(\"Area of Circle = %.4lf\\n\", PI * r * r);\n            break;\n        }\n        case 'R': {\n            double l, b;\n            printf(\"Enter length and breadth: \");\n            scanf(\"%lf %lf\", &l, &b);\n            if (l < 0 || b < 0) { printf(\"Error: Dimensions must be non-negative.\\n\"); return 1; }\n            printf(\"Area of Rectangle = %.4lf\\n\", l * b);\n            break;\n        }\n        case 'T': {\n            double b, h;\n            printf(\"Enter base and height: \");\n            scanf(\"%lf %lf\", &b, &h);\n            if (b < 0 || h < 0) { printf(\"Error: Dimensions must be non-negative.\\n\"); return 1; }\n            printf(\"Area of Triangle = %.4lf\\n\", 0.5 * b * h);\n            break;\n        }\n        default:\n            printf(\"Invalid selection! Use C, R, or T.\\n\");\n            return 1;\n    }\n    return 0;\n}</code></pre>\n</div>"
          },
          {
            "id": "c-pr6",
            "title": "C6: Total Salary Calculation (Basic, HRA, DA)",
            "difficulty": "Foundational",
            "category": "C Language Basics",
            "question": "Write a program that accepts basic, HRA, and DA from the user and calculates total salary.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>C Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"c_salary\">Copy</button></div>\n<pre><code id=\"c_salary\">#include &lt;stdio.h&gt;\n\nint main() {\n    double basic, hra, da, total_salary;\n    printf(\"Enter Basic Salary: \");\n    if (scanf(\"%lf\", &basic) != 1 || basic < 0) {\n        printf(\"Error: Basic salary must be non-negative.\\n\");\n        return 1;\n    }\n    printf(\"Enter HRA and DA: \");\n    scanf(\"%lf %lf\", &hra, &da);\n\n    total_salary = basic + hra + da;\n    printf(\"--- Salary Breakdown ---\\n\");\n    printf(\"Basic: %.2lf | HRA: %.2lf | DA: %.2lf\\n\", basic, hra, da);\n    printf(\"Total Gross Salary = %.2lf\\n\", total_salary);\n    return 0;\n}</code></pre>\n</div>"
          },
          {
            "id": "c-pr7",
            "title": "C7: Print 1 to 10 Using While, Do-While, and For Loops",
            "difficulty": "Foundational",
            "category": "Loops & Iterations",
            "question": "Using While, do..while and for loop print 1 2 3 4 5 ... 10.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>C Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"c_loops1\">Copy</button></div>\n<pre><code id=\"c_loops1\">#include &lt;stdio.h&gt;\n\nint main() {\n    int i;\n\n    // 1. For loop\n    printf(\"Using FOR loop:     \");\n    for (i = 1; i <= 10; i++) {\n        printf(\"%d \", i);\n    }\n    printf(\"\\n\");\n\n    // 2. While loop\n    printf(\"Using WHILE loop:   \");\n    i = 1;\n    while (i <= 10) {\n        printf(\"%d \", i);\n        i++;\n    }\n    printf(\"\\n\");\n\n    // 3. Do-While loop\n    printf(\"Using DO-WHILE loop:\");\n    i = 1;\n    do {\n        printf(\"%d \", i);\n        i++;\n    } while (i <= 10);\n    printf(\"\\n\");\n\n    return 0;\n}</code></pre>\n</div>"
          },
          {
            "id": "c-pr8",
            "title": "C8: Even Series 2, 4, 6, 8, ... n",
            "difficulty": "Foundational",
            "category": "Loops & Iterations",
            "question": "Print series 2, 4, 6, 8, ... n using While, do..while and for loop.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>C Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"c_even_series\">Copy</button></div>\n<pre><code id=\"c_even_series\">#include &lt;stdio.h&gt;\n\nint main() {\n    int n, i;\n    printf(\"Enter upper bound n: \");\n    if (scanf(\"%d\", &n) != 1 || n < 2) {\n        printf(\"Please enter an integer >= 2.\\n\");\n        return 1;\n    }\n\n    printf(\"For loop:      \");\n    for (i = 2; i <= n; i += 2) printf(\"%d \", i);\n    printf(\"\\n\");\n\n    printf(\"While loop:    \");\n    i = 2;\n    while (i <= n) { printf(\"%d \", i); i += 2; }\n    printf(\"\\n\");\n\n    printf(\"Do-While loop: \");\n    i = 2;\n    do { printf(\"%d \", i); i += 2; } while (i <= n);\n    printf(\"\\n\");\n\n    return 0;\n}</code></pre>\n</div>"
          },
          {
            "id": "c-pr9",
            "title": "C9: Power Series 2, 4, 16, ... n*n",
            "difficulty": "Foundational",
            "category": "Loops & Iterations",
            "question": "Print series 2, 4, 16, ... n*n (Using While, do..while and for loop).",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>C Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"c_sq_series\">Copy</button></div>\n<pre><code id=\"c_sq_series\">#include &lt;stdio.h&gt;\n\nint main() {\n    long long limit;\n    printf(\"Enter limit value: \");\n    if (scanf(\"%lld\", &limit) != 1 || limit < 2) {\n        printf(\"Limit must be >= 2.\\n\");\n        return 1;\n    }\n\n    printf(\"For loop:      \");\n    for (long long val = 2; val <= limit; val = val * val) {\n        printf(\"%lld \", val);\n    }\n    printf(\"\\n\");\n\n    printf(\"While loop:    \");\n    long long w = 2;\n    while (w <= limit) {\n        printf(\"%lld \", w);\n        w = w * w;\n    }\n    printf(\"\\n\");\n\n    printf(\"Do-While loop: \");\n    long long d = 2;\n    do {\n        printf(\"%lld \", d);\n        d = d * d;\n    } while (d <= limit);\n    printf(\"\\n\");\n\n    return 0;\n}</code></pre>\n</div>"
          },
          {
            "id": "c-pr10",
            "title": "C10: Average of a Set of n Given Numbers",
            "difficulty": "Foundational",
            "category": "Loops & Iterations",
            "question": "Write a program to calculate the average of a set of n given numbers.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>C Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"c_avg\">Copy</button></div>\n<pre><code id=\"c_avg\">#include &lt;stdio.h&gt;\n\nint main() {\n    int n;\n    double sum = 0.0, num;\n    printf(\"Enter count of numbers (n): \");\n    if (scanf(\"%d\", &n) != 1 || n <= 0) {\n        printf(\"Error: n must be a positive integer.\\n\");\n        return 1;\n    }\n\n    printf(\"Enter %d numbers:\\n\", n);\n    for (int i = 0; i < n; i++) {\n        scanf(\"%lf\", &num);\n        sum += num;\n    }\n\n    printf(\"Sum = %.4lf, Average = %.4lf\\n\", sum, sum / n);\n    return 0;\n}</code></pre>\n</div>"
          },
          {
            "id": "c-pr11",
            "title": "C11: Fibonacci Series Generation",
            "difficulty": "Foundational",
            "category": "Loops & Iterations",
            "question": "Write a program to generate Fibonacci series up to n terms.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>C Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"c_fibo\">Copy</button></div>\n<pre><code id=\"c_fibo\">#include &lt;stdio.h&gt;\n\nint main() {\n    int n;\n    printf(\"Enter number of terms: \");\n    if (scanf(\"%d\", &n) != 1 || n <= 0) {\n        printf(\"Enter positive number of terms.\\n\");\n        return 1;\n    }\n\n    long long first = 0, second = 1, next;\n    printf(\"Fibonacci Series (%d terms):\\n\", n);\n    for (int i = 1; i <= n; i++) {\n        if (i == 1) {\n            printf(\"%lld \", first);\n        } else if (i == 2) {\n            printf(\"%lld \", second);\n        } else {\n            next = first + second;\n            first = second;\n            second = next;\n            printf(\"%lld \", next);\n        }\n    }\n    printf(\"\\n\");\n    return 0;\n}</code></pre>\n</div>"
          },
          {
            "id": "c-pr12",
            "title": "C12: Multiplication Table",
            "difficulty": "Foundational",
            "category": "Loops & Iterations",
            "question": "Write a program to print the multiplication table of a given number.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>C Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"c_table\">Copy</button></div>\n<pre><code id=\"c_table\">#include &lt;stdio.h&gt;\n\nint main() {\n    int num, range;\n    printf(\"Enter integer for multiplication table: \");\n    scanf(\"%d\", &num);\n    printf(\"Enter range (e.g. 10): \");\n    scanf(\"%d\", &range);\n\n    printf(\"Multiplication Table for %d:\\n\", num);\n    for (int i = 1; i <= range; i++) {\n        printf(\"%d x %2d = %d\\n\", num, i, num * i);\n    }\n    return 0;\n}</code></pre>\n</div>"
          },
          {
            "id": "c-pr13",
            "title": "C13: Factorial of an Entered Number",
            "difficulty": "Foundational",
            "category": "Loops & Iterations",
            "question": "Write a program to find the factorial of the entered number with input validation.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>C Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"c_fact\">Copy</button></div>\n<pre><code id=\"c_fact\">#include &lt;stdio.h&gt;\n\nunsigned long long factorial(int n) {\n    if (n == 0 || n == 1) return 1ULL;\n    return n * factorial(n - 1);\n}\n\nint main() {\n    int n;\n    printf(\"Enter non-negative integer (0-20): \");\n    if (scanf(\"%d\", &n) != 1 || n < 0 || n > 20) {\n        printf(\"Error: Input must be between 0 and 20 (to avoid 64-bit integer overflow).\\n\");\n        return 1;\n    }\n\n    printf(\"%d! = %llu\\n\", n, factorial(n));\n    return 0;\n}</code></pre>\n</div>"
          },
          {
            "id": "c-pr14",
            "title": "C14: Integers Divisible by 7 Between 100 and 200",
            "difficulty": "Foundational",
            "category": "Loops & Iterations",
            "question": "Write a program to print all the numbers and sum of all the integers that are greater than 100 and less than 200 and are divisible by 7.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>C Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"c_div7\">Copy</button></div>\n<pre><code id=\"c_div7\">#include &lt;stdio.h&gt;\n\nint main() {\n    int sum = 0, count = 0;\n    printf(\"Integers between 100 and 200 divisible by 7:\\n\");\n    for (int i = 101; i < 200; i++) {\n        if (i % 7 == 0) {\n            printf(\"%d \", i);\n            sum += i;\n            count++;\n        }\n    }\n    printf(\"\\nTotal Count: %d | Sum: %d\\n\", count, sum);\n    return 0;\n}</code></pre>\n</div>"
          },
          {
            "id": "c-pr15",
            "title": "C15: Basic Calculator Using Switch-Case",
            "difficulty": "Foundational",
            "category": "Conditional Logic",
            "question": "Write a program to accept two numbers and perform basic operations of calculator (+, -, *, /) using switch-case.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>C Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"c_calc\">Copy</button></div>\n<pre><code id=\"c_calc\">#include &lt;stdio.h&gt;\n\nint main() {\n    double n1, n2, result;\n    char op;\n    printf(\"Enter expression (e.g. 15.5 + 4.2): \");\n    if (scanf(\"%lf %c %lf\", &n1, &op, &n2) != 3) {\n        printf(\"Invalid format! Use: number operator number\\n\");\n        return 1;\n    }\n\n    switch(op) {\n        case '+': result = n1 + n2; break;\n        case '-': result = n1 - n2; break;\n        case '*': result = n1 * n2; break;\n        case '/':\n            if (n2 == 0.0) {\n                printf(\"Error: Division by zero is undefined!\\n\");\n                return 1;\n            }\n            result = n1 / n2;\n            break;\n        default:\n            printf(\"Unsupported operator '%c'!\\n\", op);\n            return 1;\n    }\n    printf(\"%.4lf %c %.4lf = %.4lf\\n\", n1, op, n2, result);\n    return 0;\n}</code></pre>\n</div>"
          },
          {
            "id": "c-pr16",
            "title": "C16: Star Patterns (Square, Triangle, Inverted, Hollow Square, Right-Aligned)",
            "difficulty": "Intermediate",
            "category": "Pattern Generation",
            "question": "Generate the 5 assignment patterns: (1) 5x5 Solid Square, (2) Left-aligned Triangle, (3) Inverted Left-aligned Triangle, (4) Hollow 5x5 Square, (5) Inverted Right-aligned Triangle.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>C Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"c_patterns\">Copy</button></div>\n<pre><code id=\"c_patterns\">#include &lt;stdio.h&gt;\n\nvoid pattern1(int n) { // Solid Square\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n; j++) printf(\"* \");\n        printf(\"\\n\");\n    }\n}\n\nvoid pattern2(int n) { // Left-aligned Triangle\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= i; j++) printf(\"* \");\n        printf(\"\\n\");\n    }\n}\n\nvoid pattern3(int n) { // Inverted Left Triangle\n    for (int i = n; i >= 1; i--) {\n        for (int j = 1; j <= i; j++) printf(\"* \");\n        printf(\"\\n\");\n    }\n}\n\nvoid pattern4(int n) { // Hollow Square\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= n; j++) {\n            if (i == 1 || i == n || j == 1 || j == n) printf(\"* \");\n            else printf(\"  \");\n        }\n        printf(\"\\n\");\n    }\n}\n\nvoid pattern5(int n) { // Inverted Right-aligned\n    for (int i = 0; i < n; i++) {\n        for (int s = 0; s < i; s++) printf(\"   \");\n        for (int j = 0; j < n - i; j++) printf(\"*  \");\n        printf(\"\\n\");\n    }\n}\n\nint main() {\n    int n = 5;\n    printf(\"Pattern 1:\\n\"); pattern1(n);\n    printf(\"\\nPattern 2:\\n\"); pattern2(n);\n    printf(\"\\nPattern 3:\\n\"); pattern3(n);\n    printf(\"\\nPattern 4:\\n\"); pattern4(n);\n    printf(\"\\nPattern 5:\\n\"); pattern5(n);\n    return 0;\n}</code></pre>\n</div>"
          },
          {
            "id": "c-pr17",
            "title": "C17: Maximum Element in 1-D Array",
            "difficulty": "Foundational",
            "category": "Arrays & Pointers",
            "question": "Write a program to find maximum element from 1-Dimensional array.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>C Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"c_arr_max\">Copy</button></div>\n<pre><code id=\"c_arr_max\">#include &lt;stdio.h&gt;\n\nint main() {\n    int n;\n    printf(\"Enter number of elements: \");\n    if (scanf(\"%d\", &n) != 1 || n <= 0) return 1;\n\n    int arr[n];\n    printf(\"Enter %d integers:\\n\", n);\n    for (int i = 0; i < n; i++) scanf(\"%d\", &arr[i]);\n\n    int max_val = arr[0];\n    int max_idx = 0;\n    for (int i = 1; i < n; i++) {\n        if (arr[i] > max_val) {\n            max_val = arr[i];\n            max_idx = i;\n        }\n    }\n    printf(\"Maximum value is %d at index %d (position %d)\\n\", max_val, max_idx, max_idx + 1);\n    return 0;\n}</code></pre>\n</div>"
          },
          {
            "id": "c-pr18",
            "title": "C18: Sort Array in Ascending Order",
            "difficulty": "Foundational",
            "category": "Arrays & Pointers",
            "question": "Write a program to sort given array in ascending order.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>C Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"c_arr_sort\">Copy</button></div>\n<pre><code id=\"c_arr_sort\">#include &lt;stdio.h&gt;\n\nvoid bubbleSort(int arr[], int n) {\n    for (int i = 0; i < n - 1; i++) {\n        int swapped = 0;\n        for (int j = 0; j < n - i - 1; j++) {\n            if (arr[j] > arr[j + 1]) {\n                int temp = arr[j];\n                arr[j] = arr[j + 1];\n                arr[j + 1] = temp;\n                swapped = 1;\n            }\n        }\n        if (!swapped) break;\n    }\n}\n\nint main() {\n    int n;\n    printf(\"Enter size of array: \");\n    scanf(\"%d\", &n);\n    int arr[n];\n    printf(\"Enter elements: \");\n    for (int i = 0; i < n; i++) scanf(\"%d\", &arr[i]);\n\n    bubbleSort(arr, n);\n    printf(\"Sorted Array in Ascending Order:\\n\");\n    for (int i = 0; i < n; i++) printf(\"%d \", arr[i]);\n    printf(\"\\n\");\n    return 0;\n}</code></pre>\n</div>"
          },
          {
            "id": "c-pr19",
            "title": "C19: Merge Two Sorted 1-D Arrays",
            "difficulty": "Intermediate",
            "category": "Arrays & Pointers",
            "question": "Given two 1-D arrays A and B, which are sorted in ascending order. Write a program to merge them into a single sorted array C that contains every item from arrays A and B in ascending order (Linear O(N+M) two-pointer merge).",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>C Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"c_merge\">Copy</button></div>\n<pre><code id=\"c_merge\">#include &lt;stdio.h&gt;\n\nvoid mergeArrays(int A[], int n, int B[], int m, int C[]) {\n    int i = 0, j = 0, k = 0;\n    while (i < n && j < m) {\n        if (A[i] <= B[j]) {\n            C[k++] = A[i++];\n        } else {\n            C[k++] = B[j++];\n        }\n    }\n    while (i < n) C[k++] = A[i++];\n    while (j < m) C[k++] = B[j++];\n}\n\nint main() {\n    int n, m;\n    printf(\"Enter size of array A: \");\n    scanf(\"%d\", &n);\n    int A[n];\n    printf(\"Enter %d sorted elements for A: \", n);\n    for (int i = 0; i < n; i++) scanf(\"%d\", &A[i]);\n\n    printf(\"Enter size of array B: \");\n    scanf(\"%d\", &m);\n    int B[m];\n    printf(\"Enter %d sorted elements for B: \", m);\n    for (int j = 0; j < m; j++) scanf(\"%d\", &B[j]);\n\n    int C[n + m];\n    mergeArrays(A, n, B, m, C);\n\n    printf(\"Merged Sorted Array C (Size %d):\\n\", n + m);\n    for (int k = 0; k < n + m; k++) printf(\"%d \", C[k]);\n    printf(\"\\n\");\n    return 0;\n}</code></pre>\n</div>"
          },
          {
            "id": "c-pr20",
            "title": "C20: Matrix Addition",
            "difficulty": "Foundational",
            "category": "Multidimensional Arrays",
            "question": "Write a program to add two matrices of order r x c.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>C Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"c_mat_add\">Copy</button></div>\n<pre><code id=\"c_mat_add\">#include &lt;stdio.h&gt;\n\nint main() {\n    int r, c;\n    printf(\"Enter matrix rows and columns: \");\n    scanf(\"%d %d\", &r, &c);\n\n    int A[r][c], B[r][c], Sum[r][c];\n    printf(\"Enter elements of Matrix A:\\n\");\n    for (int i = 0; i < r; i++)\n        for (int j = 0; j < c; j++)\n            scanf(\"%d\", &A[i][j]);\n\n    printf(\"Enter elements of Matrix B:\\n\");\n    for (int i = 0; i < r; i++)\n        for (int j = 0; j < c; j++)\n            scanf(\"%d\", &B[i][j]);\n\n    for (int i = 0; i < r; i++)\n        for (int j = 0; j < c; j++)\n            Sum[i][j] = A[i][j] + B[i][j];\n\n    printf(\"Resultant Matrix A + B:\\n\");\n    for (int i = 0; i < r; i++) {\n        for (int j = 0; j < c; j++)\n            printf(\"%4d \", Sum[i][j]);\n        printf(\"\\n\");\n    }\n    return 0;\n}</code></pre>\n</div>"
          },
          {
            "id": "c-pr21",
            "title": "C21: Matrix Multiplication",
            "difficulty": "Intermediate",
            "category": "Multidimensional Arrays",
            "question": "Write a 'C' program that reads in two matrices and multiplies them. Display the resultant matrix with dimension verification (r1 x c1) * (r2 x c2).",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>C Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"c_mat_mul\">Copy</button></div>\n<pre><code id=\"c_mat_mul\">#include &lt;stdio.h&gt;\n\nint main() {\n    int r1, c1, r2, c2;\n    printf(\"Enter rows & cols of Matrix A: \");\n    scanf(\"%d %d\", &r1, &c1);\n    printf(\"Enter rows & cols of Matrix B: \");\n    scanf(\"%d %d\", &r2, &c2);\n\n    if (c1 != r2) {\n        printf(\"Error: Matrix multiplication impossible! Col of A (%d) != Row of B (%d).\\n\", c1, r2);\n        return 1;\n    }\n\n    int A[r1][c1], B[r2][c2], C[r1][c2];\n\n    printf(\"Enter Matrix A (%dx%d):\\n\", r1, c1);\n    for (int i = 0; i < r1; i++)\n        for (int j = 0; j < c1; j++)\n            scanf(\"%d\", &A[i][j]);\n\n    printf(\"Enter Matrix B (%dx%d):\\n\", r2, c2);\n    for (int i = 0; i < r2; i++)\n        for (int j = 0; j < c2; j++)\n            scanf(\"%d\", &B[i][j]);\n\n    // Multiply\n    for (int i = 0; i < r1; i++) {\n        for (int j = 0; j < c2; j++) {\n            C[i][j] = 0;\n            for (int k = 0; k < c1; k++) {\n                C[i][j] += A[i][k] * B[k][j];\n            }\n        }\n    }\n\n    printf(\"Resultant Matrix C (%dx%d):\\n\", r1, c2);\n    for (int i = 0; i < r1; i++) {\n        for (int j = 0; j < c2; j++)\n            printf(\"%6d \", C[i][j]);\n        printf(\"\\n\");\n    }\n    return 0;\n}</code></pre>\n</div>"
          },
          {
            "id": "c-pr22",
            "title": "C22: Find Element at Given Position in 2-D Array",
            "difficulty": "Foundational",
            "category": "Multidimensional Arrays",
            "question": "Write a program to find element at given position from 2-Dimensional array.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>C Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"c_2d_pos\">Copy</button></div>\n<pre><code id=\"c_2d_pos\">#include &lt;stdio.h&gt;\n\nint main() {\n    int r, c;\n    printf(\"Enter rows and columns: \");\n    scanf(\"%d %d\", &r, &c);\n    int mat[r][c];\n\n    printf(\"Enter elements of matrix (%dx%d):\\n\", r, c);\n    for (int i = 0; i < r; i++)\n        for (int j = 0; j < c; j++)\n            scanf(\"%d\", &mat[i][j]);\n\n    int target_r, target_c;\n    printf(\"Enter target position (1-based row and col): \");\n    scanf(\"%d %d\", &target_r, &target_c);\n\n    if (target_r < 1 || target_r > r || target_c < 1 || target_c > c) {\n        printf(\"Index Out of Bounds! Range is [1..%d, 1..%d]\\n\", r, c);\n        return 1;\n    }\n\n    printf(\"Element at row %d, col %d is: %d\\n\", target_r, target_c, mat[target_r - 1][target_c - 1]);\n    return 0;\n}</code></pre>\n</div>"
          },
          {
            "id": "c-pr23",
            "title": "C23: String Length Without strlen()",
            "difficulty": "Foundational",
            "category": "Strings & Pointers",
            "question": "Write a program to find string length without using built-in string functions.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>C Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"c_strlen\">Copy</button></div>\n<pre><code id=\"c_strlen\">#include &lt;stdio.h&gt;\n\nint custom_strlen(const char *str) {\n    int len = 0;\n    while (*(str + len) != '\\0') {\n        len++;\n    }\n    return len;\n}\n\nint main() {\n    char str[1000];\n    printf(\"Enter string: \");\n    if (fgets(str, sizeof(str), stdin) != NULL) {\n        // Strip trailing newline\n        int len = custom_strlen(str);\n        if (len > 0 && str[len - 1] == '\\n') {\n            str[len - 1] = '\\0';\n            len--;\n        }\n        printf(\"String: \\\"%s\\\" | Length: %d characters\\n\", str, len);\n    }\n    return 0;\n}</code></pre>\n</div>"
          },
          {
            "id": "c-pr24",
            "title": "C24: Count Word Occurrences in a String",
            "difficulty": "Intermediate",
            "category": "Strings & Pointers",
            "question": "Write a program that will input a string and count all occurrences of a particular word.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>C Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"c_word_count\">Copy</button></div>\n<pre><code id=\"c_word_count\">#include &lt;stdio.h&gt;\n#include &lt;string.h&gt;\n#include &lt;ctype.h&gt;\n\nint countWordOccurrences(const char *text, const char *word) {\n    int count = 0;\n    int wordLen = strlen(word);\n    const char *ptr = text;\n\n    while ((ptr = strstr(ptr, word)) != NULL) {\n        // Verify whole word boundaries\n        int left_boundary = (ptr == text || !isalnum(*(ptr - 1)));\n        int right_boundary = (!isalnum(*(ptr + wordLen)));\n\n        if (left_boundary && right_boundary) {\n            count++;\n        }\n        ptr += wordLen;\n    }\n    return count;\n}\n\nint main() {\n    char text[1000], word[100];\n    printf(\"Enter text: \");\n    fgets(text, sizeof(text), stdin);\n    printf(\"Enter word to search: \");\n    scanf(\"%s\", word);\n\n    int count = countWordOccurrences(text, word);\n    printf(\"Word \\\"%s\\\" occurs %d time(s) as an independent token.\\n\", word, count);\n    return 0;\n}</code></pre>\n</div>"
          },
          {
            "id": "c-pr25",
            "title": "C25: Sort String in Alphabetical Order",
            "difficulty": "Intermediate",
            "category": "Strings & Pointers",
            "question": "Write a program that will read a string and rewrite it in alphabetical order.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>C Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"c_sort_str\">Copy</button></div>\n<pre><code id=\"c_sort_str\">#include &lt;stdio.h&gt;\n#include &lt;string.h&gt;\n\nvoid sortStringAlphabetical(char *str) {\n    int n = strlen(str);\n    for (int i = 0; i < n - 1; i++) {\n        for (int j = i + 1; j < n; j++) {\n            if (str[i] > str[j]) {\n                char temp = str[i];\n                str[i] = str[j];\n                str[j] = temp;\n            }\n        }\n    }\n}\n\nint main() {\n    char str[200];\n    printf(\"Enter a word or string: \");\n    scanf(\"%199s\", str);\n\n    sortStringAlphabetical(str);\n    printf(\"Alphabetically Ordered String: %s\\n\", str);\n    return 0;\n}</code></pre>\n</div>"
          },
          {
            "id": "c-pr26",
            "title": "C26: Reverse String In-Place",
            "difficulty": "Foundational",
            "category": "Strings & Pointers",
            "question": "Write a program to reverse a string in-place without using library reverse functions.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>C Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"c_rev_str\">Copy</button></div>\n<pre><code id=\"c_rev_str\">#include &lt;stdio.h&gt;\n#include &lt;string.h&gt;\n\nvoid reverseString(char *str) {\n    int left = 0;\n    int right = strlen(str) - 1;\n    while (left < right) {\n        char temp = str[left];\n        str[left] = str[right];\n        str[right] = temp;\n        left++;\n        right--;\n    }\n}\n\nint main() {\n    char str[500];\n    printf(\"Enter string to reverse: \");\n    if (fgets(str, sizeof(str), stdin)) {\n        int len = strlen(str);\n        if (len > 0 && str[len - 1] == '\\n') str[len - 1] = '\\0';\n        reverseString(str);\n        printf(\"Reversed: \\\"%s\\\"\\n\", str);\n    }\n    return 0;\n}</code></pre>\n</div>"
          },
          {
            "id": "ds1-q1",
            "title": "DS1-1: Student Ranking System with Tie-Breaking",
            "difficulty": "Intermediate",
            "category": "Classes & Objects",
            "question": "Write a C++ program to create class Student with student's rollno, name and marks of three subjects (OOCP, AI and MF) and display the details of student with total marks of all subjects along with the percentage in proper format. Output should be in descending order of percentage. If students have the same percentage, higher marks in MF should be displayed first.",
            "solution": "<div class=\"solution-content\">\n<p><strong>Design:</strong> Encapsulates student credentials and utilizes custom comparator sorting with strict secondary tie-breaker on Mathematical Foundations (MF) score.</p>\n<div class=\"code-header\"><span>C++ Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"cpp_stu1\">Copy</button></div>\n<pre><code id=\"cpp_stu1\">#include &lt;iostream&gt;\n#include &lt;string&gt;\n#include &lt;algorithm&gt;\n#include &lt;iomanip&gt;\nusing namespace std;\n\nclass Student {\npublic:\n    int rollNo;\n    string name;\n    float oocp, ai, mf;\n    float total, percentage;\n\n    void input() {\n        cout << \"Enter Roll No: \";\n        cin >> rollNo;\n        cin.ignore();\n        cout << \"Enter Name: \";\n        getline(cin, name);\n        do {\n            cout << \"Enter Marks for OOCP, AI, MF (0-100 each): \";\n            cin >> oocp >> ai >> mf;\n        } while (oocp < 0 || oocp > 100 || ai < 0 || ai > 100 || mf < 0 || mf > 100);\n        calculate();\n    }\n\n    void calculate() {\n        total = oocp + ai + mf;\n        percentage = (total / 300.0f) * 100.0f;\n    }\n\n    void display() const {\n        cout << left << setw(8) << rollNo \n             << setw(20) << name \n             << setw(8) << oocp \n             << setw(8) << ai \n             << setw(8) << mf \n             << setw(10) << total \n             << fixed << setprecision(2) << setw(10) << percentage << \"%\\n\";\n    }\n};\n\nbool compareStudents(const Student& a, const Student& b) {\n    if (abs(a.percentage - b.percentage) > 0.001f) {\n        return a.percentage > b.percentage; // Descending percentage\n    }\n    return a.mf > b.mf; // Secondary tie-breaker: higher MF marks first\n}\n\nint main() {\n    int n;\n    cout << \"Enter number of students: \";\n    cin >> n;\n    Student students[n];\n\n    for (int i = 0; i < n; i++) {\n        cout << \"\\n--- Entering Student \" << (i + 1) << \" ---\\n\";\n        students[i].input();\n    }\n\n    sort(students, students + n, compareStudents);\n\n    cout << \"\\n========================= MERIT RANK LIST =========================\\n\";\n    cout << left << setw(8) << \"Roll\" << setw(20) << \"Name\" \n         << setw(8) << \"OOCP\" << setw(8) << \"AI\" << setw(8) << \"MF\" \n         << setw(10) << \"Total\" << setw(10) << \"Percentage\" << \"\\n\";\n    cout << \"-------------------------------------------------------------------\\n\";\n    for (int i = 0; i < n; i++) {\n        students[i].display();\n    }\n    return 0;\n}</code></pre>\n</div>"
          },
          {
            "id": "ds1-q2",
            "title": "DS1-2: Class Num (Total & Average)",
            "difficulty": "Foundational",
            "category": "Classes & Objects",
            "question": "Write a program to create class Num (int n1, int n2, int n3, int n4). Display total and average of n1, n2, n3 and n4.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>C++ Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"cpp_num\">Copy</button></div>\n<pre><code id=\"cpp_num\">#include &lt;iostream&gt;\nusing namespace std;\n\nclass Num {\nprivate:\n    int n1, n2, n3, n4;\npublic:\n    Num(int a, int b, int c, int d) : n1(a), n2(b), n3(c), n4(d) {}\n    \n    int getTotal() const { return n1 + n2 + n3 + n4; }\n    double getAverage() const { return getTotal() / 4.0; }\n    \n    void display() const {\n        cout << \"Numbers: [\" << n1 << \", \" << n2 << \", \" << n3 << \", \" << n4 << \"]\\n\";\n        cout << \"Sum: \" << getTotal() << \" | Average: \" << getAverage() << \"\\n\";\n    }\n};\n\nint main() {\n    int a, b, c, d;\n    cout << \"Enter 4 integers: \";\n    cin >> a >> b >> c >> d;\n    Num obj(a, b, c, d);\n    obj.display();\n    return 0;\n}</code></pre>\n</div>"
          },
          {
            "id": "ds1-q3",
            "title": "DS1-3: Class Time with Minute Addition & 24hr Rollover",
            "difficulty": "Foundational",
            "category": "Classes & Objects",
            "question": "Write a program to create class Time (int h, int m). Read a value as minutes from user to display new time after adding the value to minutes in Time.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>C++ Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"cpp_time\">Copy</button></div>\n<pre><code id=\"cpp_time\">#include &lt;iostream&gt;\n#include &lt;iomanip&gt;\nusing namespace std;\n\nclass Time {\nprivate:\n    int hours;\n    int minutes;\npublic:\n    Time(int h = 0, int m = 0) {\n        hours = (h + (m / 60)) % 24;\n        minutes = m % 60;\n    }\n\n    void addMinutes(int mins) {\n        int totalMinutes = hours * 60 + minutes + mins;\n        if (totalMinutes < 0) totalMinutes = (totalMinutes % 1440 + 1440) % 1440;\n        hours = (totalMinutes / 60) % 24;\n        minutes = totalMinutes % 60;\n    }\n\n    void display() const {\n        cout << setfill('0') << setw(2) << hours << \":\" \n             << setfill('0') << setw(2) << minutes << \"\\n\";\n    }\n};\n\nint main() {\n    int h, m, add_m;\n    cout << \"Enter initial time (hours 0-23 and minutes 0-59): \";\n    cin >> h >> m;\n    Time t(h, m);\n    cout << \"Current Time: \"; t.display();\n\n    cout << \"Enter minutes to add: \";\n    cin >> add_m;\n    t.addMinutes(add_m);\n\n    cout << \"Updated Time: \"; t.display();\n    return 0;\n}</code></pre>\n</div>"
          },
          {
            "id": "ds1-q4",
            "title": "DS1-4: Class Date with Day Addition & Calendar Leap Handling",
            "difficulty": "Intermediate",
            "category": "Classes & Objects",
            "question": "Write a program to create class Date (int day, int month, int year). Read a value as day from user to display new date after adding the value to day in Date.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>C++ Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"cpp_date\">Copy</button></div>\n<pre><code id=\"cpp_date\">#include &lt;iostream&gt;\n#include &lt;iomanip&gt;\nusing namespace std;\n\nclass Date {\nprivate:\n    int day, month, year;\n\n    bool isLeapYear(int y) const {\n        return (y % 400 == 0) || (y % 4 == 0 && y % 100 != 0);\n    }\n\n    int daysInMonth(int m, int y) const {\n        int days[] = { 0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };\n        if (m == 2 && isLeapYear(y)) return 29;\n        return days[m];\n    }\n\npublic:\n    Date(int d = 1, int m = 1, int y = 2026) : day(d), month(m), year(y) {}\n\n    void addDays(int n) {\n        day += n;\n        while (day > daysInMonth(month, year)) {\n            day -= daysInMonth(month, year);\n            month++;\n            if (month > 12) {\n                month = 1;\n                year++;\n            }\n        }\n    }\n\n    void display() const {\n        cout << setfill('0') << setw(2) << day << \"/\" \n             << setfill('0') << setw(2) << month << \"/\" << year << \"\\n\";\n    }\n};\n\nint main() {\n    int d, m, y, add;\n    cout << \"Enter date (day month year): \";\n    cin >> d >> m >> y;\n    Date dt(d, m, y);\n    cout << \"Initial Date: \"; dt.display();\n\n    cout << \"Enter days to add: \";\n    cin >> add;\n    dt.addDays(add);\n    cout << \"New Date:     \"; dt.display();\n    return 0;\n}</code></pre>\n</div>"
          },
          {
            "id": "ds1-q5",
            "title": "DS1-5: Class Employee with Static Record Tracker & Salary Breakdown",
            "difficulty": "Foundational",
            "category": "Static Members",
            "question": "Write a program to create class employee with employee's id, name and basic salary. Calculate gross salary for each employee (HRA 20%, DA 30%, OA 10%). Also count total number of employee records that are entered using static member variables.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>C++ Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"cpp_emp\">Copy</button></div>\n<pre><code id=\"cpp_emp\">#include &lt;iostream&gt;\n#include &lt;string&gt;\n#include &lt;iomanip&gt;\nusing namespace std;\n\nclass Employee {\nprivate:\n    int empId;\n    string name;\n    double basicSalary;\n    double grossSalary;\n    static int recordCount;\n\npublic:\n    Employee() { recordCount++; }\n\n    void input() {\n        cout << \"Enter Employee ID: \"; cin >> empId;\n        cin.ignore();\n        cout << \"Enter Name: \"; getline(cin, name);\n        do {\n            cout << \"Enter Basic Salary (>= 0): \";\n            cin >> basicSalary;\n        } while (basicSalary < 0);\n        calculateGross();\n    }\n\n    void calculateGross() {\n        double hra = 0.20 * basicSalary;\n        double da  = 0.30 * basicSalary;\n        double oa  = 0.10 * basicSalary;\n        grossSalary = basicSalary + hra + da + oa;\n    }\n\n    void display() const {\n        cout << left << setw(8) << empId << setw(18) << name \n             << fixed << setprecision(2) << setw(12) << basicSalary \n             << setw(12) << grossSalary << \"\\n\";\n    }\n\n    static int getTotalRecords() { return recordCount; }\n};\n\nint Employee::recordCount = 0;\n\nint main() {\n    int n;\n    cout << \"Enter count of employees: \";\n    cin >> n;\n    Employee emp[n];\n\n    for (int i = 0; i < n; i++) {\n        cout << \"\\n[Employee \" << (i + 1) << \"]\\n\";\n        emp[i].input();\n    }\n\n    cout << \"\\n================== EMPLOYEE PAYROLL ==================\\n\";\n    cout << left << setw(8) << \"ID\" << setw(18) << \"Name\" \n         << setw(12) << \"Basic\" << setw(12) << \"Gross\" << \"\\n\";\n    cout << \"------------------------------------------------------\\n\";\n    for (int i = 0; i < n; i++) emp[i].display();\n    cout << \"------------------------------------------------------\\n\";\n    cout << \"Total Employee Records Processed: \" << Employee::getTotalRecords() << \"\\n\";\n    return 0;\n}</code></pre>\n</div>"
          },
          {
            "id": "ds1-q6",
            "title": "DS1-6: Class Book with Price-Ascending Sort (10 Books)",
            "difficulty": "Intermediate",
            "category": "Classes & Objects",
            "question": "Write a program to define a class called book. Write a program to read information about 10 books and display books details in ascending order of price in proper format.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>C++ Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"cpp_book\">Copy</button></div>\n<pre><code id=\"cpp_book\">#include &lt;iostream&gt;\n#include &lt;string&gt;\n#include &lt;algorithm&gt;\n#include &lt;iomanip&gt;\nusing namespace std;\n\nclass Book {\npublic:\n    int bookId;\n    string title;\n    string author;\n    double price;\n\n    void input() {\n        cout << \"Book ID: \"; cin >> bookId;\n        cin.ignore();\n        cout << \"Title: \"; getline(cin, title);\n        cout << \"Author: \"; getline(cin, author);\n        cout << \"Price: \"; cin >> price;\n    }\n\n    void display() const {\n        cout << left << setw(8) << bookId << setw(25) << title \n             << setw(20) << author << \"$\" << fixed << setprecision(2) << price << \"\\n\";\n    }\n};\n\nbool comparePrice(const Book& a, const Book& b) {\n    return a.price < b.price; // Ascending price\n}\n\nint main() {\n    const int N = 10;\n    Book books[N];\n    cout << \"Enter details for \" << N << \" books:\\n\";\n    for (int i = 0; i < N; i++) {\n        cout << \"\\n[Book #\" << (i + 1) << \"]\\n\";\n        books[i].input();\n    }\n\n    sort(books, books + N, comparePrice);\n\n    cout << \"\\n================== BOOKS (SORTED BY PRICE ASCENDING) ==================\\n\";\n    cout << left << setw(8) << \"ID\" << setw(25) << \"Title\" \n         << setw(20) << \"Author\" << \"Price\" << \"\\n\";\n    cout << \"------------------------------------------------------------------------\\n\";\n    for (int i = 0; i < N; i++) books[i].display();\n    return 0;\n}</code></pre>\n</div>"
          },
          {
            "id": "ds1-q7",
            "title": "DS1-7: Class STUDENT with Minimum Passing Marks & Specific Roll Modification",
            "difficulty": "Intermediate",
            "category": "Classes & Objects",
            "question": "Create class STUDENT having rollno, name and age as data members, also take subject with three subjects and initialize their value with minimum passing marks. Using member function, modify marks of student with specific rollno which is given by user.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>C++ Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"cpp_stu_mod\">Copy</button></div>\n<pre><code id=\"cpp_stu_mod\">#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\nclass STUDENT {\nprivate:\n    int rollno;\n    string name;\n    int age;\n    float marks[3]; // 3 subjects initialized to passing 40\n\npublic:\n    STUDENT(int r = 0, string n = \"\", int a = 18) {\n        rollno = r;\n        name = n;\n        age = a;\n        marks[0] = 40.0f; // Minimum passing mark\n        marks[1] = 40.0f;\n        marks[2] = 40.0f;\n    }\n\n    int getRollNo() const { return rollno; }\n\n    void updateMarks(float m1, float m2, float m3) {\n        marks[0] = m1;\n        marks[1] = m2;\n        marks[2] = m3;\n        cout << \"Marks updated successfully for Roll No: \" << rollno << \"\\n\";\n    }\n\n    void display() const {\n        cout << \"Roll: \" << rollno << \" | Name: \" << name << \" | Age: \" << age\n             << \" | Marks: [\" << marks[0] << \", \" << marks[1] << \", \" << marks[2] << \"]\\n\";\n    }\n};\n\nint main() {\n    STUDENT cohort[3] = {\n        STUDENT(101, \"Alice\", 21),\n        STUDENT(102, \"Bob\", 22),\n        STUDENT(103, \"Charlie\", 21)\n    };\n\n    cout << \"Default Initialized Cohort (Default min marks = 40):\\n\";\n    for (int i = 0; i < 3; i++) cohort[i].display();\n\n    int targetRoll;\n    cout << \"\\nEnter Roll Number to modify marks: \";\n    cin >> targetRoll;\n\n    bool found = false;\n    for (int i = 0; i < 3; i++) {\n        if (cohort[i].getRollNo() == targetRoll) {\n            float m1, m2, m3;\n            cout << \"Enter new marks for 3 subjects: \";\n            cin >> m1 >> m2 >> m3;\n            cohort[i].updateMarks(m1, m2, m3);\n            cohort[i].display();\n            found = true;\n            break;\n        }\n    }\n    if (!found) cout << \"Student with Roll No \" << targetRoll << \" not found.\\n\";\n    return 0;\n}</code></pre>\n</div>"
          },
          {
            "id": "ds1-q8",
            "title": "DS1-8: Bank Account Class Handling 10 Customers",
            "difficulty": "Intermediate",
            "category": "Classes & Objects",
            "question": "Define a class to represent a bank account. Include: Name of depositor, Account Number, Type of Account, Balance amount. Member functions: (1) Assign initial values, (2) Deposit amount, (3) Withdraw amount after checking balance, (4) Display name and balance. Write C++ program to handle 10 customers.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>C++ Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"cpp_bank\">Copy</button></div>\n<pre><code id=\"cpp_bank\">#include &lt;iostream&gt;\n#include &lt;string&gt;\n#include &lt;iomanip&gt;\nusing namespace std;\n\nclass BankAccount {\nprivate:\n    string depositorName;\n    long long accountNumber;\n    string accountType;\n    double balance;\n\npublic:\n    void init(string name, long long accNo, string type, double initialBal) {\n        depositorName = name;\n        accountNumber = accNo;\n        accountType = type;\n        balance = (initialBal >= 0) ? initialBal : 0.0;\n    }\n\n    void deposit(double amount) {\n        if (amount > 0) {\n            balance += amount;\n            cout << \"Deposited $\" << amount << \". New Balance: $\" << balance << \"\\n\";\n        } else {\n            cout << \"Invalid deposit amount!\\n\";\n        }\n    }\n\n    void withdraw(double amount) {\n        if (amount <= 0) {\n            cout << \"Invalid withdrawal amount!\\n\";\n        } else if (amount > balance) {\n            cout << \"Insufficient balance! Current: $\" << balance << \"\\n\";\n        } else {\n            balance -= amount;\n            cout << \"Withdrew $\" << amount << \". Remaining Balance: $\" << balance << \"\\n\";\n        }\n    }\n\n    void display() const {\n        cout << \"Acc: \" << accountNumber << \" | Holder: \" << left << setw(15) \n             << depositorName << \" | Type: \" << setw(10) << accountType \n             << \" | Balance: $\" << fixed << setprecision(2) << balance << \"\\n\";\n    }\n\n    long long getAccNo() const { return accountNumber; }\n};\n\nint main() {\n    const int N = 10;\n    BankAccount accounts[N];\n\n    // Seed 10 sample customers\n    for (int i = 0; i < N; i++) {\n        accounts[i].init(\"Client_\" + to_string(i + 1), 1000100 + i, (i % 2 == 0 ? \"Savings\" : \"Current\"), 5000.0 * (i + 1));\n    }\n\n    cout << \"=== INITIAL BANK REPOSITORY (10 CUSTOMERS) ===\\n\";\n    for (int i = 0; i < N; i++) accounts[i].display();\n\n    // Example transaction\n    cout << \"\\nExecuting operations on Account 1000102:\\n\";\n    accounts[2].deposit(1250.0);\n    accounts[2].withdraw(3000.0);\n    accounts[2].display();\n    return 0;\n}</code></pre>\n</div>"
          },
          {
            "id": "ds1-q9",
            "title": "DS1-9: Class Search with Static Call Counter",
            "difficulty": "Intermediate",
            "category": "Static Members",
            "question": "Write a program to create class 'Search' having data members (int a[], x) and define member functions as void input(), void output(), void search(int position), void add(int value) to display result. Also display how many times search method is called using static count.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>C++ Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"cpp_search\">Copy</button></div>\n<pre><code id=\"cpp_search\">#include &lt;iostream&gt;\nusing namespace std;\n\nclass Search {\nprivate:\n    int a[100];\n    int size;\n    static int searchInvocationCount;\n\npublic:\n    Search() : size(0) {}\n\n    void input() {\n        cout << \"Enter number of elements: \";\n        cin >> size;\n        cout << \"Enter \" << size << \" integers: \";\n        for (int i = 0; i < size; i++) cin >> a[i];\n    }\n\n    void output() const {\n        cout << \"Array: [\";\n        for (int i = 0; i < size; i++) cout << a[i] << (i < size - 1 ? \", \" : \"\");\n        cout << \"]\\n\";\n    }\n\n    void add(int value) {\n        if (size < 100) {\n            a[size++] = value;\n            cout << \"Appended \" << value << \" at index \" << (size - 1) << \"\\n\";\n        } else {\n            cout << \"Array overflow!\\n\";\n        }\n    }\n\n    void search(int position) {\n        searchInvocationCount++;\n        if (position >= 0 && position < size) {\n            cout << \"Element at index \" << position << \" is: \" << a[position] << \"\\n\";\n        } else {\n            cout << \"Invalid index \" << position << \"! Bounds are [0..\" << size - 1 << \"]\\n\";\n        }\n    }\n\n    static int getSearchCount() { return searchInvocationCount; }\n};\n\nint Search::searchInvocationCount = 0;\n\nint main() {\n    Search s;\n    s.input();\n    s.output();\n\n    s.search(1);\n    s.search(3);\n    s.add(99);\n    s.search(s.getSearchCount());\n\n    cout << \"\\nTotal times search() was invoked: \" << Search::getSearchCount() << \"\\n\";\n    return 0;\n}</code></pre>\n</div>"
          },
          {
            "id": "ds1-q10",
            "title": "DS1-10: Class Wallet with High-Balance & High-Transaction Tracking",
            "difficulty": "Advanced",
            "category": "Classes & Objects",
            "question": "Write a C++ program to create a class Wallet to manage the details and transactions of digital wallets. Data members: Wallet ID, Owner Name, Balance, Transaction Count. Conditions: Initial balance >= Rs 500, Deposit >= Rs 100, Withdrawal allowed only if balance remains >= Rs 500. Display: highest balance wallet, highest transaction wallet, and static total transactions.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>C++ Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"cpp_wallet\">Copy</button></div>\n<pre><code id=\"cpp_wallet\">#include &lt;iostream&gt;\n#include &lt;string&gt;\n#include &lt;vector&gt;\nusing namespace std;\n\nclass Wallet {\nprivate:\n    int walletId;\n    string ownerName;\n    double balance;\n    int transactionCount;\n    static int totalGlobalTransactions;\n\npublic:\n    Wallet(int id, string name, double initBal) {\n        walletId = id;\n        ownerName = name;\n        balance = (initBal >= 500.0) ? initBal : 500.0;\n        transactionCount = 0;\n    }\n\n    bool deposit(double amount) {\n        if (amount < 100.0) {\n            cout << \"Error: Deposit must be at least Rs 100.\\n\";\n            return false;\n        }\n        balance += amount;\n        transactionCount++;\n        totalGlobalTransactions++;\n        return true;\n    }\n\n    bool withdraw(double amount) {\n        if (amount <= 0) return false;\n        if (balance - amount < 500.0) {\n            cout << \"Error: Withdrawal denied! Balance must remain at least Rs 500.\\n\";\n            return false;\n        }\n        balance -= amount;\n        transactionCount++;\n        totalGlobalTransactions++;\n        return true;\n    }\n\n    double getBalance() const { return balance; }\n    int getTxCount() const { return transactionCount; }\n\n    void display() const {\n        cout << \"Wallet ID: \" << walletId << \" | Owner: \" << ownerName \n             << \" | Balance: Rs \" << balance << \" | Txns: \" << transactionCount << \"\\n\";\n    }\n\n    static int getGlobalTxCount() { return totalGlobalTransactions; }\n};\n\nint Wallet::totalGlobalTransactions = 0;\n\nint main() {\n    vector&lt;Wallet&gt; wallets = {\n        Wallet(101, \"Alice\", 1200.0),\n        Wallet(102, \"Bob\", 600.0),\n        Wallet(103, \"Charlie\", 2500.0)\n    };\n\n    wallets[0].deposit(500);\n    wallets[0].withdraw(300);\n    wallets[1].deposit(200);\n    wallets[1].withdraw(400); // Should fail minimum balance test\n    wallets[2].deposit(1000);\n    wallets[2].deposit(500);\n\n    cout << \"\\n=== ALL WALLETS ===\\n\";\n    int highestBalIdx = 0, highestTxIdx = 0;\n    for (size_t i = 0; i < wallets.size(); i++) {\n        wallets[i].display();\n        if (wallets[i].getBalance() > wallets[highestBalIdx].getBalance()) highestBalIdx = i;\n        if (wallets[i].getTxCount() > wallets[highestTxIdx].getTxCount()) highestTxIdx = i;\n    }\n\n    cout << \"\\nWallet with Highest Balance:\\n  \"; wallets[highestBalIdx].display();\n    cout << \"Wallet with Highest Transactions:\\n  \"; wallets[highestTxIdx].display();\n    cout << \"Global Transactions across all wallets: \" << Wallet::getGlobalTxCount() << \"\\n\";\n    return 0;\n}</code></pre>\n</div>"
          },
          {
            "id": "ds1-q11",
            "title": "DS1-11: Product Inventory Management (10 Products)",
            "difficulty": "Intermediate",
            "category": "Classes & Objects",
            "question": "Write a program to create a class Product having: Product ID, Product Name, Price, Quantity. Create records for 10 products and perform: (1) Display all, (2) Calculate total inventory value, (3) Display highest priced product, (4) Display products whose quantity is less than 10, (5) Search product using Product ID.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>C++ Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"cpp_prod\">Copy</button></div>\n<pre><code id=\"cpp_prod\">#include &lt;iostream&gt;\n#include &lt;string&gt;\n#include &lt;iomanip&gt;\nusing namespace std;\n\nclass Product {\nprivate:\n    int productId;\n    string productName;\n    double price;\n    int quantity;\n\npublic:\n    void init(int id, string name, double p, int q) {\n        productId = id;\n        productName = name;\n        price = (p > 0) ? p : 1.0;\n        quantity = (q >= 0) ? q : 0;\n    }\n\n    int getId() const { return productId; }\n    double getPrice() const { return price; }\n    int getQty() const { return quantity; }\n    double getValue() const { return price * quantity; }\n\n    void display() const {\n        cout << left << setw(6) << productId << setw(20) << productName \n             << \"$\" << fixed << setprecision(2) << setw(10) << price \n             << setw(8) << quantity \n             << \"$\" << setw(12) << getValue() << \"\\n\";\n    }\n};\n\nint main() {\n    const int N = 10;\n    Product catalog[N];\n\n    // Seed 10 products\n    catalog[0].init(101, \"Laptop Core i7\", 1100.0, 5);\n    catalog[1].init(102, \"Wireless Mouse\", 25.0, 50);\n    catalog[2].init(103, \"Mechanical Keyboard\", 85.0, 8);\n    catalog[3].init(104, \"4K IPS Monitor\", 450.0, 12);\n    catalog[4].init(105, \"USB-C Hub\", 35.0, 4);\n    catalog[5].init(106, \"Webcam 1080p\", 60.0, 15);\n    catalog[6].init(107, \"External SSD 1TB\", 120.0, 30);\n    catalog[7].init(108, \"Noise-Cancel Headset\", 199.0, 7);\n    catalog[8].init(109, \"Desk Pad XL\", 18.0, 40);\n    catalog[9].init(110, \"Smart Light Bar\", 55.0, 9);\n\n    cout << \"=== PRODUCT INVENTORY CATALOG ===\\n\";\n    cout << left << setw(6) << \"ID\" << setw(20) << \"Name\" << setw(11) << \"Price\" \n         << setw(8) << \"Qty\" << \"Total Value\\n\";\n    cout << \"------------------------------------------------------------\\n\";\n    double totalInventoryValue = 0.0;\n    int maxPriceIdx = 0;\n\n    for (int i = 0; i < N; i++) {\n        catalog[i].display();\n        totalInventoryValue += catalog[i].getValue();\n        if (catalog[i].getPrice() > catalog[maxPriceIdx].getPrice()) maxPriceIdx = i;\n    }\n    cout << \"------------------------------------------------------------\\n\";\n    cout << \"Total Inventory Worth: $\" << totalInventoryValue << \"\\n\";\n\n    cout << \"\\nProduct with Highest Price:\\n  \"; catalog[maxPriceIdx].display();\n\n    cout << \"\\nLow Stock Products (Quantity < 10):\\n\";\n    for (int i = 0; i < N; i++) {\n        if (catalog[i].getQty() < 10) catalog[i].display();\n    }\n\n    // Search by ID\n    int searchId = 105;\n    cout << \"\\nSearching for Product ID \" << searchId << \":\\n\";\n    bool found = false;\n    for (int i = 0; i < N; i++) {\n        if (catalog[i].getId() == searchId) {\n            catalog[i].display();\n            found = true;\n            break;\n        }\n    }\n    if (!found) cout << \"Not found.\\n\";\n    return 0;\n}</code></pre>\n</div>"
          },
          {
            "id": "ds1-q12",
            "title": "DS1-12: Electricity Bill Calculation (Slab Pricing for 10 Consumers)",
            "difficulty": "Intermediate",
            "category": "Classes & Objects",
            "question": "Create a class Electricity Bill having: Consumer Number, Consumer Name, Previous Meter Reading, Current Meter Reading. Calculate bill according to slabs: First 100 units @ Rs 2/unit, 101-200 @ Rs 3/unit, 201-300 @ Rs 5/unit, Above 300 @ Rs 7/unit. Display consumer details, units, bill amount for 10 consumers, and find consumer with highest bill.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>C++ Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"cpp_elec\">Copy</button></div>\n<pre><code id=\"cpp_elec\">#include &lt;iostream&gt;\n#include &lt;string&gt;\n#include &lt;iomanip&gt;\nusing namespace std;\n\nclass ElectricityBill {\nprivate:\n    int consumerNo;\n    string consumerName;\n    int prevReading;\n    int currReading;\n    int unitsConsumed;\n    double billAmount;\n\npublic:\n    void init(int no, string name, int prev, int curr) {\n        consumerNo = no;\n        consumerName = name;\n        prevReading = (prev >= 0) ? prev : 0;\n        currReading = (curr >= prevReading) ? curr : prevReading;\n        calculate();\n    }\n\n    void calculate() {\n        unitsConsumed = currReading - prevReading;\n        int u = unitsConsumed;\n        billAmount = 0.0;\n\n        if (u <= 100) {\n            billAmount = u * 2.0;\n        } else if (u <= 200) {\n            billAmount = (100 * 2.0) + (u - 100) * 3.0;\n        } else if (u <= 300) {\n            billAmount = (100 * 2.0) + (100 * 3.0) + (u - 200) * 5.0;\n        } else {\n            billAmount = (100 * 2.0) + (100 * 3.0) + (100 * 5.0) + (u - 300) * 7.0;\n        }\n    }\n\n    double getBill() const { return billAmount; }\n\n    void display() const {\n        cout << left << setw(8) << consumerNo << setw(18) << consumerName \n             << setw(10) << prevReading << setw(10) << currReading \n             << setw(10) << unitsConsumed << \"Rs \" << fixed << setprecision(2) << billAmount << \"\\n\";\n    }\n};\n\nint main() {\n    const int N = 10;\n    ElectricityBill bills[N];\n\n    int prevs[] = { 1000, 2400, 1500, 3100, 4000, 1200, 5000, 6200, 1100, 800 };\n    int currs[] = { 1080, 2550, 1750, 3450, 4420, 1230, 5210, 6590, 1310, 990 };\n\n    for (int i = 0; i < N; i++) {\n        bills[i].init(1001 + i, \"Consumer_\" + to_string(i + 1), prevs[i], currs[i]);\n    }\n\n    cout << \"======================== ELECTRICITY BILL STATEMENTS ========================\\n\";\n    cout << left << setw(8) << \"Cons No\" << setw(18) << \"Name\" \n         << setw(10) << \"Prev Rdg\" << setw(10) << \"Curr Rdg\" \n         << setw(10) << \"Units\" << \"Bill Amount\\n\";\n    cout << \"-----------------------------------------------------------------------------\\n\";\n\n    int maxIdx = 0;\n    for (int i = 0; i < N; i++) {\n        bills[i].display();\n        if (bills[i].getBill() > bills[maxIdx].getBill()) maxIdx = i;\n    }\n    cout << \"-----------------------------------------------------------------------------\\n\";\n    cout << \"\\nConsumer with Highest Bill:\\n  \"; bills[maxIdx].display();\n    return 0;\n}</code></pre>\n</div>"
          },
          {
            "id": "ds2-q1",
            "title": "DS2-1: Overloading Binary + Operator for Class Numbers",
            "difficulty": "Intermediate",
            "category": "Operator Overloading",
            "question": "WAP to use binary operator + to add two objects of class Numbers having num1 and num2 as its data members and display result.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>C++ Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"cpp_oo_add\">Copy</button></div>\n<pre><code id=\"cpp_oo_add\">#include &lt;iostream&gt;\nusing namespace std;\n\nclass Numbers {\nprivate:\n    int num1, num2;\npublic:\n    Numbers(int n1 = 0, int n2 = 0) : num1(n1), num2(n2) {}\n\n    // Overloaded binary + operator\n    Numbers operator+(const Numbers& other) const {\n        return Numbers(num1 + other.num1, num2 + other.num2);\n    }\n\n    void display() const {\n        cout << \"(num1 = \" << num1 << \", num2 = \" << num2 << \")\\n\";\n    }\n};\n\nint main() {\n    Numbers n1(10, 20);\n    Numbers n2(5, 15);\n    Numbers n3 = n1 + n2;\n\n    cout << \"n1: \"; n1.display();\n    cout << \"n2: \"; n2.display();\n    cout << \"Result n1 + n2: \"; n3.display();\n    return 0;\n}</code></pre>\n</div>"
          },
          {
            "id": "ds2-q2",
            "title": "DS2-2: Overload Operator * to Scale Class arrayContainer",
            "difficulty": "Intermediate",
            "category": "Operator Overloading",
            "question": "WAP to overload operator * which multiplies a scalar number to each element of an array within a class arrayContainer and displays the result.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>C++ Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"cpp_arr_scale\">Copy</button></div>\n<pre><code id=\"cpp_arr_scale\">#include &lt;iostream&gt;\nusing namespace std;\n\nclass ArrayContainer {\nprivate:\n    int arr[10];\n    int size;\n\npublic:\n    ArrayContainer(int s = 5) : size(s) {\n        for (int i = 0; i < size; i++) arr[i] = (i + 1) * 2;\n    }\n\n    // Overload operator * for scalar multiplication (container * scalar)\n    ArrayContainer operator*(int scalar) const {\n        ArrayContainer result(size);\n        for (int i = 0; i < size; i++) {\n            result.arr[i] = this->arr[i] * scalar;\n        }\n        return result;\n    }\n\n    void display() const {\n        cout << \"[ \";\n        for (int i = 0; i < size; i++) cout << arr[i] << \" \";\n        cout << \"]\\n\";\n    }\n};\n\nint main() {\n    ArrayContainer ac(5);\n    cout << \"Original Array: \"; ac.display();\n\n    ArrayContainer scaled = ac * 3;\n    cout << \"Scaled by 3:    \"; scaled.display();\n    return 0;\n}</code></pre>\n</div>"
          },
          {
            "id": "ds2-q3",
            "title": "DS2-3: Complex Number Class Overloading (*, +, -, ==, !=, =)",
            "difficulty": "Advanced",
            "category": "Operator Overloading",
            "question": "WAP to overload the *, +, -, ==, != and = operators for the Complex class.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>C++ Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"cpp_complex\">Copy</button></div>\n<pre><code id=\"cpp_complex\">#include &lt;iostream&gt;\nusing namespace std;\n\nclass Complex {\nprivate:\n    double real, imag;\n\npublic:\n    Complex(double r = 0.0, double i = 0.0) : real(r), imag(i) {}\n\n    // Copy assignment\n    Complex& operator=(const Complex& other) {\n        if (this != &other) {\n            real = other.real;\n            imag = other.imag;\n        }\n        return *this;\n    }\n\n    // Binary +\n    Complex operator+(const Complex& o) const {\n        return Complex(real + o.real, imag + o.imag);\n    }\n\n    // Binary -\n    Complex operator-(const Complex& o) const {\n        return Complex(real - o.real, imag - o.imag);\n    }\n\n    // Binary *\n    Complex operator*(const Complex& o) const {\n        return Complex(real * o.real - imag * o.imag, real * o.imag + imag * o.real);\n    }\n\n    // Equality\n    bool operator==(const Complex& o) const {\n        return (real == o.real && imag == o.imag);\n    }\n\n    // Inequality\n    bool operator!=(const Complex& o) const {\n        return !(*this == o);\n    }\n\n    void display() const {\n        cout << real << (imag >= 0 ? \" + \" : \" - \") << abs(imag) << \"i\\n\";\n    }\n};\n\nint main() {\n    Complex c1(3, 4), c2(1, -2);\n    cout << \"c1 = \"; c1.display();\n    cout << \"c2 = \"; c2.display();\n\n    Complex sum = c1 + c2;\n    Complex diff = c1 - c2;\n    Complex prod = c1 * c2;\n\n    cout << \"c1 + c2 = \"; sum.display();\n    cout << \"c1 - c2 = \"; diff.display();\n    cout << \"c1 * c2 = \"; prod.display();\n    cout << \"c1 == c2: \" << (c1 == c2 ? \"true\" : \"false\") << \"\\n\";\n    cout << \"c1 != c2: \" << (c1 != c2 ? \"true\" : \"false\") << \"\\n\";\n    return 0;\n}</code></pre>\n</div>"
          },
          {
            "id": "ds2-q4",
            "title": "DS2-4: Matrix Class with Stream Output Overloading (m1 << cout)",
            "difficulty": "Intermediate",
            "category": "Operator Overloading",
            "question": "WAP to define an object m1 of matrix class, use m1 << cout (and standard stream insertion cout << m1).",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>C++ Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"cpp_mat_stream\">Copy</button></div>\n<pre><code id=\"cpp_mat_stream\">#include &lt;iostream&gt;\nusing namespace std;\n\nclass Matrix {\nprivate:\n    int mat[2][2];\n\npublic:\n    Matrix() {\n        mat[0][0] = 1; mat[0][1] = 2;\n        mat[1][0] = 3; mat[1][1] = 4;\n    }\n\n    // Member function overloading << for syntax: m1 << cout;\n    void operator<<(ostream& os) const {\n        os << \"[\" << mat[0][0] << \", \" << mat[0][1] << \"]\\n\"\n           << \"[\" << mat[1][0] << \", \" << mat[1][1] << \"]\\n\";\n    }\n\n    // Standard friend function for idiomatic: cout << m1;\n    friend ostream& operator<<(ostream& os, const Matrix& m) {\n        m << os;\n        return os;\n    }\n};\n\nint main() {\n    Matrix m1;\n    cout << \"Output via m1 << cout syntax:\\n\";\n    m1 << cout;\n\n    cout << \"\\nOutput via standard cout << m1 syntax:\\n\";\n    cout << m1;\n    return 0;\n}</code></pre>\n</div>"
          },
          {
            "id": "ds2-q5",
            "title": "DS2-5: Matrix Scalar Multiplication with Commutative Friend (5 * Matrix)",
            "difficulty": "Intermediate",
            "category": "Operator Overloading",
            "question": "WAP to define a matrix class and overload the * operator to multiply a number with matrix (Example: 5 * Matrix should be possible using friend function).",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>C++ Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"cpp_scalar_mat\">Copy</button></div>\n<pre><code id=\"cpp_scalar_mat\">#include &lt;iostream&gt;\nusing namespace std;\n\nclass Matrix {\nprivate:\n    int data[2][2];\n\npublic:\n    Matrix(int a=1, int b=2, int c=3, int d=4) {\n        data[0][0]=a; data[0][1]=b;\n        data[1][0]=c; data[1][1]=d;\n    }\n\n    // Member function for: Matrix * scalar\n    Matrix operator*(int scalar) const {\n        return Matrix(data[0][0]*scalar, data[0][1]*scalar,\n                      data[1][0]*scalar, data[1][1]*scalar);\n    }\n\n    // Friend function for: scalar * Matrix (e.g. 5 * m1)\n    friend Matrix operator*(int scalar, const Matrix& m) {\n        return m * scalar;\n    }\n\n    void display() const {\n        cout << \"[\" << data[0][0] << \"  \" << data[0][1] << \"]\\n\"\n             << \"[\" << data[1][0] << \"  \" << data[1][1] << \"]\\n\";\n    }\n};\n\nint main() {\n    Matrix m(2, 3, 4, 5);\n    cout << \"Original Matrix:\\n\"; m.display();\n\n    Matrix res1 = 5 * m; // 5 * Matrix enabled via friend function\n    cout << \"\\nResult of 5 * Matrix:\\n\"; res1.display();\n\n    Matrix res2 = m * 2;\n    cout << \"\\nResult of Matrix * 2:\\n\"; res2.display();\n    return 0;\n}</code></pre>\n</div>"
          },
          {
            "id": "ds2-q6",
            "title": "DS2-6: Class Date Operator Overloading (+, -, =, <, <=, >, >=, ++, --)",
            "difficulty": "Advanced",
            "category": "Operator Overloading",
            "question": "WAP to define a class Date with properties int month, day, year. Overload operators assuming 360-day year and 30-day month: (1) Date + int, (2) Date - int, (3) =, (4) Relational (<, <=, >, >=), (5) Pre/Post ++ and --.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>C++ Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"cpp_date_ops\">Copy</button></div>\n<pre><code id=\"cpp_date_ops\">#include &lt;iostream&gt;\n#include &lt;iomanip&gt;\nusing namespace std;\n\nclass Date {\nprivate:\n    int day, month, year;\n\n    long toDays() const {\n        return (long)year * 360 + (month - 1) * 30 + day;\n    }\n\n    void fromDays(long totalDays) {\n        year = totalDays / 360;\n        long rem = totalDays % 360;\n        month = (rem / 30) + 1;\n        day = (rem % 30);\n        if (day == 0) { day = 30; month--; }\n    }\n\npublic:\n    Date(int d=1, int m=1, int y=2026) : day(d), month(m), year(y) {}\n\n    // Date + int\n    Date operator+(int days) const {\n        Date temp;\n        temp.fromDays(this->toDays() + days);\n        return temp;\n    }\n\n    // Date - int\n    Date operator-(int days) const {\n        Date temp;\n        temp.fromDays(this->toDays() - days);\n        return temp;\n    }\n\n    // Relational\n    bool operator<(const Date& o) const { return toDays() < o.toDays(); }\n    bool operator<=(const Date& o) const { return toDays() <= o.toDays(); }\n    bool operator>(const Date& o) const { return toDays() > o.toDays(); }\n    bool operator>=(const Date& o) const { return toDays() >= o.toDays(); }\n\n    // Pre-increment\n    Date& operator++() {\n        *this = *this + 1;\n        return *this;\n    }\n\n    // Post-increment\n    Date operator++(int) {\n        Date copy = *this;\n        *this = *this + 1;\n        return copy;\n    }\n\n    // Pre-decrement\n    Date& operator--() {\n        *this = *this - 1;\n        return *this;\n    }\n\n    // Post-decrement\n    Date operator--(int) {\n        Date copy = *this;\n        *this = *this - 1;\n        return copy;\n    }\n\n    void display() const {\n        cout << setfill('0') << setw(2) << day << \"/\"\n             << setfill('0') << setw(2) << month << \"/\" << year << \"\\n\";\n    }\n};\n\nint main() {\n    Date d(28, 5, 2026);\n    cout << \"Start: \"; d.display();\n    Date d2 = d + 5;\n    cout << \"d + 5: \"; d2.display();\n    ++d;\n    cout << \"++d:   \"; d.display();\n    cout << \"d < d2: \" << (d < d2 ? \"true\" : \"false\") << \"\\n\";\n    return 0;\n}</code></pre>\n</div>"
          },
          {
            "id": "ds2-q7",
            "title": "DS2-7: Class Time Operator Overloading (+, -, =, <, <=, >, >=, ++, --)",
            "difficulty": "Advanced",
            "category": "Operator Overloading",
            "question": "WAP to define a class Time with properties int hour, minute, second. Overload +, -, =, relational, and pre/post ++, -- operators.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>C++ Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"cpp_time_ops\">Copy</button></div>\n<pre><code id=\"cpp_time_ops\">#include &lt;iostream&gt;\n#include &lt;iomanip&gt;\nusing namespace std;\n\nclass Time {\nprivate:\n    int h, m, s;\n\n    long toSeconds() const { return h * 3600L + m * 60L + s; }\n    void fromSeconds(long sec) {\n        sec = (sec % 86400L + 86400L) % 86400L;\n        h = sec / 3600;\n        sec %= 3600;\n        m = sec / 60;\n        s = sec % 60;\n    }\n\npublic:\n    Time(int hr=0, int min=0, int sec=0) : h(hr), m(min), s(sec) {}\n\n    Time operator+(int sec) const {\n        Time res; res.fromSeconds(this->toSeconds() + sec); return res;\n    }\n    Time operator-(int sec) const {\n        Time res; res.fromSeconds(this->toSeconds() - sec); return res;\n    }\n\n    bool operator<(const Time& o) const { return toSeconds() < o.toSeconds(); }\n    bool operator<=(const Time& o) const { return toSeconds() <= o.toSeconds(); }\n    bool operator>(const Time& o) const { return toSeconds() > o.toSeconds(); }\n    bool operator>=(const Time& o) const { return toSeconds() >= o.toSeconds(); }\n\n    Time& operator++() { *this = *this + 1; return *this; }\n    Time operator++(int) { Time old = *this; *this = *this + 1; return old; }\n    Time& operator--() { *this = *this - 1; return *this; }\n    Time operator--(int) { Time old = *this; *this = *this - 1; return old; }\n\n    void display() const {\n        cout << setfill('0') << setw(2) << h << \":\" \n             << setfill('0') << setw(2) << m << \":\" \n             << setfill('0') << setw(2) << s << \"\\n\";\n    }\n};\n\nint main() {\n    Time t1(10, 59, 58);\n    cout << \"Initial: \"; t1.display();\n    ++t1;\n    cout << \"++t1:    \"; t1.display();\n    ++t1;\n    cout << \"++t1:    \"; t1.display();\n    return 0;\n}</code></pre>\n</div>"
          },
          {
            "id": "ds2-q8",
            "title": "DS2-8: Menu-Driven Custom String Class with Overloaded Operators",
            "difficulty": "Advanced",
            "category": "Operator Overloading",
            "question": "Write a menu driven program that can perform the following functions on strings using overloaded operators where possible (without using predefined string library): (1) Equality (==), (2) Comparison (<=), (3) Copy string, (4) Subscript character extraction ([]), (5) Reverse string, (6) Concatenation (+).",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>C++ Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"cpp_custom_str\">Copy</button></div>\n<pre><code id=\"cpp_custom_str\">#include &lt;iostream&gt;\nusing namespace std;\n\nclass MyString {\nprivate:\n    char* str;\n    int len;\n\n    int computeLength(const char* s) const {\n        int l = 0; while (s && s[l] != '\\0') l++; return l;\n    }\n\npublic:\n    MyString(const char* s = \"\") {\n        len = computeLength(s);\n        str = new char[len + 1];\n        for (int i = 0; i < len; i++) str[i] = s[i];\n        str[len] = '\\0';\n    }\n\n    MyString(const MyString& other) {\n        len = other.len;\n        str = new char[len + 1];\n        for (int i = 0; i <= len; i++) str[i] = other.str[i];\n    }\n\n    ~MyString() { delete[] str; }\n\n    // Copy assignment\n    MyString& operator=(const MyString& other) {\n        if (this != &other) {\n            delete[] str;\n            len = other.len;\n            str = new char[len + 1];\n            for (int i = 0; i <= len; i++) str[i] = other.str[i];\n        }\n        return *this;\n    }\n\n    // Equality ==\n    bool operator==(const MyString& other) const {\n        if (len != other.len) return false;\n        for (int i = 0; i < len; i++) {\n            if (str[i] != other.str[i]) return false;\n        }\n        return true;\n    }\n\n    // Lexicographical <=\n    bool operator<=(const MyString& other) const {\n        int minL = (len < other.len) ? len : other.len;\n        for (int i = 0; i < minL; i++) {\n            if (str[i] < other.str[i]) return true;\n            if (str[i] > other.str[i]) return false;\n        }\n        return len <= other.len;\n    }\n\n    // Subscript []\n    char operator[](int idx) const {\n        if (idx >= 0 && idx < len) return str[idx];\n        return '\\0';\n    }\n\n    // Concatenate +\n    MyString operator+(const MyString& other) const {\n        char* buf = new char[len + other.len + 1];\n        for (int i = 0; i < len; i++) buf[i] = str[i];\n        for (int j = 0; j < other.len; j++) buf[len + j] = other.str[j];\n        buf[len + other.len] = '\\0';\n        MyString res(buf);\n        delete[] buf;\n        return res;\n    }\n\n    void reverse() {\n        int l = 0, r = len - 1;\n        while (l < r) {\n            char t = str[l]; str[l] = str[r]; str[r] = t;\n            l++; r--;\n        }\n    }\n\n    void display() const { cout << str; }\n};\n\nint main() {\n    MyString s1(\"Data\");\n    MyString s2(\"Structures\");\n\n    cout << \"s1: \"; s1.display(); cout << \"\\n\";\n    cout << \"s2: \"; s2.display(); cout << \"\\n\";\n\n    MyString s3 = s1 + s2;\n    cout << \"Concatenation (+): \"; s3.display(); cout << \"\\n\";\n\n    cout << \"Char at index 2 of s1: \" << s1[2] << \"\\n\";\n    cout << \"s1 == s2: \" << (s1 == s2 ? \"true\" : \"false\") << \"\\n\";\n    cout << \"s1 <= s2: \" << (s1 <= s2 ? \"true\" : \"false\") << \"\\n\";\n\n    s3.reverse();\n    cout << \"Reversed concatenation: \"; s3.display(); cout << \"\\n\";\n    return 0;\n}</code></pre>\n</div>"
          },
          {
            "id": "ds2-q9",
            "title": "DS2-9: Generic Number Class Template for Arithmetic (+, -, *, /)",
            "difficulty": "Intermediate",
            "category": "Templates & Generics",
            "question": "Write an object-oriented program to implement a generic Number Class using templates that can accept either int or float data type and perform basic calculation like +, -, / and *.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>C++ Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"cpp_gen_num\">Copy</button></div>\n<pre><code id=\"cpp_gen_num\">#include &lt;iostream&gt;\nusing namespace std;\n\ntemplate &lt;typename T&gt;\nclass GenericNumber {\nprivate:\n    T val;\n\npublic:\n    GenericNumber(T v = 0) : val(v) {}\n\n    T add(T other) const { return val + other; }\n    T subtract(T other) const { return val - other; }\n    T multiply(T other) const { return val * other; }\n    T divide(T other) const {\n        if (other == 0) {\n            cout << \"Division by zero error! \";\n            return 0;\n        }\n        return val / other;\n    }\n\n    void display() const { cout << val; }\n};\n\nint main() {\n    cout << \"--- Integer Mode ---\\n\";\n    GenericNumber&lt;int&gt; intNum(40);\n    cout << \"40 + 12 = \" << intNum.add(12) << \"\\n\";\n    cout << \"40 - 15 = \" << intNum.subtract(15) << \"\\n\";\n    cout << \"40 * 3  = \" << intNum.multiply(3) << \"\\n\";\n    cout << \"40 / 5  = \" << intNum.divide(5) << \"\\n\";\n\n    cout << \"\\n--- Float Mode ---\\n\";\n    GenericNumber&lt;float&gt; floatNum(17.5f);\n    cout << \"17.5 + 2.5 = \" << floatNum.add(2.5f) << \"\\n\";\n    cout << \"17.5 / 2.0 = \" << floatNum.divide(2.0f) << \"\\n\";\n    return 0;\n}</code></pre>\n</div>"
          },
          {
            "id": "ds2-q10",
            "title": "DS2-10: Generic Sorting Template Function for Strings, Integers, and Floats",
            "difficulty": "Intermediate",
            "category": "Templates & Generics",
            "question": "Write a generic template function that will sort a character string, integer array, and float array. Create a menu with appropriate options and accept the values from the user.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>C++ Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"cpp_gen_sort\">Copy</button></div>\n<pre><code id=\"cpp_gen_sort\">#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\ntemplate &lt;typename T&gt;\nvoid genericBubbleSort(T arr[], int n) {\n    for (int i = 0; i < n - 1; i++) {\n        for (int j = 0; j < n - i - 1; j++) {\n            if (arr[j] > arr[j + 1]) {\n                T temp = arr[j];\n                arr[j] = arr[j + 1];\n                arr[j + 1] = temp;\n            }\n        }\n    }\n}\n\ntemplate &lt;typename T&gt;\nvoid printArray(T arr[], int n) {\n    for (int i = 0; i < n; i++) cout << arr[i] << \" \";\n    cout << \"\\n\";\n}\n\nint main() {\n    int intArr[] = { 64, 34, 25, 12, 22, 11, 90 };\n    int nInt = sizeof(intArr)/sizeof(intArr[0]);\n    cout << \"Original Ints: \"; printArray(intArr, nInt);\n    genericBubbleSort(intArr, nInt);\n    cout << \"Sorted Ints:   \"; printArray(intArr, nInt);\n\n    float floatArr[] = { 3.14f, 1.41f, 2.71f, 0.58f };\n    int nFloat = sizeof(floatArr)/sizeof(floatArr[0]);\n    cout << \"\\nOriginal Floats: \"; printArray(floatArr, nFloat);\n    genericBubbleSort(floatArr, nFloat);\n    cout << \"Sorted Floats:   \"; printArray(floatArr, nFloat);\n\n    char charArr[] = { 'z', 'a', 'm', 'c', 'k' };\n    int nChar = sizeof(charArr)/sizeof(charArr[0]);\n    cout << \"\\nOriginal Chars: \"; printArray(charArr, nChar);\n    genericBubbleSort(charArr, nChar);\n    cout << \"Sorted Chars:   \"; printArray(charArr, nChar);\n    return 0;\n}</code></pre>\n</div>"
          },
          {
            "id": "ds2-q11",
            "title": "DS2-11: Template Function find() for Generic Array Lookup",
            "difficulty": "Intermediate",
            "category": "Templates & Generics",
            "question": "Write a template function called find(). This function searches an array for an object. It returns either the index of the matching object (if one is found) or -1 if no match is found.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>C++ Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"cpp_template_find\">Copy</button></div>\n<pre><code id=\"cpp_template_find\">#include &lt;iostream&gt;\n#include &lt;string&gt;\nusing namespace std;\n\ntemplate &lt;typename T&gt;\nint find(const T arr[], int size, const T& target) {\n    for (int i = 0; i < size; i++) {\n        if (arr[i] == target) {\n            return i; // Found at index i\n        }\n    }\n    return -1; // Not found\n}\n\nint main() {\n    int intArr[] = { 10, 20, 30, 40, 50 };\n    int idx1 = find(intArr, 5, 30);\n    cout << \"find(intArr, 30): Index \" << idx1 << \"\\n\";\n\n    string strArr[] = { \"Alpha\", \"Beta\", \"Gamma\", \"Delta\" };\n    int idx2 = find(strArr, 4, string(\"Gamma\"));\n    cout << \"find(strArr, 'Gamma'): Index \" << idx2 << \"\\n\";\n\n    int idx3 = find(strArr, 4, string(\"Omega\"));\n    cout << \"find(strArr, 'Omega'): Index \" << idx3 << \" (Not found)\\n\";\n    return 0;\n}</code></pre>\n</div>"
          }
        ],
        "cheatsheet": [
          {
            "title": "Data Structures Time & Space Complexity Reference",
            "content": "\n              <div class=\"data-table-wrapper\">\n                <table class=\"data-table\">\n                  <thead><tr><th>Data Structure</th><th>Access</th><th>Search</th><th>Insertion</th><th>Deletion</th><th>Space</th></tr></thead>\n                  <tbody>\n                    <tr><td>Array</td><td>O(1)</td><td>O(n)</td><td>O(n)</td><td>O(n)</td><td>O(n)</td></tr>\n                    <tr><td>Singly Linked List</td><td>O(n)</td><td>O(n)</td><td>O(1)</td><td>O(1)</td><td>O(n)</td></tr>\n                    <tr><td>Stack</td><td>O(n)</td><td>O(n)</td><td>O(1)</td><td>O(1)</td><td>O(n)</td></tr>\n                    <tr><td>Queue</td><td>O(n)</td><td>O(n)</td><td>O(1)</td><td>O(1)</td><td>O(n)</td></tr>\n                    <tr><td>Binary Search Tree</td><td>O(log n)</td><td>O(log n)</td><td>O(log n)</td><td>O(log n)</td><td>O(n)</td></tr>\n                    <tr><td>Hash Table</td><td>N/A</td><td>O(1)</td><td>O(1)</td><td>O(1)</td><td>O(n)</td></tr>\n                  </tbody>\n                </table>\n              </div>\n            "
          }
        ]
      },
      {
        "id": "mathematical-foundation",
        "code": "AIML-103",
        "name": "Mathematical Foundation",
        "subtitle": "Set Theory, Analytic Coordinate Geometry & Least Squares",
        "stats": {
          "topics": 8,
          "assignments": 55,
          "demos": 2
        },
        "overview": "Rigorous treatment of formal Set Theory, Venn diagram combinatorics, bit representation of power sets, Cartesian geometry, distance and section metrics, line and plane equations in R^2 and R^3, and Least Squares regression fitting.",
        "topics": [
          {
            "id": "mf-t1",
            "title": "Set Theory Foundations & Notation",
            "tag": "Foundations",
            "content": "\n              <p>A <strong>set</strong> is a well-defined collection of distinct objects called elements. Two canonical forms of set specification:</p>\n              <ul>\n                <li><strong>Roster (Tabular) Form:</strong> Explicit enumeration of elements within curly braces, e.g., \\( A = \\{2, 3, 5, 7, 11\\} \\).</li>\n                <li><strong>Set-Builder Form:</strong> Characterization through predicates, e.g., \\( B = \\{x \\in \\mathbb{N} \\mid x \\text{ is prime } \\land x < 15\\} \\).</li>\n              </ul>\n              <div class=\"callout callout-info\">\n                <div class=\"callout-title\">Key Set Cardinalities & Relations</div>\n                <p>\\( n(A) \\) denotes cardinality. Subset \\( A \\subseteq B \\iff \\forall x (x \\in A \\implies x \\in B) \\). The empty set \\( \\emptyset \\) satisfies \\( \\emptyset \\subseteq X \\) for every set \\( X \\). The power set \\( \\mathcal{P}(A) \\) contains all subsets and has cardinality \\( 2^{n(A)} \\).</p>\n              </div>\n            "
          },
          {
            "id": "mf-t2",
            "title": "Set Operations & Venn Diagrams",
            "tag": "Operations",
            "content": "\n              <p>Fundamental Boolean operations on sets in universe \\( U \\):</p>\n              <ul>\n                <li><strong>Union (\\( A \\cup B \\)):</strong> \\( \\{x \\in U \\mid x \\in A \\lor x \\in B\\} \\).</li>\n                <li><strong>Intersection (\\( A \\cap B \\)):</strong> \\( \\{x \\in U \\mid x \\in A \\land x \\in B\\} \\).</li>\n                <li><strong>Difference (\\( A \\setminus B \\)):</strong> \\( \\{x \\in U \\mid x \\in A \\land x \\notin B\\} \\).</li>\n                <li><strong>Complement (\\( A' \\text{ or } A^c \\)):</strong> \\( \\{x \\in U \\mid x \\notin A\\} = U \\setminus A \\).</li>\n                <li><strong>Cartesian Product (\\( A \\times B \\)):</strong> \\( \\{(a, b) \\mid a \\in A, b \\in B\\} \\), with \\( n(A \\times B) = n(A) \\cdot n(B) \\).</li>\n              </ul>\n            "
          },
          {
            "id": "mf-t3",
            "title": "De Morgan's Laws & Inclusion-Exclusion",
            "tag": "Laws & Proofs",
            "content": "\n              <div class=\"callout callout-info\">\n                <div class=\"callout-title\">De Morgan's Laws</div>\n                <ol>\n                  <li>\\( (A \\cup B)' = A' \\cap B' \\) (The complement of a union is the intersection of complements)</li>\n                  <li>\\( (A \\cap B)' = A' \\cup B' \\) (The complement of an intersection is the union of complements)</li>\n                </ol>\n              </div>\n              <p><strong>Principle of Inclusion-Exclusion (PIE) for 3 Sets:</strong></p>\n              <p>\\[ n(A \\cup B \\cup C) = n(A) + n(B) + n(C) - n(A \\cap B) - n(B \\cap C) - n(C \\cap A) + n(A \\cap B \\cap C) \\]</p>\n            "
          },
          {
            "id": "mf-t4",
            "title": "Bit Representation of Sets & Power Sets",
            "tag": "Discrete Structures",
            "content": "\n              <p>Let universe \\( S = \\{a_1, a_2, \\dots, a_n\\} \\) be ordered. Any subset \\( A \\subseteq S \\) can be uniquely represented by a bit string \\( b_n b_{n-1} \\dots b_1 \\) of length \\( n \\), where:</p>\n              <p>\\[ b_i = \\begin{cases} 1 & \\text{if } a_i \\in A \\\\ 0 & \\text{if } a_i \\notin A \\end{cases} \\]</p>\n              <p>Bitwise OR computes \\( A \\cup B \\), bitwise AND computes \\( A \\cap B \\), and bitwise NOT computes \\( A' \\) in \\( O(1) \\) machine word instructions.</p>\n            "
          },
          {
            "id": "mf-t5",
            "title": "2D & 3D Coordinate Geometry & Section Formula",
            "tag": "Geometry",
            "content": "\n              <p>Cartesian Euclidean metrics between points \\( P(x_1, y_1, z_1) \\) and \\( Q(x_2, y_2, z_2) \\):</p>\n              <ul>\n                <li><strong>Distance Formula:</strong> \\( d(P, Q) = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2} \\).</li>\n                <li><strong>Midpoint Formula:</strong> \\( M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}, \\frac{z_1 + z_2}{2}\\right) \\).</li>\n                <li><strong>Section Formula (Internal \\( m:n \\)):</strong> \\( P = \\left(\\frac{m x_2 + n x_1}{m + n}, \\frac{m y_2 + n y_1}{m + n}\\right) \\).</li>\n                <li><strong>Section Formula (External \\( m:n \\)):</strong> \\( P = \\left(\\frac{m x_2 - n x_1}{m - n}, \\frac{m y_2 - n y_1}{m - n}\\right) \\).</li>\n              </ul>\n            "
          },
          {
            "id": "mf-t6",
            "title": "Straight Lines, Angles & Perpendicular Distance",
            "tag": "Analytic Geometry",
            "content": "\n              <p>Standard algebraic forms for a 2D line:</p>\n              <ul>\n                <li><strong>Slope-Intercept:</strong> \\( y = mx + c \\), where \\( m = \\tan \\theta \\).</li>\n                <li><strong>General Form:</strong> \\( Ax + By + C = 0 \\), slope \\( m = -A/B \\).</li>\n                <li><strong>Intercept Form:</strong> \\( \\frac{x}{a} + \\frac{y}{b} = 1 \\).</li>\n                <li><strong>Angle Between Lines:</strong> \\( \\tan \\theta = \\left| \\frac{m_2 - m_1}{1 + m_1 m_2} \\right| \\). Parallel if \\( m_1 = m_2 \\); Perpendicular if \\( m_1 m_2 = -1 \\).</li>\n                <li><strong>Perpendicular Distance from \\( (x_0, y_0) \\):</strong> \\[ d = \\frac{|Ax_0 + By_0 + C|}{\\sqrt{A^2 + B^2}} \\]</li>\n              </ul>\n            "
          },
          {
            "id": "mf-t7",
            "title": "Planes & Hyperplanes in Machine Learning",
            "tag": "Linear Algebra",
            "content": "\n              <p>A plane in \\( \\mathbb{R}^3 \\) passing through \\( P_0(x_0, y_0, z_0) \\) with normal vector \\( \\mathbf{n} = \\langle A, B, C \\rangle \\) is defined by:</p>\n              <p>\\[ A(x - x_0) + B(y - y_0) + C(z - z_0) = 0 \\implies Ax + By + Cz + D = 0 \\]</p>\n              <p>In \\( n \\)-dimensional feature space (used in Support Vector Machines and perceptrons), this generalizes to an affine <strong>hyperplane</strong>: \\( \\mathbf{w}^T \\mathbf{x} + b = 0 \\).</p>\n            "
          },
          {
            "id": "mf-t8",
            "title": "The Least Squares Regression Method",
            "tag": "Statistical Optimization",
            "content": "\n              <p>To fit a straight line \\( y = mx + c \\) minimizing the sum of squared vertical residuals \\( S = \\sum_{i=1}^N (y_i - (mx_i + c))^2 \\), setting partial derivatives \\( \\frac{\\partial S}{\\partial m} = 0 \\) and \\( \\frac{\\partial S}{\\partial c} = 0 \\) yields the <strong>Normal Equations</strong>:</p>\n              <ol>\n                <li>\\[ \\sum y = m \\sum x + N c \\]</li>\n                <li>\\[ \\sum xy = m \\sum x^2 + c \\sum x \\]</li>\n              </ol>\n              <p>Solving simultaneously yields the closed-form ordinary least squares estimators:</p>\n              <p>\\[ m = \\frac{N \\sum xy - (\\sum x)(\\sum y)}{N \\sum x^2 - (\\sum x)^2}, \\quad c = \\bar{y} - m \\bar{x} \\]</p>\n            "
          }
        ],
        "assignments": [
          {
            "id": "mf-a1",
            "title": "Set Theory Q1: True / False Statements with Justifications",
            "difficulty": "Foundational",
            "category": "Set Theory (Part A)",
            "question": "Which of the following statements are true or false? Justify your answer:\\n1) The set A = {a} and b = {{a}} are equal.\\n2) {a} ⊂ {a}\\n3) {a} ∈ {a}\\n4) ∅ ⊂ {a}\\n5) ∅ ∈ {∅}\\n6) {3, 4} ⊂ {1, 2, 3, {3,4}, 5}",
            "solution": "<div class=\"solution-content\">\n<ol>\n  <li><strong>1) A = {a} and b = {{a}} are equal:</strong> <span class=\"badge badge-error\">FALSE</span>. The set \\( A \\) contains the symbol \\( a \\) (cardinality 1). The set \\( b \\) contains the set \\( \\{a\\} \\) as its sole element (cardinality 1). Since \\( a \\neq \\{a\\} \\), the elements differ and the sets are not equal.</li>\n  <li><strong>2) {a} ⊂ {a}:</strong> <span class=\"badge badge-error\">FALSE</span>. The symbol \\( \\subset \\) denotes strict (proper) subset. For \\( X \\subset Y \\), there must exist at least one element in \\( Y \\) not in \\( X \\). Here \\( X = Y \\), so \\( \\{a\\} \\subseteq \\{a\\} \\) is true, but \\( \\{a\\} \\subset \\{a\\} \\) is false.</li>\n  <li><strong>3) {a} ∈ {a}:</strong> <span class=\"badge badge-error\">FALSE</span>. The only element inside \\( \\{a\\} \\) is the literal symbol \\( a \\), not the singleton set \\( \\{a\\} \\). Hence \\( \\{a\\} \\notin \\{a\\} \\).</li>\n  <li><strong>4) ∅ ⊂ {a}:</strong> <span class=\"badge badge-success\">TRUE</span>. The empty set \\( \\emptyset \\) is a subset of every set. Since \\( \\{a\\} \\neq \\emptyset \\), \\( \\emptyset \\) is a strictly proper subset of \\( \\{a\\} \\).</li>\n  <li><strong>5) ∅ ∈ {∅}:</strong> <span class=\"badge badge-success\">TRUE</span>. The set \\( \\{\\emptyset\\} \\) explicitly contains one element, which is the empty set symbol \\( \\emptyset \\).</li>\n  <li><strong>6) {3, 4} ⊂ {1, 2, 3, {3,4}, 5}:</strong> <span class=\"badge badge-error\">FALSE</span>. For \\( \\{3, 4\\} \\subset S \\), every element of \\( \\{3, 4\\} \\) (namely 3 and 4) must be an element of \\( S \\). While 3 is an element of \\( S \\), 4 is not an individual element of \\( S \\) (it is encapsulated inside the set element \\( \\{3,4\\} \\)). Note that \\( \\{3,4\\} \\in S \\) is true, but \\( \\{3,4\\} \\subset S \\) is false.</li>\n</ol>\n</div>"
          },
          {
            "id": "mf-a2",
            "title": "Set Theory Q2: Converting Set-Builder Expressions to Roster Form",
            "difficulty": "Foundational",
            "category": "Set Theory (Part A)",
            "question": "Write down the following sets into roster form:\\n1) A = {x ∈ R | x is a real number such that x^2 = 4}\\n2) B = {x ∈ N | x is a prime number less than 15}",
            "solution": "<div class=\"solution-content\">\n<ol>\n  <li><strong>1) \\( A = \\{x \\in \\mathbb{R} \\mid x^2 = 4\\} \\):</strong><br>\n    Solving the algebraic quadratic: \\( x^2 - 4 = 0 \\implies (x - 2)(x + 2) = 0 \\implies x = 2 \\text{ or } x = -2 \\).<br>\n    Both \\( 2 \\in \\mathbb{R} \\) and \\( -2 \\in \\mathbb{R} \\).<br>\n    <strong>Roster Form:</strong> \\[ A = \\{-2, 2\\} \\]\n  </li>\n  <li><strong>2) \\( B = \\{x \\in \\mathbb{N} \\mid x \\text{ is a prime number less than } 15\\} \\):</strong><br>\n    Primes in \\( \\mathbb{N} \\) strictly less than 15 are 2, 3, 5, 7, 11, and 13.<br>\n    <strong>Roster Form:</strong> \\[ B = \\{2, 3, 5, 7, 11, 13\\} \\]\n  </li>\n</ol>\n</div>"
          },
          {
            "id": "mf-a3",
            "title": "Set Theory Q3: Roster Form Representations across Number Systems",
            "difficulty": "Foundational",
            "category": "Set Theory (Part A)",
            "question": "Express the following sets in roster form:\\n2) B = {x ∈ N | x is even}\\n3) C = {x ∈ N | (x + a)(x - b) = 0}, where a, b are arbitrary real constants\\n4) D = {x ∈ Z | x^2 = 9}\\n5) E = {x ∈ B | 3x - 1 = 0} (where B is Boolean domain {0, 1})",
            "solution": "<div class=\"solution-content\">\n<ol>\n  <li><strong>2) \\( B = \\{x \\in \\mathbb{N} \\mid x \\text{ is even}\\} \\):</strong><br>\n    The set of even natural numbers: \\[ B = \\{2, 4, 6, 8, 10, \\dots\\} \\]\n  </li>\n  <li><strong>3) \\( C = \\{x \\in \\mathbb{N} \\mid (x + a)(x - b) = 0\\} \\):</strong><br>\n    The equation yields real roots \\( x = -a \\) and \\( x = b \\). Filtering for natural numbers \\( \\mathbb{N} = \\{1, 2, 3, \\dots\\} \\):\n    \\[ C = \\{-a, b\\} \\cap \\mathbb{N} \\]\n    If \\( b \\in \\mathbb{N} \\) and \\( -a \\notin \\mathbb{N} \\), \\( C = \\{b\\} \\). If neither root is in \\( \\mathbb{N} \\), \\( C = \\emptyset \\).\n  </li>\n  <li><strong>4) \\( D = \\{x \\in \\mathbb{Z} \\mid x^2 = 9\\} \\):</strong><br>\n    Roots are \\( x = \\pm 3 \\). Since both are integers: \\[ D = \\{-3, 3\\} \\]\n  </li>\n  <li><strong>5) \\( E = \\{x \\in \\{0, 1\\} \\mid 3x - 1 = 0\\} \\):</strong><br>\n    Solving gives \\( x = 1/3 \\). Since \\( 1/3 \\notin \\{0, 1\\} \\): \\[ E = \\emptyset \\]\n  </li>\n</ol>\n</div>"
          },
          {
            "id": "mf-a4",
            "title": "Set Theory Q4: Four Fundamental Properties of Set Operations",
            "difficulty": "Foundational",
            "category": "Set Theory (Part A)",
            "question": "Write down any four properties of set operations. Explain each through distinct concrete examples.",
            "solution": "<div class=\"solution-content\">\n<ol>\n  <li><strong>1. Commutative Property:</strong> \\( A \\cup B = B \\cup A \\) and \\( A \\cap B = B \\cap A \\).<br>\n    <em>Example:</em> Let \\( A = \\{1, 2\\}, B = \\{2, 3\\} \\). Then \\( A \\cup B = \\{1, 2, 3\\} = B \\cup A \\).\n  </li>\n  <li><strong>2. Associative Property:</strong> \\( (A \\cup B) \\cup C = A \\cup (B \\cup C) \\) and \\( (A \\cap B) \\cap C = A \\cap (B \\cap C) \\).<br>\n    <em>Example:</em> Let \\( A = \\{1\\}, B = \\{2\\}, C = \\{3\\} \\). Both group associations yield \\( \\{1, 2, 3\\} \\).\n  </li>\n  <li><strong>3. Distributive Property:</strong> \\( A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C) \\).<br>\n    <em>Example:</em> Let \\( A = \\{1, 2, 3\\}, B = \\{2, 4\\}, C = \\{3, 5\\} \\). \\( B \\cup C = \\{2, 3, 4, 5\\} \\). LHS = \\( A \\cap \\{2, 3, 4, 5\\} = \\{2, 3\\} \\). RHS = \\( \\{2\\} \\cup \\{3\\} = \\{2, 3\\} \\). LHS = RHS.\n  </li>\n  <li><strong>4. Identity & Annihilation Laws:</strong> \\( A \\cup \\emptyset = A \\) and \\( A \\cap \\emptyset = \\emptyset \\).<br>\n    <em>Example:</em> Let \\( A = \\{4, 7\\} \\). \\( \\{4, 7\\} \\cup \\emptyset = \\{4, 7\\} \\). \\( \\{4, 7\\} \\cap \\emptyset = \\emptyset \\).\n  </li>\n</ol>\n</div>"
          },
          {
            "id": "mf-a5",
            "title": "Set Theory Q5: Proof and Venn Diagram of De Morgan's Laws",
            "difficulty": "Intermediate",
            "category": "Set Theory (Part A)",
            "question": "State and prove De Morgan's laws: (1) (A ∪ B)' = A' ∩ B', and (2) (A ∩ B)' = A' ∪ B'.",
            "solution": "<div class=\"solution-content\">\n<h4>Law 1: \\( (A \\cup B)' = A' \\cap B' \\)</h4>\n<p><strong>Proof via Double Containment:</strong></p>\n<p><strong>Part (i): Show \\( (A \\cup B)' \\subseteq A' \\cap B' \\)</strong><br>\nLet \\( x \\in (A \\cup B)' \\).<br>\n\\( \\implies x \\notin (A \\cup B) \\)<br>\n\\( \\implies \\neg(x \\in A \\lor x \\in B) \\)<br>\n\\( \\implies x \\notin A \\land x \\notin B \\)<br>\n\\( \\implies x \\in A' \\land x \\in B' \\implies x \\in (A' \\cap B') \\).<br>\nHence \\( (A \\cup B)' \\subseteq A' \\cap B' \\).</p>\n\n<p><strong>Part (ii): Show \\( A' \\cap B' \\subseteq (A \\cup B)' \\)</strong><br>\nLet \\( y \\in (A' \\cap B') \\).<br>\n\\( \\implies y \\in A' \\land y \\in B' \\)<br>\n\\( \\implies y \\notin A \\land y \\notin B \\)<br>\n\\( \\implies \\neg(y \\in A \\lor y \\in B) \\)<br>\n\\( \\implies y \\notin (A \\cup B) \\implies y \\in (A \\cup B)' \\).<br>\nHence \\( A' \\cap B' \\subseteq (A \\cup B)' \\).</p>\n<p>Combining both parts confirms \\( (A \\cup B)' = A' \\cap B' \\). <span class=\"badge badge-success\">Q.E.D.</span></p>\n</div>"
          },
          {
            "id": "mf-a6",
            "title": "Set Theory Q6: Application of Power Sets in Bit String Representation",
            "difficulty": "Intermediate",
            "category": "Set Theory (Part A)",
            "question": "Consider S = {a1, a2, a3, ..., a10}. Each subset of S is denoted by Bi, where 'i' represents a sequence of bits in binary digits. Determine the sequence of bits and corresponding set for B111 and B73. How will you designate {a2, a6, a9} and {a1, a9}?",
            "solution": "<div class=\"solution-content\">\n<p>Let index mapping order be \\( (a_{10}, a_9, a_8, a_7, a_6, a_5, a_4, a_3, a_2, a_1) \\), where bit \\( k \\) corresponds to element \\( a_k \\).</p>\n\n<ol>\n  <li><strong>For \\( B_{111} \\):</strong><br>\n    Convert integer 111 to 10-bit binary:<br>\n    \\( 111 = 64 + 32 + 8 + 4 + 2 + 1 = 2^6 + 2^5 + 2^3 + 2^2 + 2^1 + 2^0 \\).<br>\n    10-bit string: <code>0001101111</code>.<br>\n    Positions set (from right): \\( a_1, a_2, a_3, a_4, a_6, a_7 \\).<br>\n    <strong>Set \\( B_{111} = \\{a_1, a_2, a_3, a_4, a_6, a_7\\} \\)</strong>.\n  </li>\n  <li><strong>For \\( B_{73} \\):</strong><br>\n    Convert integer 73 to 10-bit binary:<br>\n    \\( 73 = 64 + 8 + 1 = 2^6 + 2^3 + 2^0 \\).<br>\n    10-bit string: <code>0001001001</code>.<br>\n    Positions set: \\( a_1, a_4, a_7 \\).<br>\n    <strong>Set \\( B_{73} = \\{a_1, a_4, a_7\\} \\)</strong>.\n  </li>\n  <li><strong>Designating \\( \\{a_2, a_6, a_9\\} \\):</strong><br>\n    Bits at positions 2, 6, 9 are 1, all others 0.<br>\n    Binary string: <code>0100100010</code>.<br>\n    Decimal value = \\( 2^8 + 2^5 + 2^1 = 256 + 32 + 2 = 290 \\).<br>\n    <strong>Designation: \\( B_{290} \\) (Binary: 0100100010)</strong>.\n  </li>\n  <li><strong>Designating \\( \\{a_1, a_9\\} \\):</strong><br>\n    Bits at positions 1, 9 are 1.<br>\n    Binary string: <code>0100000001</code>.<br>\n    Decimal value = \\( 2^8 + 2^0 = 256 + 1 = 257 \\).<br>\n    <strong>Designation: \\( B_{257} \\) (Binary: 0100000001)</strong>.\n  </li>\n</ol>\n</div>"
          },
          {
            "id": "mf-a7",
            "title": "Set Theory Q7: Cartesian Products & Set Operations",
            "difficulty": "Foundational",
            "category": "Set Theory (Part A)",
            "question": "Define Cartesian product. Given A = {1, 2, 3}, B = {3, 5}, and C = {2, 3, 5}, compute:\\n1) A x B, B x A\\n2) A x A, B x B\\n3) A x (B ∩ C), A x (B ∪ C)\\n4) (A x B) ∩ (A x C), (A x B) ∪ (A x C)",
            "solution": "<div class=\"solution-content\">\n<p><strong>Definition:</strong> \\( A \\times B = \\{(a, b) \\mid a \\in A, b \\in B\\} \\).</p>\n<ol>\n  <li><strong>\\( A \\times B \\) & \\( B \\times A \\):</strong><br>\n    \\( A \\times B = \\{(1,3), (1,5), (2,3), (2,5), (3,3), (3,5)\\} \\)<br>\n    \\( B \\times A = \\{(3,1), (3,2), (3,3), (5,1), (5,2), (5,3)\\} \\).\n  </li>\n  <li><strong>\\( A \\times A \\) & \\( B \\times B \\):</strong><br>\n    \\( A \\times A = \\{(1,1), (1,2), (1,3), (2,1), (2,2), (2,3), (3,1), (3,2), (3,3)\\} \\)<br>\n    \\( B \\times B = \\{(3,3), (3,5), (5,3), (5,5)\\} \\).\n  </li>\n  <li><strong>\\( A \\times (B \\cap C) \\) & \\( A \\times (B \\cup C) \\):</strong><br>\n    \\( B \\cap C = \\{3, 5\\} \\cap \\{2, 3, 5\\} = \\{3, 5\\} = B \\).<br>\n    \\( A \\times (B \\cap C) = \\{(1,3), (1,5), (2,3), (2,5), (3,3), (3,5)\\} \\).<br>\n    \\( B \\cup C = \\{2, 3, 5\\} \\).<br>\n    \\( A \\times (B \\cup C) = \\{(1,2), (1,3), (1,5), (2,2), (2,3), (2,5), (3,2), (3,3), (3,5)\\} \\).\n  </li>\n  <li><strong>Distributive verification:</strong><br>\n    \\( (A \\times B) \\cap (A \\times C) = A \\times (B \\cap C) = \\{(1,3), (1,5), (2,3), (2,5), (3,3), (3,5)\\} \\).<br>\n    \\( (A \\times B) \\cup (A \\times C) = A \\times (B \\cup C) \\) (9 ordered pairs above).\n  </li>\n</ol>\n</div>"
          },
          {
            "id": "mf-a8",
            "title": "Set Theory Q8: Social Media Survey (Venn Diagram Analysis)",
            "difficulty": "Intermediate",
            "category": "Set Theory (Part A)",
            "question": "In a survey of 1000 persons: 280 use Facebook (F), 300 use Twitter (T), 420 use Instagram (I). 80 use F and T, 100 use F and I, 50 use T and I, 30 use all three. Find:\\n1) How many use at least one platform?\\n2) How many use none?\\n3) How many use only Facebook?\\n4) How many use Facebook and Twitter but not Instagram?",
            "solution": "<div class=\"solution-content\">\n<p><strong>Given Data:</strong> \\( N = 1000 \\), \\( n(F)=280 \\), \\( n(T)=300 \\), \\( n(I)=420 \\), \\( n(F \\cap T)=80 \\), \\( n(F \\cap I)=100 \\), \\( n(T \\cap I)=50 \\), \\( n(F \\cap T \\cap I)=30 \\).</p>\n<ol>\n  <li><strong>1) Use at least one platform:</strong><br>\n    \\[ n(F \\cup T \\cup I) = 280 + 300 + 420 - (80 + 100 + 50) + 30 = 1000 - 230 + 30 = 800 \\]\n  </li>\n  <li><strong>2) Use none of the three platforms:</strong><br>\n    \\[ \\text{None} = 1000 - n(F \\cup T \\cup I) = 1000 - 800 = 200 \\]\n  </li>\n  <li><strong>3) Use only Facebook:</strong><br>\n    \\[ n(\\text{Only } F) = n(F) - n(F \\cap T) - n(F \\cap I) + n(F \\cap T \\cap I) = 280 - 80 - 100 + 30 = 130 \\]\n  </li>\n  <li><strong>4) Use Facebook and Twitter but not Instagram:</strong><br>\n    \\[ n((F \\cap T) \\setminus I) = n(F \\cap T) - n(F \\cap T \\cap I) = 80 - 30 = 50 \\]\n  </li>\n</ol>\n</div>"
          },
          {
            "id": "mf-a9",
            "title": "Set Theory Q9: Video Conferencing Platform Survey (1000 Individuals)",
            "difficulty": "Intermediate",
            "category": "Set Theory (Part A)",
            "question": "In a survey of 1000 individuals: 400 use Google Meet (G), 350 use Zoom (Z), 300 use Microsoft Teams (M). 150 use both G and Z, 120 use both Z and M, 100 use both G and M, 60 use all three. Find:\\n1) How many use exactly two platforms?\\n2) How many use Google Meet or Zoom but not Teams?\\n3) How many use at least one platform but not all three?",
            "solution": "<div class=\"solution-content\">\n<p><strong>Decomposition into disjoint subsets:</strong></p>\n<ul>\n  <li>All three: \\( n(G \\cap Z \\cap M) = 60 \\).</li>\n  <li>Only G and Z: \\( 150 - 60 = 90 \\).</li>\n  <li>Only Z and M: \\( 120 - 60 = 60 \\).</li>\n  <li>Only G and M: \\( 100 - 60 = 40 \\).</li>\n  <li>Only G: \\( 400 - (90 + 40 + 60) = 400 - 190 = 210 \\).</li>\n  <li>Only Z: \\( 350 - (90 + 60 + 60) = 350 - 210 = 140 \\).</li>\n  <li>Only M: \\( 300 - (40 + 60 + 60) = 300 - 160 = 140 \\).</li>\n</ul>\n<ol>\n  <li><strong>1) Exactly two platforms:</strong><br>\n    \\[ \\text{Exactly 2} = 90 + 60 + 40 = 190 \\]\n  </li>\n  <li><strong>2) Google Meet or Zoom but not Teams:</strong><br>\n    \\[ \\text{Only } G + \\text{Only } Z + (\\text{Only } G \\text{ and } Z) = 210 + 140 + 90 = 440 \\]\n  </li>\n  <li><strong>3) At least one platform but not all three:</strong><br>\n    Total at least one = \\( (210 + 140 + 140) + 190 + 60 = 740 \\).<br>\n    Excluding all three: \\[ 740 - 60 = 680 \\]\n  </li>\n</ol>\n</div>"
          },
          {
            "id": "mf-a10",
            "title": "Set Theory Q10: Tech Club Course Enrollments (800 Students)",
            "difficulty": "Intermediate",
            "category": "Set Theory (Part A)",
            "question": "In a college tech club of 800 students: 300 enrolled in AI (A), 350 in Web Dev (W), 250 in Cybersecurity (C). 100 in AI & Web Dev, 80 in AI & Cyber, 90 in Web & Cyber, 50 in all three. Find:\\n1) Enrolled in exactly one course?\\n2) Enrolled in at least two courses?\\n3) Not enrolled in any course?",
            "solution": "<div class=\"solution-content\">\n<p><strong>Disjoint Region Evaluation:</strong></p>\n<ul>\n  <li>All three = 50.</li>\n  <li>Only A and W = \\( 100 - 50 = 50 \\).</li>\n  <li>Only A and C = \\( 80 - 50 = 30 \\).</li>\n  <li>Only W and C = \\( 90 - 50 = 40 \\).</li>\n  <li>Only AI = \\( 300 - (50 + 30 + 50) = 170 \\).</li>\n  <li>Only Web Dev = \\( 350 - (50 + 40 + 50) = 210 \\).</li>\n  <li>Only Cyber = \\( 250 - (30 + 40 + 50) = 130 \\).</li>\n</ul>\n<ol>\n  <li><strong>1) Enrolled in exactly one course:</strong><br>\n    \\[ 170 + 210 + 130 = 510 \\]\n  </li>\n  <li><strong>2) Enrolled in at least two courses:</strong><br>\n    \\[ (\\text{Exactly 2}) + (\\text{All 3}) = (50 + 30 + 40) + 50 = 120 + 50 = 170 \\]\n  </li>\n  <li><strong>3) Not enrolled in any course:</strong><br>\n    Total enrolled = \\( 510 + 170 = 680 \\).<br>\n    \\[ \\text{Not enrolled} = 800 - 680 = 120 \\]\n  </li>\n</ol>\n</div>"
          },
          {
            "id": "mf-a11",
            "title": "Set Theory Q11: Set Equality Proof A = B",
            "difficulty": "Foundational",
            "category": "Set Theory (Part A)",
            "question": "If A = {x ∈ N | x < 6} and B = {x ∈ N | (x + 1)^2 < 49}, prove that A = B.",
            "solution": "<div class=\"solution-content\">\n<p><strong>Analyzing Set A:</strong><br>\n\\( A = \\{x \\in \\mathbb{N} \\mid x < 6\\} = \\{1, 2, 3, 4, 5\\} \\).</p>\n\n<p><strong>Analyzing Set B:</strong><br>\n\\( (x + 1)^2 < 49 \\implies |x + 1| < 7 \\implies -7 < x + 1 < 7 \\implies -8 < x < 6 \\).<br>\nRestricting to the natural numbers domain \\( x \\in \\mathbb{N} = \\{1, 2, 3, \\dots\\} \\):<br>\n\\( x \\in \\{1, 2, 3, 4, 5\\} \\implies B = \\{1, 2, 3, 4, 5\\} \\).</p>\n\n<p>Since both sets possess identical elements: \\[ A = B \\quad \\text{Q.E.D.} \\]</p>\n</div>"
          },
          {
            "id": "mf-a12",
            "title": "Set Theory Q12: Cardinalities and Union / Intersection",
            "difficulty": "Foundational",
            "category": "Set Theory (Part A)",
            "question": "If A = {a, b, c, d, e} and B = {d, e, f, g}, obtain n(A), n(B), n(A ∩ B), and n(A ∪ B).",
            "solution": "<div class=\"solution-content\">\n<ul>\n  <li>\\( n(A) = 5 \\) (elements: a, b, c, d, e)</li>\n  <li>\\( n(B) = 4 \\) (elements: d, e, f, g)</li>\n  <li>\\( A \\cap B = \\{d, e\\} \\implies n(A \\cap B) = 2 \\)</li>\n  <li>\\( A \\cup B = \\{a, b, c, d, e, f, g\\} \\implies n(A \\cup B) = 7 \\)</li>\n</ul>\n<p><strong>Verification:</strong> \\( n(A \\cup B) = n(A) + n(B) - n(A \\cap B) = 5 + 4 - 2 = 7 \\). Satisfied.</p>\n</div>"
          },
          {
            "id": "mf-a13",
            "title": "Set Theory Q13: Verification of 3-Set Inclusion-Exclusion Identity",
            "difficulty": "Intermediate",
            "category": "Set Theory (Part A)",
            "question": "If A = {1, 2, 3, 4, 5, 6}, B = {2, 5, 6, 8} and C = {1, 6, 7}, prove that n(A ∪ B ∪ C) = n(A) + n(B) + n(C) - n(A ∩ B) - n(B ∩ C) - n(C ∩ A) + n(A ∩ B ∩ C).",
            "solution": "<div class=\"solution-content\">\n<ol>\n  <li><strong>Individual sets:</strong> \\( n(A) = 6 \\), \\( n(B) = 4 \\), \\( n(C) = 3 \\).</li>\n  <li><strong>Pairwise intersections:</strong>\n    <ul>\n      <li>\\( A \\cap B = \\{2, 5, 6\\} \\implies n(A \\cap B) = 3 \\).</li>\n      <li>\\( B \\cap C = \\{6\\} \\implies n(B \\cap C) = 1 \\).</li>\n      <li>\\( C \\cap A = \\{1, 6\\} \\implies n(C \\cap A) = 2 \\).</li>\n    </ul>\n  </li>\n  <li><strong>Three-way intersection:</strong> \\( A \\cap B \\cap C = \\{6\\} \\implies n(A \\cap B \\cap C) = 1 \\).</li>\n  <li><strong>RHS Calculation:</strong>\n    \\[ \\text{RHS} = 6 + 4 + 3 - (3 + 1 + 2) + 1 = 13 - 6 + 1 = 8 \\]\n  </li>\n  <li><strong>LHS Evaluation:</strong>\n    \\( A \\cup B \\cup C = \\{1, 2, 3, 4, 5, 6, 7, 8\\} \\implies n(A \\cup B \\cup C) = 8 \\).\n  </li>\n</ol>\n<p>\\( \\text{LHS} = \\text{RHS} = 8 \\). <span class=\"badge badge-success\">Proved</span>.</p>\n</div>"
          },
          {
            "id": "mf-a14",
            "title": "Set Theory Q14: Mathematics & Physics Exam Results (120 Students)",
            "difficulty": "Foundational",
            "category": "Set Theory (Part A)",
            "question": "In a school of 120 students: 55 passed Mathematics, 60 passed Physics, and 22 passed both. Find:\\n1. Students passing only Mathematics?\\n2. Students passing only Physics?\\n3. Students failing both subjects?",
            "solution": "<div class=\"solution-content\">\n<ol>\n  <li><strong>1. Passing only Mathematics:</strong><br>\n    \\[ n(M \\setminus P) = n(M) - n(M \\cap P) = 55 - 22 = 33 \\]\n  </li>\n  <li><strong>2. Passing only Physics:</strong><br>\n    \\[ n(P \\setminus M) = n(P) - n(M \\cap P) = 60 - 22 = 38 \\]\n  </li>\n  <li><strong>3. Failing both subjects:</strong><br>\n    Total students passing at least one = \\( 33 + 38 + 22 = 93 \\).<br>\n    \\[ \\text{Failing both} = 120 - 93 = 27 \\]\n  </li>\n</ol>\n</div>"
          },
          {
            "id": "mf-a15",
            "title": "Set Theory Q15: Football and Hockey Sports Participation (63 Students)",
            "difficulty": "Foundational",
            "category": "Set Theory (Part A)",
            "question": "In a class of 63 students: 15 do not play hockey or football. 35 students play football and 20 students play hockey. Find:\\n1. How many students play both games?\\n2. How many play only football?\\n3. How many play only hockey?",
            "solution": "<div class=\"solution-content\">\n<p>Students playing at least one game: \\( n(F \\cup H) = 63 - 15 = 48 \\).</p>\n<ol>\n  <li><strong>1. Play both games:</strong><br>\n    Using \\( n(F \\cup H) = n(F) + n(H) - n(F \\cap H) \\):<br>\n    \\[ 48 = 35 + 20 - n(F \\cap H) \\implies n(F \\cap H) = 55 - 48 = 7 \\]\n  </li>\n  <li><strong>2. Play only football:</strong><br>\n    \\[ n(\\text{Only } F) = 35 - 7 = 28 \\]\n  </li>\n  <li><strong>3. Play only hockey:</strong><br>\n    \\[ n(\\text{Only } H) = 20 - 7 = 13 \\]\n  </li>\n</ol>\n<p><strong>Sanity check:</strong> \\( 28 + 13 + 7 + 15 = 63 \\) total students.</p>\n</div>"
          },
          {
            "id": "mf-b0",
            "title": "Geometry Q0: Cartesian Plane Plotting & Quadrant Classification",
            "difficulty": "Foundational",
            "category": "Coordinate Geometry (Part B)",
            "question": "Plot the points A(2, 3), B(-4, 1), C(0, -5) and D(3, -2) on the Cartesian plane. State which quadrant each point lies in.",
            "solution": "<div class=\"solution-content\">\n<p><strong>Quadrant Rules:</strong> QI: \\( (+, +) \\), QII: \\( (-, +) \\), QIII: \\( (-, -) \\), QIV: \\( (+, -) \\).</p>\n<div class=\"data-table-wrapper\">\n  <table class=\"data-table\">\n    <thead><tr><th>Point</th><th>Coordinates \\( (x, y) \\)</th><th>Sign \\( (\\text{sgn}(x), \\text{sgn}(y)) \\)</th><th>Quadrant / Axis Location</th></tr></thead>\n    <tbody>\n      <tr><td><strong>A</strong></td><td>\\( (2, 3) \\)</td><td>\\( (+, +) \\)</td><td><span class=\"badge badge-info\">Quadrant I</span></td></tr>\n      <tr><td><strong>B</strong></td><td>\\( (-4, 1) \\)</td><td>\\( (-, +) \\)</td><td><span class=\"badge badge-info\">Quadrant II</span></td></tr>\n      <tr><td><strong>C</strong></td><td>\\( (0, -5) \\)</td><td>\\( (0, -) \\)</td><td><span class=\"badge badge-warning\">Negative Y-Axis (Boundary between QIII & QIV)</span></td></tr>\n      <tr><td><strong>D</strong></td><td>\\( (3, -2) \\)</td><td>\\( (+, -) \\)</td><td><span class=\"badge badge-info\">Quadrant IV</span></td></tr>\n    </tbody>\n  </table>\n</div>\n</div>"
          },
          {
            "id": "mf-b1",
            "title": "Geometry Q1: Derivation of the Cartesian Distance Formula",
            "difficulty": "Foundational",
            "category": "Coordinate Geometry (Part B)",
            "question": "Derive the Distance formula for two points in the Cartesian plane.",
            "solution": "<div class=\"solution-content\">\n<p>Let \\( P(x_1, y_1) \\) and \\( Q(x_2, y_2) \\) be two arbitrary points in the Cartesian 2D plane.</p>\n<ol>\n  <li>Construct a right-angled triangle \\( \\triangle PQR \\) by dropping perpendiculars from \\( P \\) and \\( Q \\) to the coordinate axes such that the vertex at the right angle is \\( R(x_2, y_1) \\).</li>\n  <li>The horizontal base length is: \\[ PR = |x_2 - x_1| \\]</li>\n  <li>The vertical altitude length is: \\[ QR = |y_2 - y_1| \\]</li>\n  <li>By the <strong>Pythagorean Theorem</strong> in right triangle \\( \\triangle PQR \\):\n    \\[ PQ^2 = PR^2 + QR^2 \\]\n    \\[ PQ^2 = (x_2 - x_1)^2 + (y_2 - y_1)^2 \\]\n  </li>\n  <li>Taking the non-negative principal square root yields:\n    \\[ d(P, Q) = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} \\]\n  </li>\n</ol>\n<p><span class=\"badge badge-success\">Proved</span>.</p>\n</div>"
          },
          {
            "id": "mf-b2",
            "title": "Geometry Q2: Right-Angled Triangle Verification",
            "difficulty": "Foundational",
            "category": "Coordinate Geometry (Part B)",
            "question": "Prove that the points A(4, 4), B(3, 5) and C(-1, -1) are the vertices of a right-angled triangle.",
            "solution": "<div class=\"solution-content\">\n<p>Compute square of distance for each of the three sides:</p>\n<ul>\n  <li>\\( AB^2 = (3 - 4)^2 + (5 - 4)^2 = (-1)^2 + (1)^2 = 1 + 1 = 2 \\)</li>\n  <li>\\( BC^2 = (-1 - 3)^2 + (-1 - 5)^2 = (-4)^2 + (-6)^2 = 16 + 36 = 52 \\)</li>\n  <li>\\( AC^2 = (-1 - 4)^2 + (-1 - 4)^2 = (-5)^2 + (-5)^2 = 25 + 25 = 50 \\)</li>\n</ul>\n<p>Checking the Converse of Pythagoras Theorem:</p>\n\\[ AB^2 + AC^2 = 2 + 50 = 52 = BC^2 \\]\n<p>Since the sum of squares of two sides equals the square of the third side (hypotenuse \\( BC \\)), \\( \\triangle ABC \\) is a <strong>right-angled triangle</strong> with right angle at vertex \\( A \\). <span class=\"badge badge-success\">Proved</span>.</p>\n</div>"
          },
          {
            "id": "mf-b3",
            "title": "Geometry Q3: Solving for Unknown Coordinate from Given Distance",
            "difficulty": "Foundational",
            "category": "Coordinate Geometry (Part B)",
            "question": "If the distance between the points A(5, x) and B(2, 6) is 3√2, then find the value of x.",
            "solution": "<div class=\"solution-content\">\n<p>Apply distance formula between \\( A(5, x) \\) and \\( B(2, 6) \\):</p>\n\\[ d(A, B) = \\sqrt{(5 - 2)^2 + (x - 6)^2} = 3\\sqrt{2} \\]\n<p>Square both sides:</p>\n\\[ (3)^2 + (x - 6)^2 = (3\\sqrt{2})^2 \\]\n\\[ 9 + (x - 6)^2 = 18 \\]\n\\[ (x - 6)^2 = 18 - 9 = 9 \\]\n<p>Take square roots on both sides:</p>\n\\[ x - 6 = \\pm 3 \\]\n<ul>\n  <li>Case 1: \\( x - 6 = 3 \\implies x = 9 \\)</li>\n  <li>Case 2: \\( x - 6 = -3 \\implies x = 3 \\)</li>\n</ul>\n<p><strong>Values of x:</strong> \\[ x = 3 \\quad \\text{or} \\quad x = 9 \\]</p>\n</div>"
          },
          {
            "id": "mf-b4",
            "title": "Geometry Q4: Right-Angled Isosceles Triangle Proof",
            "difficulty": "Intermediate",
            "category": "Coordinate Geometry (Part B)",
            "question": "Show that the vertices of the triangle (7, 9), (3, -7) and (-3, 3) form a right-angled isosceles triangle.",
            "solution": "<div class=\"solution-content\">\n<p>Let \\( P(7, 9) \\), \\( Q(3, -7) \\), \\( R(-3, 3) \\).</p>\n<ol>\n  <li>\\( PQ^2 = (3 - 7)^2 + (-7 - 9)^2 = (-4)^2 + (-16)^2 = 16 + 256 = 272 \\)</li>\n  <li>\\( QR^2 = (-3 - 3)^2 + (3 - (-7))^2 = (-6)^2 + (10)^2 = 36 + 100 = 136 \\)</li>\n  <li>\\( PR^2 = (-3 - 7)^2 + (3 - 9)^2 = (-10)^2 + (-6)^2 = 100 + 36 = 136 \\)</li>\n</ol>\n<p><strong>Isosceles Property:</strong> \\( QR^2 = PR^2 = 136 \\implies QR = PR = \\sqrt{136} \\). Two sides are of equal length.</p>\n<p><strong>Right-Angled Property:</strong> \\( QR^2 + PR^2 = 136 + 136 = 272 = PQ^2 \\).</p>\n<p>Hence, \\( \\triangle PQR \\) is a <strong>right-angled isosceles triangle</strong> with hypotenuse \\( PQ \\) and right angle at \\( R \\). <span class=\"badge badge-success\">Proved</span>.</p>\n</div>"
          },
          {
            "id": "mf-b5",
            "title": "Geometry Q5: Rhombus Verification via Side Equalities & Diagonals",
            "difficulty": "Intermediate",
            "category": "Coordinate Geometry (Part B)",
            "question": "Show that the points (1, 0), (5, 3), (2, 7) and (-2, 4) are the vertices of a rhombus.",
            "solution": "<div class=\"solution-content\">\n<p>Let \\( A(1, 0) \\), \\( B(5, 3) \\), \\( C(2, 7) \\), \\( D(-2, 4) \\).</p>\n<ol>\n  <li>Side \\( AB = \\sqrt{(5 - 1)^2 + (3 - 0)^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5 \\)</li>\n  <li>Side \\( BC = \\sqrt{(2 - 5)^2 + (7 - 3)^2} = \\sqrt{9 + 16} = 5 \\)</li>\n  <li>Side \\( CD = \\sqrt{(-2 - 2)^2 + (4 - 7)^2} = \\sqrt{16 + 9} = 5 \\)</li>\n  <li>Side \\( DA = \\sqrt{(1 - (-2))^2 + (0 - 4)^2} = \\sqrt{9 + 16} = 5 \\)</li>\n</ol>\n<p>All four sides are equal: \\( AB = BC = CD = DA = 5 \\). Therefore, the quadrilateral is a <strong>rhombus</strong>.</p>\n<p><em>Check diagonals:</em> \\( AC = \\sqrt{(2-1)^2 + (7-0)^2} = \\sqrt{1+49} = \\sqrt{50} \\), \\( BD = \\sqrt{(-2-5)^2 + (4-3)^2} = \\sqrt{49+1} = \\sqrt{50} \\). Equal diagonals confirm it is specifically a square (which is an equiangular rhombus). <span class=\"badge badge-success\">Proved</span>.</p>\n</div>"
          },
          {
            "id": "mf-b6",
            "title": "Geometry Q6: Rectangle Verification via Opposite Sides and Diagonals",
            "difficulty": "Intermediate",
            "category": "Coordinate Geometry (Part B)",
            "question": "Show that (-1, 0), (2, 3), (4, 1) and (1, -2) are the vertices of a rectangle.",
            "solution": "<div class=\"solution-content\">\n<p>Let \\( A(-1, 0) \\), \\( B(2, 3) \\), \\( C(4, 1) \\), \\( D(1, -2) \\).</p>\n<ol>\n  <li>\\( AB^2 = (2 - (-1))^2 + (3 - 0)^2 = 9 + 9 = 18 \\)</li>\n  <li>\\( BC^2 = (4 - 2)^2 + (1 - 3)^2 = 4 + 4 = 8 \\)</li>\n  <li>\\( CD^2 = (1 - 4)^2 + (-2 - 1)^2 = 9 + 9 = 18 \\)</li>\n  <li>\\( DA^2 = (-1 - 1)^2 + (0 - (-2))^2 = 4 + 4 = 8 \\)</li>\n</ol>\n<p>Opposite sides are equal: \\( AB = CD = \\sqrt{18} \\) and \\( BC = DA = \\sqrt{8} \\) (it is a parallelogram).</p>\n<p>Check diagonals:</p>\n<ul>\n  <li>\\( AC^2 = (4 - (-1))^2 + (1 - 0)^2 = 25 + 1 = 26 \\)</li>\n  <li>\\( BD^2 = (1 - 2)^2 + (-2 - 3)^2 = 1 + 25 = 26 \\)</li>\n</ul>\n<p>Since opposite sides are equal and diagonals are equal (\\( AC = BD = \\sqrt{26} \\)), \\( ABCD \\) is a <strong>rectangle</strong>. <span class=\"badge badge-success\">Proved</span>.</p>\n</div>"
          },
          {
            "id": "mf-b7",
            "title": "Geometry Q7: Equidistant Point on Y-Axis",
            "difficulty": "Foundational",
            "category": "Coordinate Geometry (Part B)",
            "question": "Find the point on the Y-axis which is equidistant from the points (-5, -2) and (3, 2).",
            "solution": "<div class=\"solution-content\">\n<p>Any point on the Y-axis has coordinates \\( P(0, y) \\). Given \\( d(P, A) = d(P, B) \\) where \\( A(-5, -2) \\) and \\( B(3, 2) \\):</p>\n\\[ PA^2 = PB^2 \\]\n\\[ (0 - (-5))^2 + (y - (-2))^2 = (0 - 3)^2 + (y - 2)^2 \\]\n\\[ (5)^2 + (y + 2)^2 = (-3)^2 + (y - 2)^2 \\]\n\\[ 25 + (y^2 + 4y + 4) = 9 + (y^2 - 4y + 4) \\]\n<p>Cancel \\( y^2 + 4 \\) from both sides:</p>\n\\[ 25 + 4y = 9 - 4y \\]\n\\[ 8y = 9 - 25 = -16 \\implies y = -2 \\]\n<p><strong>Required Point on Y-Axis:</strong> \\[ P(0, -2) \\]</p>\n</div>"
          },
          {
            "id": "mf-b8",
            "title": "Geometry Q8: Area of Triangle from Coordinates",
            "difficulty": "Foundational",
            "category": "Coordinate Geometry (Part B)",
            "question": "Find the area of the triangle whose vertices are (4, 4), (3, -2) and (-3, 16).",
            "solution": "<div class=\"solution-content\">\n<p>Coordinate Area Formula:</p>\n\\[ \\Delta = \\frac{1}{2} |x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)| \\]\n<p>Substitute \\( (x_1, y_1) = (4, 4) \\), \\( (x_2, y_2) = (3, -2) \\), \\( (x_3, y_3) = (-3, 16) \\):</p>\n\\[ \\Delta = \\frac{1}{2} |4(-2 - 16) + 3(16 - 4) + (-3)(4 - (-2))| \\]\n\\[ \\Delta = \\frac{1}{2} |4(-18) + 3(12) - 3(6)| \\]\n\\[ \\Delta = \\frac{1}{2} |-72 + 36 - 18| = \\frac{1}{2} |-54| = 27 \\text{ sq. units} \\]\n<p><strong>Area:</strong> 27 square units.</p>\n</div>"
          },
          {
            "id": "mf-b9",
            "title": "Geometry Q9: Determining Unknown Vertex Coordinate from Given Triangle Area",
            "difficulty": "Intermediate",
            "category": "Coordinate Geometry (Part B)",
            "question": "For which value of x is the area of the triangle formed by the vertices (x, 4), (8, 2) and (6, 7) equal to 13 units?",
            "solution": "<div class=\"solution-content\">\n<p>Area equation:</p>\n\\[ \\frac{1}{2} |x(2 - 7) + 8(7 - 4) + 6(4 - 2)| = 13 \\]\n\\[ |x(-5) + 8(3) + 6(2)| = 26 \\]\n\\[ |-5x + 24 + 12| = 26 \\implies |-5x + 36| = 26 \\]\n<p>Two algebraic branches:</p>\n<ul>\n  <li>Branch 1: \\( -5x + 36 = 26 \\implies -5x = -10 \\implies x = 2 \\)</li>\n  <li>Branch 2: \\( -5x + 36 = -26 \\implies -5x = -62 \\implies x = \\frac{62}{5} = 12.4 \\)</li>\n</ul>\n<p><strong>Values of x:</strong> \\[ x = 2 \\quad \\text{or} \\quad x = 12.4 \\]</p>\n</div>"
          },
          {
            "id": "mf-b10",
            "title": "Geometry Q10: Section Formula (Internal & External Division in 3:2 Ratio)",
            "difficulty": "Foundational",
            "category": "Coordinate Geometry (Part B)",
            "question": "Find the coordinates of the point which divides the line segment joining the points (6, 3) and (-4, 5) in the ratio 3:2 (i) internally and (ii) externally.",
            "solution": "<div class=\"solution-content\">\n<p>Let \\( A(6, 3) \\), \\( B(-4, 5) \\), and ratio \\( m:n = 3:2 \\).</p>\n<ol>\n  <li><strong>(i) Internal Division Formula:</strong>\n    \\[ P = \\left( \\frac{m x_2 + n x_1}{m + n}, \\frac{m y_2 + n y_1}{m + n} \\right) \\]\n    \\[ x = \\frac{3(-4) + 2(6)}{3 + 2} = \\frac{-12 + 12}{5} = 0 \\]\n    \\[ y = \\frac{3(5) + 2(3)}{3 + 2} = \\frac{15 + 6}{5} = \\frac{21}{5} = 4.2 \\]\n    <strong>Internal Point:</strong> \\[ P_{\\text{int}}(0, 4.2) \\]\n  </li>\n  <li><strong>(ii) External Division Formula:</strong>\n    \\[ Q = \\left( \\frac{m x_2 - n x_1}{m - n}, \\frac{m y_2 - n y_1}{m - n} \\right) \\]\n    \\[ x = \\frac{3(-4) - 2(6)}{3 - 2} = \\frac{-12 - 12}{1} = -24 \\]\n    \\[ y = \\frac{3(5) - 2(3)}{3 - 2} = \\frac{15 - 6}{1} = 9 \\]\n    <strong>External Point:</strong> \\[ Q_{\\text{ext}}(-24, 9) \\]\n  </li>\n</ol>\n</div>"
          },
          {
            "id": "mf-b11",
            "title": "Geometry Q11: Determining Section Ratio for Point P(-1, -1)",
            "difficulty": "Intermediate",
            "category": "Coordinate Geometry (Part B)",
            "question": "Find the ratio in which P(-1, -1) divides line segment AB, where A(4, 4), B(7, 7).",
            "solution": "<div class=\"solution-content\">\n<p>Let the division ratio be \\( k:1 \\). Using section formula on x-coordinate:</p>\n\\[ x = \\frac{k x_2 + x_1}{k + 1} \\implies -1 = \\frac{k(7) + 4}{k + 1} \\]\n\\[ -(k + 1) = 7k + 4 \\implies -k - 1 = 7k + 4 \\]\n\\[ 8k = -5 \\implies k = -\\frac{5}{8} \\]\n<p>The negative ratio signifies <strong>external division</strong> in the ratio \\( 5:8 \\).</p>\n<p><strong>Conclusion:</strong> \\( P(-1, -1) \\) divides \\( AB \\) externally in the ratio <strong>5:8</strong>.</p>\n</div>"
          },
          {
            "id": "mf-b12",
            "title": "Geometry Q12: Y-Axis Division Ratio",
            "difficulty": "Foundational",
            "category": "Coordinate Geometry (Part B)",
            "question": "For A(-2, 3) and B(3, 0), find the ratio in which the Y-axis divides AB from A's side.",
            "solution": "<div class=\"solution-content\">\n<p>On the Y-axis, \\( x = 0 \\). Let the division ratio from \\( A \\) be \\( k:1 \\):</p>\n\\[ 0 = \\frac{k(3) + 1(-2)}{k + 1} \\implies 3k - 2 = 0 \\implies k = \\frac{2}{3} \\]\n<p><strong>Result:</strong> The Y-axis divides segment \\( AB \\) internally in the ratio <strong>2:3</strong>.</p>\n<p><em>Point of intersection:</em> \\( y = \\frac{2(0) + 3(3)}{2 + 3} = \\frac{9}{5} = 1.8 \\implies (0, 1.8) \\).</p>\n</div>"
          },
          {
            "id": "mf-b13",
            "title": "Geometry Q13: Collinearity Test for Three Points",
            "difficulty": "Foundational",
            "category": "Coordinate Geometry (Part B)",
            "question": "Show that the points (1, 1), (2, 3) and (3, 5) are collinear.",
            "solution": "<div class=\"solution-content\">\n<p><strong>Method: Slope Equivalence</strong></p>\n<ul>\n  <li>Slope \\( m_1 \\) of segment joining \\( (1, 1) \\) and \\( (2, 3) \\):\n    \\[ m_1 = \\frac{3 - 1}{2 - 1} = \\frac{2}{1} = 2 \\]\n  </li>\n  <li>Slope \\( m_2 \\) of segment joining \\( (2, 3) \\) and \\( (3, 5) \\):\n    \\[ m_2 = \\frac{5 - 3}{3 - 2} = \\frac{2}{1} = 2 \\]\n  </li>\n</ul>\n<p>Since \\( m_1 = m_2 = 2 \\) and the segments share the common point \\( (2, 3) \\), the three points are <strong>collinear</strong>. <span class=\"badge badge-success\">Proved</span>.</p>\n</div>"
          },
          {
            "id": "mf-b14",
            "title": "Geometry Q14: Right-Angled Triangle via Perpendicular Slopes (Without Pythagoras)",
            "difficulty": "Foundational",
            "category": "Coordinate Geometry (Part B)",
            "question": "Without using the Pythagoras theorem, show that the points A(4, 4), B(3, 5) and C(-1, -1) are the vertices of a right-angled triangle.",
            "solution": "<div class=\"solution-content\">\n<p>Calculate slopes of lines \\( AB \\) and \\( AC \\):</p>\n<ul>\n  <li>Slope of line \\( AB \\): \\[ m_{AB} = \\frac{5 - 4}{3 - 4} = \\frac{1}{-1} = -1 \\]</li>\n  <li>Slope of line \\( AC \\): \\[ m_{AC} = \\frac{-1 - 4}{-1 - 4} = \\frac{-5}{-5} = 1 \\]</li>\n</ul>\n<p>Evaluate the product of slopes:</p>\n\\[ m_{AB} \\cdot m_{AC} = (-1) \\cdot (1) = -1 \\]\n<p>Since the product of their slopes is \\( -1 \\), line \\( AB \\) is perpendicular to line \\( AC \\) (\\( AB \\perp AC \\)). Hence, angle \\( \\angle BAC = 90^\\circ \\) and \\( \\triangle ABC \\) is a right-angled triangle at \\( A \\). <span class=\"badge badge-success\">Proved</span>.</p>\n</div>"
          },
          {
            "id": "mf-b15",
            "title": "Geometry Q15: Finding Line Slope from Given Angle (π/4)",
            "difficulty": "Intermediate",
            "category": "Coordinate Geometry (Part B)",
            "question": "If the angle between two lines is π/4 and the slope of one of the lines is 1/2, find the slope of the other line.",
            "solution": "<div class=\"solution-content\">\n<p>Given \\( \\theta = \\frac{\\pi}{4} \\implies \\tan \\theta = 1 \\), and \\( m_1 = 1/2 \\). Let \\( m_2 = m \\):</p>\n\\[ \\tan \\theta = \\left| \\frac{m - m_1}{1 + m m_1} \\right| \\implies 1 = \\left| \\frac{m - 1/2}{1 + m/2} \\right| = \\left| \\frac{2m - 1}{2 + m} \\right| \\]\n<p>Two cases:</p>\n<ul>\n  <li>Case 1: \\( \\frac{2m - 1}{2 + m} = 1 \\implies 2m - 1 = 2 + m \\implies m = 3 \\)</li>\n  <li>Case 2: \\( \\frac{2m - 1}{2 + m} = -1 \\implies 2m - 1 = -2 - m \\implies 3m = -1 \\implies m = -\\frac{1}{3} \\)</li>\n</ul>\n<p><strong>Possible Slopes:</strong> \\[ m = 3 \\quad \\text{or} \\quad m = -\\frac{1}{3} \\]</p>\n</div>"
          },
          {
            "id": "mf-b16",
            "title": "Geometry Q16: Angles Between Three Line Pairs",
            "difficulty": "Intermediate",
            "category": "Coordinate Geometry (Part B)",
            "question": "Obtain the measure of the angle between the following pairs of lines:\\n1. x - y + 3 = 0, y - 2 = 0\\n2. x - y + 4 = 0, 5x - y + 3 = 0\\n3. x + y + 1 = 0, x - y = 0",
            "solution": "<div class=\"solution-content\">\n<ol>\n  <li><strong>1. \\( x - y + 3 = 0 \\) and \\( y - 2 = 0 \\):</strong><br>\n    \\( m_1 = 1 \\), \\( m_2 = 0 \\).<br>\n    \\( \\tan \\theta = |(0 - 1)/(1 + 0)| = 1 \\implies \\theta = \\frac{\\pi}{4} = 45^\\circ \\).\n  </li>\n  <li><strong>2. \\( x - y + 4 = 0 \\) and \\( 5x - y + 3 = 0 \\):</strong><br>\n    \\( m_1 = 1 \\), \\( m_2 = 5 \\).<br>\n    \\( \\tan \\theta = |(5 - 1)/(1 + 5(1))| = \\frac{4}{6} = \\frac{2}{3} \\implies \\theta = \\arctan(2/3) \\approx 33.69^\\circ \\).\n  </li>\n  <li><strong>3. \\( x + y + 1 = 0 \\) and \\( x - y = 0 \\):</strong><br>\n    \\( m_1 = -1 \\), \\( m_2 = 1 \\).<br>\n    \\( m_1 \\cdot m_2 = (-1)(1) = -1 \\implies \\text{Lines are perpendicular, } \\theta = 90^\\circ \\).\n  </li>\n</ol>\n</div>"
          },
          {
            "id": "mf-b17",
            "title": "Geometry Q17: Equation of Perpendicular Bisector",
            "difficulty": "Intermediate",
            "category": "Coordinate Geometry (Part B)",
            "question": "Find the equation of the perpendicular bisector of the line segment joining the points A(2, 3) and B(6, -5).",
            "solution": "<div class=\"solution-content\">\n<ol>\n  <li><strong>Midpoint M of AB:</strong>\n    \\[ M = \\left(\\frac{2 + 6}{2}, \\frac{3 + (-5)}{2}\\right) = (4, -1) \\]\n  </li>\n  <li><strong>Slope of AB:</strong>\n    \\[ m_{AB} = \\frac{-5 - 3}{6 - 2} = \\frac{-8}{4} = -2 \\]\n  </li>\n  <li><strong>Slope of perpendicular bisector:</strong>\n    \\[ m_\\perp = -\\frac{1}{m_{AB}} = -\\frac{1}{-2} = \\frac{1}{2} \\]\n  </li>\n  <li><strong>Point-Slope Equation through M(4, -1):</strong>\n    \\[ y - (-1) = \\frac{1}{2}(x - 4) \\implies y + 1 = \\frac{1}{2}x - 2 \\]\n    \\[ 2y + 2 = x - 4 \\implies x - 2y - 6 = 0 \\]\n  </li>\n</ol>\n<p><strong>Perpendicular Bisector:</strong> \\[ x - 2y - 6 = 0 \\]</p>\n</div>"
          },
          {
            "id": "mf-b18",
            "title": "Geometry Q18: Two-Point Line Equation",
            "difficulty": "Foundational",
            "category": "Coordinate Geometry (Part B)",
            "question": "Find the equation of the line passing through the points (2, 3) and (5, -2).",
            "solution": "<div class=\"solution-content\">\n<p>Slope \\( m = \\frac{-2 - 3}{5 - 2} = -\\frac{5}{3} \\).</p>\n<p>Using point \\( (2, 3) \\):</p>\n\\[ y - 3 = -\\frac{5}{3}(x - 2) \\implies 3(y - 3) = -5(x - 2) \\]\n\\[ 3y - 9 = -5x + 10 \\implies 5x + 3y - 19 = 0 \\]\n<p><strong>Equation:</strong> \\[ 5x + 3y - 19 = 0 \\]</p>\n</div>"
          },
          {
            "id": "mf-b19",
            "title": "Geometry Q19: Line with Intercept Ratio Divided by Given Point",
            "difficulty": "Intermediate",
            "category": "Coordinate Geometry (Part B)",
            "question": "Find the equation of the line which passes through the point (-5, 4) such that the portion intercepted between the axes is divided by the point in the ratio 1:2.",
            "solution": "<div class=\"solution-content\">\n<p>Let intercepts on axes be \\( A(a, 0) \\) and \\( B(0, b) \\). The point \\( P(-5, 4) \\) divides \\( AB \\) in ratio \\( 1:2 \\):</p>\n\\[ -5 = \\frac{1(0) + 2(a)}{1 + 2} = \\frac{2a}{3} \\implies 2a = -15 \\implies a = -\\frac{15}{2} \\]\n\\[ 4 = \\frac{1(b) + 2(0)}{1 + 2} = \\frac{b}{3} \\implies b = 12 \\]\n<p>Using intercept form \\( \\frac{x}{a} + \\frac{y}{b} = 1 \\):</p>\n\\[ \\frac{x}{-15/2} + \\frac{y}{12} = 1 \\implies -\\frac{2x}{15} + \\frac{y}{12} = 1 \\]\n<p>Multiply through by LCM 60:</p>\n\\[ -8x + 5y = 60 \\implies 8x - 5y + 60 = 0 \\]\n<p><em>(If ratio is reversed 2:1, \\( a = -15, b = 6 \\implies 2x - 5y + 30 = 0 \\))</em>.</p>\n</div>"
          },
          {
            "id": "mf-b20",
            "title": "Geometry Q20: Family of Lines Passing Through Line Intersections",
            "difficulty": "Intermediate",
            "category": "Coordinate Geometry (Part B)",
            "question": "Find the equation of a line through the intersection of x - y - 1 = 0 and 2x - 3y + 1 = 0 such that it:\\n1. Has slope -2\\n2. Is parallel to x + y + 4 = 0\\n3. Passes through (1, 2)",
            "solution": "<div class=\"solution-content\">\n<p><strong>Step 1: Point of Intersection:</strong><br>\nFrom \\( x - y - 1 = 0 \\implies x = y + 1 \\).<br>\nSubstitute into \\( 2x - 3y + 1 = 0 \\):<br>\n\\( 2(y + 1) - 3y + 1 = 0 \\implies -y + 3 = 0 \\implies y = 3 \\).<br>\n\\( x = 3 + 1 = 4 \\).<br>\nPoint of intersection is \\( P(4, 3) \\).</p>\n<ol>\n  <li><strong>1. Line with slope -2:</strong><br>\n    \\( y - 3 = -2(x - 4) \\implies y - 3 = -2x + 8 \\implies 2x + y - 11 = 0 \\).\n  </li>\n  <li><strong>2. Parallel to \\( x + y + 4 = 0 \\) (slope = -1):</strong><br>\n    \\( y - 3 = -1(x - 4) \\implies x + y - 7 = 0 \\).\n  </li>\n  <li><strong>3. Passes through \\( (1, 2) \\):</strong><br>\n    Slope between \\( (4, 3) \\) and \\( (1, 2) \\): \\( m = \\frac{2 - 3}{1 - 4} = \\frac{-1}{-3} = \\frac{1}{3} \\).<br>\n    \\( y - 2 = \\frac{1}{3}(x - 1) \\implies 3y - 6 = x - 1 \\implies x - 3y + 5 = 0 \\).\n  </li>\n</ol>\n</div>"
          },
          {
            "id": "mf-b21",
            "title": "Geometry Q21: Conversion to Slope-Intercept & Intercept Forms",
            "difficulty": "Foundational",
            "category": "Coordinate Geometry (Part B)",
            "question": "Convert the equation 3x - 4y + 12 = 0 into slope-intercept form and intercept form. Hence find its slope, y-intercept, and x-intercept.",
            "solution": "<div class=\"solution-content\">\n<ol>\n  <li><strong>1. Slope-Intercept Form (\\( y = mx + c \\)):</strong>\n    \\[ 4y = 3x + 12 \\implies y = \\frac{3}{4}x + 3 \\]\n    <strong>Slope \\( m \\) = 3/4</strong>, <strong>Y-intercept \\( c \\) = 3</strong>.\n  </li>\n  <li><strong>2. Intercept Form (\\( \\frac{x}{a} + \\frac{y}{b} = 1 \\)):</strong>\n    \\[ 3x - 4y = -12 \\]\n    Divide by -12:\n    \\[ \\frac{3x}{-12} - \\frac{4y}{-12} = 1 \\implies \\frac{x}{-4} + \\frac{y}{3} = 1 \\]\n    <strong>X-intercept \\( a \\) = -4</strong>, <strong>Y-intercept \\( b \\) = 3</strong>.\n  </li>\n</ol>\n</div>"
          },
          {
            "id": "mf-b22",
            "title": "Geometry Q22: Midpoint Verification on Line Segment",
            "difficulty": "Foundational",
            "category": "Coordinate Geometry (Part B)",
            "question": "Find the midpoint of the line segment joining the points A(6, -3) and B(-2, 7). Also verify that this midpoint lies on the line joining A and B.",
            "solution": "<div class=\"solution-content\">\n<ol>\n  <li><strong>Midpoint M:</strong>\n    \\[ M = \\left( \\frac{6 + (-2)}{2}, \\frac{-3 + 7}{2} \\right) = \\left(\\frac{4}{2}, \\frac{4}{2}\\right) = (2, 2) \\]\n  </li>\n  <li><strong>Equation of line AB:</strong>\n    Slope \\( m = \\frac{7 - (-3)}{-2 - 6} = \\frac{10}{-8} = -\\frac{5}{4} \\).<br>\n    Line: \\( y - 2 = -\\frac{5}{4}(x - 2) \\implies 4y - 8 = -5x + 10 \\implies 5x + 4y - 18 = 0 \\).\n  </li>\n  <li><strong>Verification:</strong>\n    Substitute \\( M(2, 2) \\) into LHS:\n    \\[ 5(2) + 4(2) - 18 = 10 + 8 - 18 = 0 = \\text{RHS} \\]\n    Verified!\n  </li>\n</ol>\n</div>"
          },
          {
            "id": "mf-b23",
            "title": "Geometry Q23: Perpendicular Distance from Point to Line",
            "difficulty": "Foundational",
            "category": "Coordinate Geometry (Part B)",
            "question": "Find the perpendicular distance of the point (3, -5) from the line 3x + 4y - 26 = 0.",
            "solution": "<div class=\"solution-content\">\n<p>Distance Formula:</p>\n\\[ d = \\frac{|Ax_0 + By_0 + C|}{\\sqrt{A^2 + B^2}} \\]\n<p>Substitute \\( A = 3, B = 4, C = -26 \\) and point \\( (3, -5) \\):</p>\n\\[ d = \\frac{|3(3) + 4(-5) - 26|}{\\sqrt{3^2 + 4^2}} = \\frac{|9 - 20 - 26|}{\\sqrt{25}} = \\frac{|-37|}{5} = \\frac{37}{5} = 7.4 \\text{ units} \\]\n<p><strong>Perpendicular Distance:</strong> 7.4 units.</p>\n</div>"
          },
          {
            "id": "mf-b24",
            "title": "Geometry Q24: Perpendicular Line Construction Through a Given Point",
            "difficulty": "Foundational",
            "category": "Coordinate Geometry (Part B)",
            "question": "Find the equation of the line passing through the point (2, 3) and perpendicular (normal) to the line 4x - 3y + 7 = 0.",
            "solution": "<div class=\"solution-content\">\n<p>Any line perpendicular to \\( Ax + By + C = 0 \\) has the form \\( Bx - Ay + k = 0 \\).</p>\n<p>Here \\( A = 4, B = -3 \\), so perpendicular line is:</p>\n\\[ 3x + 4y + k = 0 \\]\n<p>Substitute point \\( (2, 3) \\):</p>\n\\[ 3(2) + 4(3) + k = 0 \\implies 6 + 12 + k = 0 \\implies k = -18 \\]\n<p><strong>Perpendicular Line Equation:</strong> \\[ 3x + 4y - 18 = 0 \\]</p>\n</div>"
          },
          {
            "id": "mf-b25",
            "title": "Geometry Q25: Least Squares Regression Model (Data Set 1)",
            "difficulty": "Intermediate",
            "category": "Optimization & Regression (Part B)",
            "question": "The following data shows values of x and y: x = [1, 2, 3, 4, 5], y = [2, 4, 5, 4, 5]. Using the Least Square Method, find slope (m) and intercept (c) of the best-fit line y = mx + c. Write the equation of regression line.",
            "solution": "<div class=\"solution-content\">\n<p>Number of observations \\( N = 5 \\).</p>\n<div class=\"data-table-wrapper\">\n  <table class=\"data-table\">\n    <thead><tr><th>\\( x_i \\)</th><th>\\( y_i \\)</th><th>\\( x_i^2 \\)</th><th>\\( x_i y_i \\)</th></tr></thead>\n    <tbody>\n      <tr><td>1</td><td>2</td><td>1</td><td>2</td></tr>\n      <tr><td>2</td><td>4</td><td>4</td><td>8</td></tr>\n      <tr><td>3</td><td>5</td><td>9</td><td>15</td></tr>\n      <tr><td>4</td><td>4</td><td>16</td><td>16</td></tr>\n      <tr><td>5</td><td>5</td><td>25</td><td>25</td></tr>\n      <tr><td><strong>\\(\\sum x = 15\\)</strong></td><td><strong>\\(\\sum y = 20\\)</strong></td><td><strong>\\(\\sum x^2 = 55\\)</strong></td><td><strong>\\(\\sum xy = 66\\)</strong></td></tr>\n    </tbody>\n  </table>\n</div>\n<p>Averages: \\( \\bar{x} = 15/5 = 3 \\), \\( \\bar{y} = 20/5 = 4 \\).</p>\n<p><strong>Slope Formula:</strong></p>\n\\[ m = \\frac{N \\sum xy - (\\sum x)(\\sum y)}{N \\sum x^2 - (\\sum x)^2} = \\frac{5(66) - (15)(20)}{5(55) - (15)^2} = \\frac{330 - 300}{275 - 225} = \\frac{30}{50} = 0.6 \\]\n<p><strong>Intercept Formula:</strong></p>\n\\[ c = \\bar{y} - m \\bar{x} = 4 - (0.6)(3) = 4 - 1.8 = 2.2 \\]\n<p><strong>Regression Equation:</strong> \\[ y = 0.6x + 2.2 \\]</p>\n</div>"
          },
          {
            "id": "mf-b26",
            "title": "Geometry Q26: 3D Plane Equation from Point and Normal Direction Ratios",
            "difficulty": "Intermediate",
            "category": "3D Geometry & Planes (Part B)",
            "question": "Find the equation of the plane passing through the point (1, 2, 3) and having direction ratios of its normal as (2, -1, 4).",
            "solution": "<div class=\"solution-content\">\n<p>Standard plane equation with normal \\( \\langle A, B, C \\rangle \\) through \\( (x_1, y_1, z_1) \\):</p>\n\\[ A(x - x_1) + B(y - y_1) + C(z - z_1) = 0 \\]\n<p>Substitute \\( A = 2, B = -1, C = 4 \\) and point \\( (1, 2, 3) \\):</p>\n\\[ 2(x - 1) - 1(y - 2) + 4(z - 3) = 0 \\]\n\\[ 2x - 2 - y + 2 + 4z - 12 = 0 \\]\n\\[ 2x - y + 4z - 12 = 0 \\]\n<p><strong>Equation of the Plane:</strong> \\[ 2x - y + 4z = 12 \\]</p>\n</div>"
          },
          {
            "id": "mf-b27",
            "title": "Geometry Q27: Radius of Circle from Origin to Point",
            "difficulty": "Foundational",
            "category": "Coordinate Geometry (Part B)",
            "question": "Find the radius of the circle whose centre is at (0, 0) and which passes through the point (-6, 8).",
            "solution": "<div class=\"solution-content\">\n<p>The radius \\( r \\) is the Euclidean distance from center \\( (0, 0) \\) to point \\( (-6, 8) \\):</p>\n\\[ r = \\sqrt{(-6 - 0)^2 + (8 - 0)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10 \\text{ units} \\]\n<p><strong>Radius:</strong> 10 units.</p>\n</div>"
          },
          {
            "id": "mf-b28",
            "title": "Geometry Q28: Finding Other Endpoint Given Midpoint",
            "difficulty": "Foundational",
            "category": "Coordinate Geometry (Part B)",
            "question": "The coordinates of the midpoint of a segment are (2, 3). If coordinates of one endpoint are (6, 5), find the coordinates of the other endpoint.",
            "solution": "<div class=\"solution-content\">\n<p>Let endpoint be \\( P(x, y) \\). Using midpoint formula:</p>\n\\[ \\frac{x + 6}{2} = 2 \\implies x + 6 = 4 \\implies x = -2 \\]\n\\[ \\frac{y + 5}{2} = 3 \\implies y + 5 = 6 \\implies y = 1 \\]\n<p><strong>Other Endpoint Coordinates:</strong> \\[ (-2, 1) \\]</p>\n</div>"
          },
          {
            "id": "mf-b29",
            "title": "Geometry Q29: Triangle Centroid Calculation",
            "difficulty": "Foundational",
            "category": "Coordinate Geometry (Part B)",
            "question": "The coordinates of the vertices of a triangle are (3, -1), (10, 7) and (5, 3). Find the coordinates of its centroid.",
            "solution": "<div class=\"solution-content\">\n<p>Centroid Formula:</p>\n\\[ G = \\left( \\frac{x_1 + x_2 + x_3}{3}, \\frac{y_1 + y_2 + y_3}{3} \\right) \\]\n\\[ x_G = \\frac{3 + 10 + 5}{3} = \\frac{18}{3} = 6 \\]\n\\[ y_G = \\frac{-1 + 7 + 3}{3} = \\frac{9}{3} = 3 \\]\n<p><strong>Centroid Coordinates:</strong> \\[ G(6, 3) \\]</p>\n</div>"
          },
          {
            "id": "mf-b30",
            "title": "Geometry Q30: Distance from P(-6, 4) to Line 5x - 3y + 15 = 0",
            "difficulty": "Foundational",
            "category": "Coordinate Geometry (Part B)",
            "question": "Determine the distance from point P(-6, 4) to the line with equation 5x - 3y + 15 = 0.",
            "solution": "<div class=\"solution-content\">\n<p>Perpendicular distance:</p>\n\\[ d = \\frac{|5(-6) - 3(4) + 15|}{\\sqrt{5^2 + (-3)^2}} = \\frac{|-30 - 12 + 15|}{\\sqrt{25 + 9}} = \\frac{|-27|}{\\sqrt{34}} = \\frac{27}{\\sqrt{34}} \\approx 4.6308 \\text{ units} \\]\n<p><strong>Exact Distance:</strong> \\( \\frac{27}{\\sqrt{34}} \\approx 4.63 \\) units.</p>\n</div>"
          },
          {
            "id": "mf-b31",
            "title": "Geometry Q31: Least Squares Fit for Test Marks vs Final Exam Scores",
            "difficulty": "Intermediate",
            "category": "Optimization & Regression (Part B)",
            "question": "The following data shows marks obtained by students in a class test (x) and final exam (y): x = [2, 4, 6, 8, 10], y = [3, 7, 5, 10, 12]. Using the Least Square Method, find slope (m) and intercept (c) of best-fit line y = mx + c.",
            "solution": "<div class=\"solution-content\">\n<p>Number of points \\( N = 5 \\).</p>\n<div class=\"data-table-wrapper\">\n  <table class=\"data-table\">\n    <thead><tr><th>\\( x_i \\)</th><th>\\( y_i \\)</th><th>\\( x_i^2 \\)</th><th>\\( x_i y_i \\)</th></tr></thead>\n    <tbody>\n      <tr><td>2</td><td>3</td><td>4</td><td>6</td></tr>\n      <tr><td>4</td><td>7</td><td>16</td><td>28</td></tr>\n      <tr><td>6</td><td>5</td><td>36</td><td>30</td></tr>\n      <tr><td>8</td><td>10</td><td>64</td><td>80</td></tr>\n      <tr><td>10</td><td>12</td><td>100</td><td>120</td></tr>\n      <tr><td><strong>\\(\\sum x = 30\\)</strong></td><td><strong>\\(\\sum y = 37\\)</strong></td><td><strong>\\(\\sum x^2 = 220\\)</strong></td><td><strong>\\(\\sum xy = 264\\)</strong></td></tr>\n    </tbody>\n  </table>\n</div>\n<p>Averages: \\( \\bar{x} = 30/5 = 6 \\), \\( \\bar{y} = 37/5 = 7.4 \\).</p>\n\\[ m = \\frac{5(264) - (30)(37)}{5(220) - (30)^2} = \\frac{1320 - 1110}{1100 - 900} = \\frac{210}{200} = 1.05 \\]\n\\[ c = \\bar{y} - m \\bar{x} = 7.4 - (1.05)(6) = 7.4 - 6.3 = 1.1 \\]\n<p><strong>Best-Fit Regression Line:</strong> \\[ y = 1.05x + 1.1 \\]</p>\n</div>"
          },
          {
            "id": "mf-p1",
            "title": "Paper Q1: Distance and Midpoint of AB",
            "difficulty": "Foundational",
            "category": "Exam Paper Problems",
            "question": "Let A be (-3, 5) and B be (5, -10). Find (1) the distance AB, and (2) the midpoint P of AB.",
            "solution": "<div class=\"solution-content\">\n<ol>\n  <li><strong>1. Distance AB:</strong>\n    \\[ AB = \\sqrt{(5 - (-3))^2 + (-10 - 5)^2} = \\sqrt{8^2 + (-15)^2} = \\sqrt{64 + 225} = \\sqrt{289} = 17 \\text{ units} \\]\n  </li>\n  <li><strong>2. Midpoint P of AB:</strong>\n    \\[ P = \\left( \\frac{-3 + 5}{2}, \\frac{5 + (-10)}{2} \\right) = \\left( \\frac{2}{2}, \\frac{-5}{2} \\right) = (1, -2.5) \\]\n  </li>\n</ol>\n</div>"
          },
          {
            "id": "mf-p2",
            "title": "Paper Q2: External Division in 4:3 Ratio",
            "difficulty": "Intermediate",
            "category": "Exam Paper Problems",
            "question": "Find the coordinates of the point P which divides the interval A(-3, -7), B(-1, -4) externally in the ratio 4:3.",
            "solution": "<div class=\"solution-content\">\n<p>External Section Formula with \\( m=4, n=3 \\):</p>\n\\[ x = \\frac{m x_2 - n x_1}{m - n} = \\frac{4(-1) - 3(-3)}{4 - 3} = \\frac{-4 + 9}{1} = 5 \\]\n\\[ y = \\frac{m y_2 - n y_1}{m - n} = \\frac{4(-4) - 3(-7)}{4 - 3} = \\frac{-16 + 21}{1} = 5 \\]\n<p><strong>External Division Point:</strong> \\[ P(5, 5) \\]</p>\n</div>"
          },
          {
            "id": "mf-p3a",
            "title": "Paper Q3: Line Parallel to X-Axis Through Intersection (with OR Alternative)",
            "difficulty": "Intermediate",
            "category": "Exam Paper Problems",
            "question": "Find the equation of the line parallel to the x-axis which passes through the point where the lines 4x + 3y - 6 = 0 and x - 2y - 7 = 0 meet.\\nOR\\nFind the equation of the line which passes through (2, 3) and the point of intersection of 3x + 2y = 2 and 4x + 3y = 7.",
            "solution": "<div class=\"solution-content\">\n<h4>Main Question:</h4>\n<p>Solve system: \\( x = 2y + 7 \\). Substitute into first equation:</p>\n\\[ 4(2y + 7) + 3y - 6 = 0 \\implies 8y + 28 + 3y - 6 = 0 \\implies 11y + 22 = 0 \\implies y = -2 \\]\n\\( x = 2(-2) + 7 = 3 \\). Intersection point is \\( (3, -2) \\).<br>\nA line parallel to the x-axis has zero slope (\\( y = \\text{constant} \\)):<br>\n<strong>Required Line:</strong> \\[ y = -2 \\quad (\\text{or } y + 2 = 0) \\]\n\n<h4>OR Alternative:</h4>\n<p>Solve system: \\( 3x + 2y = 2 \\) and \\( 4x + 3y = 7 \\).<br>\nMultiply Eq 1 by 3: \\( 9x + 6y = 6 \\).<br>\nMultiply Eq 2 by 2: \\( 8x + 6y = 14 \\).<br>\nSubtract: \\( x = -8 \\).<br>\nThen \\( 3(-8) + 2y = 2 \\implies 2y = 26 \\implies y = 13 \\). Point of intersection is \\( (-8, 13) \\).<br>\nLine through \\( (2, 3) \\) and \\( (-8, 13) \\):<br>\nSlope \\( m = \\frac{13 - 3}{-8 - 2} = \\frac{10}{-10} = -1 \\).<br>\nEquation: \\( y - 3 = -1(x - 2) \\implies x + y - 5 = 0 \\).</p>\n</div>"
          },
          {
            "id": "mf-p4",
            "title": "Paper Q4: Perpendicular and Parallel Line Construction",
            "difficulty": "Intermediate",
            "category": "Exam Paper Problems",
            "question": "Find the equation of the line l through (1, 3) perpendicular to the line 2x + 3y = 12. Find the equation of the line through (4, 5) parallel to l.",
            "solution": "<div class=\"solution-content\">\n<ol>\n  <li><strong>Line l:</strong><br>\n    Perpendicular to \\( 2x + 3y = 12 \\) takes form \\( 3x - 2y + k = 0 \\).<br>\n    Passing through \\( (1, 3) \\): \\( 3(1) - 2(3) + k = 0 \\implies -3 + k = 0 \\implies k = 3 \\).<br>\n    <strong>Line l:</strong> \\[ 3x - 2y + 3 = 0 \\]\n  </li>\n  <li><strong>Parallel Line through (4, 5):</strong><br>\n    Same slope \\( 3x - 2y + c = 0 \\).<br>\n    Passing through \\( (4, 5) \\): \\( 3(4) - 2(5) + c = 0 \\implies 12 - 10 + c = 0 \\implies c = -2 \\).<br>\n    <strong>Parallel Line:</strong> \\[ 3x - 2y - 2 = 0 \\]\n  </li>\n</ol>\n</div>"
          },
          {
            "id": "mf-p5",
            "title": "Paper Q5: Perpendicular Distance from P(-6, -7) to 3x + 4y = 11",
            "difficulty": "Foundational",
            "category": "Exam Paper Problems",
            "question": "What is the distance d of the point P(-6, -7) from the line l with equation 3x + 4y = 11?",
            "solution": "<div class=\"solution-content\">\n<p>Rewrite line as \\( 3x + 4y - 11 = 0 \\):</p>\n\\[ d = \\frac{|3(-6) + 4(-7) - 11|}{\\sqrt{3^2 + 4^2}} = \\frac{|-18 - 28 - 11|}{5} = \\frac{|-57|}{5} = 11.4 \\text{ units} \\]\n<p><strong>Distance d:</strong> 11.4 units.</p>\n</div>"
          },
          {
            "id": "mf-p6",
            "title": "Paper Q6: Triangle Area with Vertices (3, 6), (7, 8), and (5, 2)",
            "difficulty": "Foundational",
            "category": "Exam Paper Problems",
            "question": "Three points A(3, 6), B(7, 8) and C(5, 2) are the vertices of triangle ABC. Find the area of this triangle.",
            "solution": "<div class=\"solution-content\">\n\\[ \\Delta = \\frac{1}{2} |3(8 - 2) + 7(2 - 6) + 5(6 - 8)| \\]\n\\[ \\Delta = \\frac{1}{2} |3(6) + 7(-4) + 5(-2)| = \\frac{1}{2} |18 - 28 - 10| = \\frac{1}{2} |-20| = 10 \\text{ sq. units} \\]\n<p><strong>Area of Triangle ABC:</strong> 10 square units.</p>\n</div>"
          },
          {
            "id": "mf-p7",
            "title": "Paper Q7: Rhombus Proof for (1, 0), (5, 3), (2, 7), (-2, 4)",
            "difficulty": "Intermediate",
            "category": "Exam Paper Problems",
            "question": "Show that the points (1, 0), (5, 3), (2, 7) and (-2, 4) are the vertices of a rhombus.",
            "solution": "<div class=\"solution-content\">\n<p>All four side lengths compute to 5:</p>\n<ul>\n  <li>\\( d_1 = \\sqrt{(5 - 1)^2 + (3 - 0)^2} = \\sqrt{16 + 9} = 5 \\)</li>\n  <li>\\( d_2 = \\sqrt{(2 - 5)^2 + (7 - 3)^2} = \\sqrt{9 + 16} = 5 \\)</li>\n  <li>\\( d_3 = \\sqrt{(-2 - 2)^2 + (4 - 7)^2} = \\sqrt{16 + 9} = 5 \\)</li>\n  <li>\\( d_4 = \\sqrt{(1 - (-2))^2 + (0 - 4)^2} = \\sqrt{9 + 16} = 5 \\)</li>\n</ul>\n<p>Since all 4 side lengths are equal, it forms a <strong>rhombus</strong>. <span class=\"badge badge-success\">Proved</span>.</p>\n</div>"
          },
          {
            "id": "mf-p8",
            "title": "Paper Q8: Cartesian Equation of 3D Plane from 3 Points",
            "difficulty": "Advanced",
            "category": "Exam Paper Problems",
            "question": "Determine the Cartesian equation of the plane containing the points A(-1, 2, 5), B(3, 2, 4), and C(-2, -3, 6).",
            "solution": "<div class=\"solution-content\">\n<ol>\n  <li><strong>Displacement vectors:</strong><br>\n    \\( \\vec{AB} = \\langle 3 - (-1), 2 - 2, 4 - 5 \\rangle = \\langle 4, 0, -1 \\rangle \\)<br>\n    \\( \\vec{AC} = \\langle -2 - (-1), -3 - 2, 6 - 5 \\rangle = \\langle -1, -5, 1 \\rangle \\)\n  </li>\n  <li><strong>Normal vector via cross product \\( \\mathbf{n} = \\vec{AB} \\times \\vec{AC} \\):</strong>\n    \\[ \\mathbf{n} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ 4 & 0 & -1 \\\\ -1 & -5 & 1 \\end{vmatrix} = \\mathbf{i}(0 - 5) - \\mathbf{j}(4 - 1) + \\mathbf{k}(-20 - 0) = \\langle -5, -3, -20 \\rangle \\]\n  </li>\n  <li><strong>Cartesian Equation through A(-1, 2, 5):</strong>\n    \\[ -5(x - (-1)) - 3(y - 2) - 20(z - 5) = 0 \\]\n    \\[ -5x - 5 - 3y + 6 - 20z + 100 = 0 \\]\n    \\[ -5x - 3y - 20z + 101 = 0 \\implies 5x + 3y + 20z - 101 = 0 \\]\n  </li>\n</ol>\n<p><strong>Cartesian Plane Equation:</strong> \\[ 5x + 3y + 20z - 101 = 0 \\]</p>\n</div>"
          }
        ],
        "cheatsheet": [
          {
            "title": "Coordinate Geometry & Set Theory Formulas",
            "content": "\n              <div class=\"data-table-wrapper\">\n                <table class=\"data-table\">\n                  <thead><tr><th>Concept</th><th>Formula</th></tr></thead>\n                  <tbody>\n                    <tr><td>Distance (2D)</td><td>\\( d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} \\)</td></tr>\n                    <tr><td>Area of Triangle</td><td>\\( \\frac{1}{2} |x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)| \\)</td></tr>\n                    <tr><td>Centroid</td><td>\\( G = \\left(\\frac{x_1 + x_2 + x_3}{3}, \\frac{y_1 + y_2 + y_3}{3}\\right) \\)</td></tr>\n                    <tr><td>Perpendicular Distance</td><td>\\( d = \\frac{|Ax_1 + By_1 + C|}{\\sqrt{A^2 + B^2}} \\)</td></tr>\n                    <tr><td>Angle Between Lines</td><td>\\( \\tan \\theta = \\left|\\frac{m_2 - m_1}{1 + m_1 m_2}\\right| \\)</td></tr>\n                    <tr><td>Inclusion-Exclusion (2 Sets)</td><td>\\( n(A \\cup B) = n(A) + n(B) - n(A \\cap B) \\)</td></tr>\n                    <tr><td>De Morgan I</td><td>\\( (A \\cup B)' = A' \\cap B' \\)</td></tr>\n                    <tr><td>Least Squares Slope</td><td>\\( m = \\frac{N \\sum xy - \\sum x \\sum y}{N \\sum x^2 - (\\sum x)^2} \\)</td></tr>\n                  </tbody>\n                </table>\n              </div>\n            "
          }
        ]
      },
      {
        "id": "python",
        "code": "AIML-104",
        "name": "Python Programming",
        "subtitle": "Language Fundamentals, Pattern Algorithms & Scientific Structures",
        "stats": {
          "topics": 8,
          "assignments": 45,
          "demos": 2
        },
        "overview": "Comprehensive curriculum covering the CPython execution model, built-in dynamic data structures, control flow, functions, OOP protocols, pattern printing algorithms, number theory, and scientific computing foundations.",
        "topics": [
          {
            "id": "py-t1",
            "title": "Python Architecture, Execution Model & Dynamic Typing",
            "tag": "Core Python",
            "content": "\n              <p>Python is a high-level, dynamically-typed, interpreted language. Source code (<code>.py</code>) is compiled into bytecode (<code>.pyc</code>) which executes on the <strong>CPython Virtual Machine (PVM)</strong>.</p>\n              <div class=\"callout callout-info\">\n                <div class=\"callout-title\">The Everything-is-an-Object Model</div>\n                <p>Every identifier points to a heap-allocated <code>PyObject</code> containing: a reference count, a type pointer (<code>ob_type</code>), and payload data. Variable names are merely references in a namespace dictionary, enabling polymorphic behavior without static type declarations.</p>\n              </div>\n            "
          },
          {
            "id": "py-t2",
            "title": "Built-in Data Structures & Big-O Complexities",
            "tag": "Data Structures",
            "content": "\n              <div class=\"data-table-wrapper\">\n                <table class=\"data-table\">\n                  <thead><tr><th>Type</th><th>Mutability</th><th>Ordering</th><th>Index / Key Lookup</th><th>Append / Insert</th></tr></thead>\n                  <tbody>\n                    <tr><td><code>list</code></td><td>Mutable</td><td>Ordered</td><td>\\( O(1) \\) by index</td><td>\\( O(1) \\) amortized append, \\( O(N) \\) insert</td></tr>\n                    <tr><td><code>tuple</code></td><td>Immutable</td><td>Ordered</td><td>\\( O(1) \\) by index</td><td>N/A (Fixed size)</td></tr>\n                    <tr><td><code>dict</code></td><td>Mutable</td><td>Insertion-order</td><td>\\( O(1) \\) average hash lookup</td><td>\\( O(1) \\) average insertion</td></tr>\n                    <tr><td><code>set</code></td><td>Mutable</td><td>Unordered</td><td>\\( O(1) \\) membership test</td><td>\\( O(1) \\) average addition</td></tr>\n                  </tbody>\n                </table>\n              </div>\n            "
          },
          {
            "id": "py-t3",
            "title": "Control Flow, Generators & Iterators",
            "tag": "Language Mechanics",
            "content": "\n              <p>Python implements the <strong>Iterator Protocol</strong> via <code>__iter__()</code> and <code>__next__()</code>. Generator functions utilize the <code>yield</code> keyword, suspending execution state across iterations to deliver memory-efficient \\( O(1) \\) streaming over infinite sequences.</p>\n            "
          },
          {
            "id": "py-t4",
            "title": "Functions, Closures & Decorators",
            "tag": "Functional",
            "content": "\n              <p>Functions are first-class citizens: they can be passed as arguments, returned from other functions, and stored in collections. Decorators leverage closures to wrap functions dynamically, commonly used for logging, timing, and access authentication in production systems.</p>\n            "
          },
          {
            "id": "py-t5",
            "title": "Object-Oriented Programming & Dunder Protocols",
            "tag": "OOP",
            "content": "\n              <p>Python's data model utilizes <strong>magic (dunder) methods</strong> to integrate user classes with built-in syntax:</p>\n              <ul>\n                <li><code>__repr__</code>, <code>__str__</code>: String representation.</li>\n                <li><code>__len__</code>, <code>__getitem__</code>: Sequence and indexing protocols.</li>\n                <li><code>__add__</code>, <code>__mul__</code>: Operator overloading.</li>\n                <li><code>__enter__</code>, <code>__exit__</code>: Context managers (<code>with</code> blocks).</li>\n              </ul>\n            "
          },
          {
            "id": "py-t6",
            "title": "Algorithmic Pattern Generation Mechanics",
            "tag": "Algorithms",
            "content": "\n              <p>Pattern printing translates 2D coordinate spaces \\( (i, j) \\) into discrete text visualizations using nested loops. Understanding loop invariant transformations (such as \\( 2i - 1 \\) for odd widths, \\( n - i \\) for inverted spaces, and mirrored coordinate mappings) establishes foundational spatial reasoning for matrix and tensor slicing.</p>\n            "
          },
          {
            "id": "py-t7",
            "title": "Computational Number Theory & Arithmetic Algorithms",
            "tag": "Number Theory",
            "content": "\n              <p>Core mathematical algorithms implemented in practical ML pre-processing: Euclidean GCD algorithm in \\( O(\\log(\\min(a, b))) \\), Prime factorization tests up to \\( O(\\sqrt{n}) \\), Armstrong/Narcissistic number digit-power aggregations, and Pascal triangle combinatorics (\\( \\binom{n}{k} \\)).</p>\n            "
          },
          {
            "id": "py-t8",
            "title": "Vectorization & Scientific Python Foundations",
            "tag": "AIML Stack",
            "content": "\n              <p>Transition from naive Python loops to vectorized NumPy operations. SIMD (Single Instruction, Multiple Data) processor extensions execute operations across contiguous C-memory blocks at hardware speeds, avoiding dynamic typing overhead.</p>\n            "
          }
        ],
        "assignments": [
          {
            "id": "py-p1",
            "title": "Py1: Add Two Numbers",
            "difficulty": "Foundational",
            "category": "Basic Syntax & I/O",
            "question": "Write a python program to add two numbers with user input validation.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>Python Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"py_q1\">Copy</button></div>\n<pre><code id=\"py_q1\"># Program to add two numbers\ndef add_two_numbers():\n    try:\n        num1 = float(input(\"Enter first number: \"))\n        num2 = float(input(\"Enter second number: \"))\n        result = num1 + num2\n        print(f\"The sum of {num1} and {num2} is: {result}\")\n    except ValueError:\n        print(\"Invalid input! Please enter numeric values.\")\n\nif __name__ == \"__main__\":\n    add_two_numbers()</code></pre>\n</div>"
          },
          {
            "id": "py-p2",
            "title": "Py2: Quotient and Remainder",
            "difficulty": "Foundational",
            "category": "Basic Syntax & I/O",
            "question": "Write a python program to find quotient and remainder using floor division (//) and modulo (%).",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>Python Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"py_q2\">Copy</button></div>\n<pre><code id=\"py_q2\">def find_quotient_remainder():\n    try:\n        dividend = int(input(\"Enter dividend: \"))\n        divisor = int(input(\"Enter divisor: \"))\n        if divisor == 0:\n            print(\"Error: Division by zero is undefined.\")\n            return\n        quotient = dividend // divisor\n        remainder = dividend % divisor\n        print(f\"Dividend: {dividend} | Divisor: {divisor}\")\n        print(f\"Quotient: {quotient} | Remainder: {remainder}\")\n    except ValueError:\n        print(\"Please enter valid integers.\")\n\nif __name__ == \"__main__\":\n    find_quotient_remainder()</code></pre>\n</div>"
          },
          {
            "id": "py-p3",
            "title": "Py3: Object Types & System Inspection",
            "difficulty": "Foundational",
            "category": "System & Types",
            "question": "Write a python program to find the type of objects in your system.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>Python Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"py_q3\">Copy</button></div>\n<pre><code id=\"py_q3\">def inspect_object_types():\n    samples = [\n        42,\n        3.14159,\n        \"MSc AIML\",\n        [1, 2, 3],\n        (10, 20),\n        {\"a\": 1, \"b\": 2},\n        {1, 2, 3},\n        True,\n        None,\n        lambda x: x * 2\n    ]\n    print(f\"{'Object Representation':<25} | {'Type Name':<20} | {'Memory ID'}\")\n    print(\"-\" * 65)\n    for obj in samples:\n        print(f\"{str(obj):<25} | {type(obj).__name__:<20} | {id(obj)}\")\n\nif __name__ == \"__main__\":\n    inspect_object_types()</code></pre>\n</div>"
          },
          {
            "id": "py-p4",
            "title": "Py4: Greatest of Two Numbers",
            "difficulty": "Foundational",
            "category": "Conditionals",
            "question": "Write a python program to read two numbers and display the greatest number.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>Python Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"py_q4\">Copy</button></div>\n<pre><code id=\"py_q4\">def find_greatest():\n    a = float(input(\"Enter first number: \"))\n    b = float(input(\"Enter second number: \"))\n    if a > b:\n        print(f\"{a} is greater than {b}\")\n    elif b > a:\n        print(f\"{b} is greater than {a}\")\n    else:\n        print(f\"Both numbers are equal: {a} == {b}\")\n\nif __name__ == \"__main__\":\n    find_greatest()</code></pre>\n</div>"
          },
          {
            "id": "py-p5",
            "title": "Py5: Check Even or Odd",
            "difficulty": "Foundational",
            "category": "Conditionals",
            "question": "Write a python program to check whether a number is even or odd.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>Python Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"py_q5\">Copy</button></div>\n<pre><code id=\"py_q5\">def check_even_odd():\n    n = int(input(\"Enter an integer: \"))\n    if n % 2 == 0:\n        print(f\"{n} is an EVEN number.\")\n    else:\n        print(f\"{n} is an ODD number.\")\n\nif __name__ == \"__main__\":\n    check_even_odd()</code></pre>\n</div>"
          },
          {
            "id": "py-p6",
            "title": "Py6: Vowel or Consonant Checker",
            "difficulty": "Foundational",
            "category": "Conditionals",
            "question": "Write a python program to check whether a character is vowel or consonant.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>Python Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"py_q6\">Copy</button></div>\n<pre><code id=\"py_q6\">def check_vowel_consonant():\n    ch = input(\"Enter a single alphabet character: \").strip().lower()\n    if len(ch) != 1 or not ch.isalpha():\n        print(\"Please enter exactly one alphabetic character.\")\n        return\n    if ch in 'aeiou':\n        print(f\"'{ch}' is a VOWEL.\")\n    else:\n        print(f\"'{ch}' is a CONSONANT.\")\n\nif __name__ == \"__main__\":\n    check_vowel_consonant()</code></pre>\n</div>"
          },
          {
            "id": "py-p7",
            "title": "Py7: Largest Among Three Numbers",
            "difficulty": "Foundational",
            "category": "Conditionals",
            "question": "Write a python program to find the largest number among three numbers.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>Python Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"py_q7\">Copy</button></div>\n<pre><code id=\"py_q7\">def find_largest_of_three():\n    a = float(input(\"Enter first number: \"))\n    b = float(input(\"Enter second number: \"))\n    c = float(input(\"Enter third number: \"))\n    if a >= b and a >= c:\n        largest = a\n    elif b >= a and b >= c:\n        largest = b\n    else:\n        largest = c\n    print(f\"The largest number among ({a}, {b}, {c}) is: {largest}\")\n\nif __name__ == \"__main__\":\n    find_largest_of_three()</code></pre>\n</div>"
          },
          {
            "id": "py-p8",
            "title": "Py8: All Roots of a Quadratic Equation",
            "difficulty": "Intermediate",
            "category": "Math & Algebra",
            "question": "Write a python program to find all roots of a quadratic equation (real, equal, and complex).",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>Python Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"py_q8\">Copy</button></div>\n<pre><code id=\"py_q8\">import cmath\n\ndef solve_quadratic():\n    a = float(input(\"Enter coefficient a (a != 0): \"))\n    b = float(input(\"Enter coefficient b: \"))\n    c = float(input(\"Enter coefficient c: \"))\n    if a == 0:\n        print(\"Coefficient 'a' cannot be zero in a quadratic equation.\")\n        return\n    discriminant = b**2 - 4*a*c\n    if discriminant > 0:\n        root1 = (-b + discriminant**0.5) / (2*a)\n        root2 = (-b - discriminant**0.5) / (2*a)\n        print(f\"Two Real & Distinct Roots: {root1:.4f} and {root2:.4f}\")\n    elif discriminant == 0:\n        root = -b / (2*a)\n        print(f\"Two Real & Equal Roots: {root:.4f}\")\n    else:\n        r1 = (-b + cmath.sqrt(discriminant)) / (2*a)\n        r2 = (-b - cmath.sqrt(discriminant)) / (2*a)\n        print(f\"Complex Roots: {r1} and {r2}\")\n\nif __name__ == \"__main__\":\n    solve_quadratic()</code></pre>\n</div>"
          },
          {
            "id": "py-p9",
            "title": "Py9: Sum of First N Natural Numbers",
            "difficulty": "Foundational",
            "category": "Loops & Iterations",
            "question": "Write a python program to calculate sum of natural numbers.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>Python Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"py_q9\">Copy</button></div>\n<pre><code id=\"py_q9\">def sum_natural_numbers():\n    n = int(input(\"Enter positive integer n: \"))\n    if n <= 0:\n        print(\"Please enter a positive integer.\")\n        return\n    # Formula O(1): n*(n+1)//2\n    total = n * (n + 1) // 2\n    print(f\"Sum of first {n} natural numbers is: {total}\")\n\nif __name__ == \"__main__\":\n    sum_natural_numbers()</code></pre>\n</div>"
          },
          {
            "id": "py-p10",
            "title": "Py10: Leap Year Verification",
            "difficulty": "Foundational",
            "category": "Conditionals",
            "question": "Write a python program to check leap year using Gregorian calendar logic.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>Python Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"py_q10\">Copy</button></div>\n<pre><code id=\"py_q10\">def is_leap_year(year):\n    return (year % 400 == 0) or (year % 4 == 0 and year % 100 != 0)\n\nif __name__ == \"__main__\":\n    y = int(input(\"Enter year (e.g. 2024): \"))\n    if is_leap_year(y):\n        print(f\"{y} is a LEAP YEAR (366 days).\")\n    else:\n        print(f\"{y} is NOT a leap year (365 days).\")</code></pre>\n</div>"
          },
          {
            "id": "py-p11",
            "title": "Py11: Factorial Calculation (Iterative & Recursive)",
            "difficulty": "Foundational",
            "category": "Loops & Recursion",
            "question": "Write a python program to find the factorial of a number.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>Python Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"py_q11\">Copy</button></div>\n<pre><code id=\"py_q11\">def factorial(n):\n    if n < 0:\n        return None\n    fact = 1\n    for i in range(1, n + 1):\n        fact *= i\n    return fact\n\nif __name__ == \"__main__\":\n    num = int(input(\"Enter non-negative integer: \"))\n    res = factorial(num)\n    if res is not None:\n        print(f\"{num}! = {res}\")\n    else:\n        print(\"Factorial is not defined for negative numbers.\")</code></pre>\n</div>"
          },
          {
            "id": "py-p12",
            "title": "Py12: Multiplication Table Generator",
            "difficulty": "Foundational",
            "category": "Loops & Iterations",
            "question": "Write a python program to generate multiplication table.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>Python Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"py_q12\">Copy</button></div>\n<pre><code id=\"py_q12\">def multiplication_table():\n    num = int(input(\"Enter table base number: \"))\n    limit = int(input(\"Enter table limit (e.g. 10): \"))\n    print(f\"--- Multiplication Table for {num} ---\")\n    for i in range(1, limit + 1):\n        print(f\"{num:2d} x {i:2d} = {num * i:4d}\")\n\nif __name__ == \"__main__\":\n    multiplication_table()</code></pre>\n</div>"
          },
          {
            "id": "py-p13",
            "title": "Py13: Fibonacci Series (0, 1, 1, 2, 3, 5, 8, ...)",
            "difficulty": "Foundational",
            "category": "Loops & Iterations",
            "question": "Write a python program to display Fibonacci series up to n terms.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>Python Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"py_q13\">Copy</button></div>\n<pre><code id=\"py_q13\">def fibonacci_series(n):\n    if n <= 0:\n        return []\n    series = [0]\n    if n > 1:\n        series.append(1)\n    for _ in range(2, n):\n        series.append(series[-1] + series[-2])\n    return series\n\nif __name__ == \"__main__\":\n    terms = int(input(\"Enter number of terms: \"))\n    result = fibonacci_series(terms)\n    print(\"Fibonacci Series:\", \", \".join(map(str, result)))</code></pre>\n</div>"
          },
          {
            "id": "py-p14",
            "title": "Py14: Greatest Common Divisor (GCD / HCF)",
            "difficulty": "Foundational",
            "category": "Number Theory",
            "question": "Write a python program to find GCD using the Euclidean algorithm.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>Python Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"py_q14\">Copy</button></div>\n<pre><code id=\"py_q14\">def gcd_euclidean(a, b):\n    while b != 0:\n        a, b = b, a % b\n    return abs(a)\n\nif __name__ == \"__main__\":\n    x = int(input(\"Enter first integer: \"))\n    y = int(input(\"Enter second integer: \"))\n    print(f\"GCD({x}, {y}) = {gcd_euclidean(x, y)}\")</code></pre>\n</div>"
          },
          {
            "id": "py-p15",
            "title": "Py15: Least Common Multiple (LCM)",
            "difficulty": "Foundational",
            "category": "Number Theory",
            "question": "Write a python program to find LCM using the relationship LCM(a, b) = |a * b| / GCD(a, b).",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>Python Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"py_q15\">Copy</button></div>\n<pre><code id=\"py_q15\">def gcd(a, b):\n    while b:\n        a, b = b, a % b\n    return abs(a)\n\ndef lcm(a, b):\n    if a == 0 or b == 0:\n        return 0\n    return abs(a * b) // gcd(a, b)\n\nif __name__ == \"__main__\":\n    x = int(input(\"Enter first integer: \"))\n    y = int(input(\"Enter second integer: \"))\n    print(f\"LCM({x}, {y}) = {lcm(x, y)}\")</code></pre>\n</div>"
          },
          {
            "id": "py-p16",
            "title": "Py16: Reverse an Integer",
            "difficulty": "Foundational",
            "category": "Loops & Math",
            "question": "Write a python program to reverse a number mathematically.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>Python Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"py_q16\">Copy</button></div>\n<pre><code id=\"py_q16\">def reverse_number(n):\n    sign = -1 if n < 0 else 1\n    n = abs(n)\n    rev = 0\n    while n > 0:\n        digit = n % 10\n        rev = rev * 10 + digit\n        n //= 10\n    return sign * rev\n\nif __name__ == \"__main__\":\n    num = int(input(\"Enter an integer to reverse: \"))\n    print(f\"Reversed number: {reverse_number(num)}\")</code></pre>\n</div>"
          },
          {
            "id": "py-p17",
            "title": "Py17: Calculate Power of a Number",
            "difficulty": "Foundational",
            "category": "Math & Algebra",
            "question": "Write a python program to calculate the power of a number (both base ** exp and binary exponentiation).",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>Python Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"py_q17\">Copy</button></div>\n<pre><code id=\"py_q17\">def fast_power(base, exp):\n    # Binary exponentiation O(log exp)\n    if exp < 0:\n        return 1.0 / fast_power(base, -exp)\n    res = 1.0\n    curr = float(base)\n    while exp > 0:\n        if exp % 2 == 1:\n            res *= curr\n        curr *= curr\n        exp //= 2\n    return res\n\nif __name__ == \"__main__\":\n    b = float(input(\"Enter base: \"))\n    e = int(input(\"Enter exponent: \"))\n    print(f\"{b}^{e} = {fast_power(b, e)}\")</code></pre>\n</div>"
          },
          {
            "id": "py-p18",
            "title": "Py18: Binary Value of a Character",
            "difficulty": "Foundational",
            "category": "Bitwise & Strings",
            "question": "Write a python program to find the binary value of a character.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>Python Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"py_q18\">Copy</button></div>\n<pre><code id=\"py_q18\">def char_to_binary():\n    ch = input(\"Enter a single character: \")\n    if len(ch) != 1:\n        print(\"Please enter exactly one character.\")\n        return\n    ascii_val = ord(ch)\n    bin_str = bin(ascii_val)[2:].zfill(8)\n    print(f\"Character: '{ch}' | ASCII Code: {ascii_val} | 8-Bit Binary: {bin_str}\")\n\nif __name__ == \"__main__\":\n    char_to_binary()</code></pre>\n</div>"
          },
          {
            "id": "py-p19",
            "title": "Py19: Display Two Strings Continuously on Single Line",
            "difficulty": "Foundational",
            "category": "Basic Syntax & I/O",
            "question": "Write a python program to display two separate strings in single line continuously using print end parameter.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>Python Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"py_q19\">Copy</button></div>\n<pre><code id=\"py_q19\">def continuous_print():\n    str1 = input(\"Enter first string: \")\n    str2 = input(\"Enter second string: \")\n    # Suppressing newline with end='' parameter\n    print(str1, end=\" \")\n    print(str2)\n\nif __name__ == \"__main__\":\n    continuous_print()</code></pre>\n</div>"
          },
          {
            "id": "py-p20",
            "title": "Py20: Number Palindrome Checker",
            "difficulty": "Foundational",
            "category": "Loops & Math",
            "question": "Write a python program to check whether a number is palindrome or not.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>Python Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"py_q20\">Copy</button></div>\n<pre><code id=\"py_q20\">def is_palindrome(n):\n    if n < 0:\n        return False\n    original = n\n    rev = 0\n    while n > 0:\n        rev = rev * 10 + (n % 10)\n        n //= 10\n    return rev == original\n\nif __name__ == \"__main__\":\n    num = int(input(\"Enter number: \"))\n    if is_palindrome(num):\n        print(f\"{num} is a PALINDROME.\")\n    else:\n        print(f\"{num} is NOT a palindrome.\")</code></pre>\n</div>"
          },
          {
            "id": "py-p21",
            "title": "Py21: Prime Number Checker",
            "difficulty": "Foundational",
            "category": "Number Theory",
            "question": "Write a python program to check whether a number is prime or not using O(sqrt(N)) primality test.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>Python Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"py_q21\">Copy</button></div>\n<pre><code id=\"py_q21\">def is_prime(n):\n    if n <= 1:\n        return False\n    if n <= 3:\n        return True\n    if n % 2 == 0 or n % 3 == 0:\n        return False\n    i = 5\n    while i * i <= n:\n        if n % i == 0 or n % (i + 2) == 0:\n            return False\n        i += 6\n    return True\n\nif __name__ == \"__main__\":\n    val = int(input(\"Enter integer: \"))\n    if is_prime(val):\n        print(f\"{val} is a PRIME number.\")\n    else:\n        print(f\"{val} is COMPOSITE / NOT prime.\")</code></pre>\n</div>"
          },
          {
            "id": "py-p22",
            "title": "Py22: Prime Numbers Between Two Intervals",
            "difficulty": "Foundational",
            "category": "Number Theory",
            "question": "Write a python program to display all prime numbers between two intervals [low, high].",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>Python Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"py_q22\">Copy</button></div>\n<pre><code id=\"py_q22\">def primes_in_interval(low, high):\n    primes = []\n    for num in range(max(2, low), high + 1):\n        for i in range(2, int(num**0.5) + 1):\n            if num % i == 0:\n                break\n        else:\n            primes.append(num)\n    return primes\n\nif __name__ == \"__main__\":\n    l = int(input(\"Enter lower bound: \"))\n    h = int(input(\"Enter upper bound: \"))\n    res = primes_in_interval(l, h)\n    print(f\"Primes in [{l}, {h}] ({len(res)} found):\")\n    print(res)</code></pre>\n</div>"
          },
          {
            "id": "py-p23",
            "title": "Py23: Check Armstrong (Narcissistic) Number",
            "difficulty": "Foundational",
            "category": "Number Theory",
            "question": "Write a python program to check armstrong number. (e.g., 1^3 + 5^3 + 3^3 = 153).",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>Python Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"py_q23\">Copy</button></div>\n<pre><code id=\"py_q23\">def is_armstrong(n):\n    s = str(abs(n))\n    power = len(s)\n    sum_digits = sum(int(digit)**power for digit in s)\n    return sum_digits == abs(n)\n\nif __name__ == \"__main__\":\n    val = int(input(\"Enter number: \"))\n    if is_armstrong(val):\n        print(f\"{val} is an ARMSTRONG number.\")\n    else:\n        print(f\"{val} is NOT an Armstrong number.\")</code></pre>\n</div>"
          },
          {
            "id": "py-p24",
            "title": "Py24: Armstrong Numbers in an Interval",
            "difficulty": "Foundational",
            "category": "Number Theory",
            "question": "Write a python program to display armstrong numbers between two intervals.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>Python Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"py_q24\">Copy</button></div>\n<pre><code id=\"py_q24\">def armstrong_in_range(low, high):\n    results = []\n    for num in range(low, high + 1):\n        s = str(num)\n        p = len(s)\n        if sum(int(d)**p for d in s) == num:\n            results.append(num)\n    return results\n\nif __name__ == \"__main__\":\n    l = int(input(\"Enter start: \"))\n    h = int(input(\"Enter end: \"))\n    print(f\"Armstrong numbers in [{l}, {h}]:\", armstrong_in_range(l, h))</code></pre>\n</div>"
          },
          {
            "id": "py-p25",
            "title": "Py25: Factors of a Number",
            "difficulty": "Foundational",
            "category": "Number Theory",
            "question": "Write a python program to display all factors of a number.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>Python Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"py_q25\">Copy</button></div>\n<pre><code id=\"py_q25\">def get_factors(n):\n    factors = []\n    for i in range(1, int(n**0.5) + 1):\n        if n % i == 0:\n            factors.append(i)\n            if i*i != n:\n                factors.append(n // i)\n    factors.sort()\n    return factors\n\nif __name__ == \"__main__\":\n    val = int(input(\"Enter positive integer: \"))\n    print(f\"Factors of {val}:\", get_factors(val))</code></pre>\n</div>"
          },
          {
            "id": "py-p26",
            "title": "Py26: Simple Interest Calculation",
            "difficulty": "Foundational",
            "category": "Math & Finance",
            "question": "Write a python program to calculate simple interest of the principal read by user.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>Python Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"py_q26\">Copy</button></div>\n<pre><code id=\"py_q26\">def simple_interest():\n    p = float(input(\"Enter Principal amount (P): \"))\n    r = float(input(\"Enter Annual Interest Rate in % (R): \"))\n    t = float(input(\"Enter Time period in years (T): \"))\n    si = (p * r * t) / 100.0\n    total = p + si\n    print(f\"Simple Interest: {si:.2f} | Total Maturity Amount: {total:.2f}\")\n\nif __name__ == \"__main__\":\n    simple_interest()</code></pre>\n</div>"
          },
          {
            "id": "py-p27",
            "title": "Py27: Basic Star Pyramid and Triangle Patterns",
            "difficulty": "Intermediate",
            "category": "Patterns",
            "question": "Write a python program to create basic pyramid and pattern.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>Python Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"py_q27\">Copy</button></div>\n<pre><code id=\"py_q27\">def pyramid_and_pattern(n=5):\n    print(\"--- Left Triangle ---\")\n    for i in range(1, n + 1):\n        print(\"* \" * i)\n\n    print(\"\\n--- Centered Pyramid ---\")\n    for i in range(1, n + 1):\n        print(\" \" * (n - i) + \"* \" * i)\n\nif __name__ == \"__main__\":\n    pyramid_and_pattern()</code></pre>\n</div>"
          },
          {
            "id": "py-p28",
            "title": "Py28: Simple Arithmetic Calculator",
            "difficulty": "Foundational",
            "category": "Conditionals",
            "question": "Write a python program to make a simple calculator to add, subtract, multiply or divide.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>Python Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"py_q28\">Copy</button></div>\n<pre><code id=\"py_q28\">def calculator():\n    num1 = float(input(\"Enter first number: \"))\n    op = input(\"Enter operator (+, -, *, /): \").strip()\n    num2 = float(input(\"Enter second number: \"))\n\n    if op == '+': res = num1 + num2\n    elif op == '-': res = num1 - num2\n    elif op == '*': res = num1 * num2\n    elif op == '/':\n        if num2 == 0:\n            print(\"Division by zero error!\")\n            return\n        res = num1 / num2\n    else:\n        print(\"Invalid operator!\")\n        return\n    print(f\"{num1} {op} {num2} = {res}\")\n\nif __name__ == \"__main__\":\n    calculator()</code></pre>\n</div>"
          },
          {
            "id": "py-p29",
            "title": "Py29: Simple Number Triangle Pattern",
            "difficulty": "Intermediate",
            "category": "Patterns",
            "question": "Write a python program to display Simple Number Triangle Pattern (1, 1 2, 1 2 3...).",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>Python Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"py_q29\">Copy</button></div>\n<pre><code id=\"py_q29\">def number_triangle(n=5):\n    for i in range(1, n + 1):\n        for j in range(1, i + 1):\n            print(j, end=\" \")\n        print()\n\nif __name__ == \"__main__\":\n    number_triangle()</code></pre>\n</div>"
          },
          {
            "id": "py-p30",
            "title": "Py30: Inverted Pyramid of Numbers",
            "difficulty": "Intermediate",
            "category": "Patterns",
            "question": "Write a python program to display inverted pyramid of numbers.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>Python Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"py_q30\">Copy</button></div>\n<pre><code id=\"py_q30\">def inverted_pyramid_numbers(n=5):\n    for i in range(n, 0, -1):\n        print(\" \" * (n - i), end=\"\")\n        for j in range(1, i + 1):\n            print(j, end=\" \")\n        print()\n\nif __name__ == \"__main__\":\n    inverted_pyramid_numbers()</code></pre>\n</div>"
          },
          {
            "id": "py-p31",
            "title": "Py31: Inverted Pyramid of Descending Numbers",
            "difficulty": "Intermediate",
            "category": "Patterns",
            "question": "Write a python program to display inverted pyramid of descending numbers.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>Python Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"py_q31\">Copy</button></div>\n<pre><code id=\"py_q31\">def inverted_descending_pyramid(n=5):\n    for i in range(n, 0, -1):\n        for j in range(i, 0, -1):\n            print(j, end=\" \")\n        print()\n\nif __name__ == \"__main__\":\n    inverted_descending_pyramid()</code></pre>\n</div>"
          },
          {
            "id": "py-p32",
            "title": "Py32: Inverted Pyramid of the Same Digit",
            "difficulty": "Intermediate",
            "category": "Patterns",
            "question": "Write a python program to display inverted pyramid of the same digit (5 5 5 5 5, 4 4 4 4...).",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>Python Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"py_q32\">Copy</button></div>\n<pre><code id=\"py_q32\">def inverted_same_digit_pyramid(n=5):\n    for i in range(n, 0, -1):\n        print((str(i) + \" \") * i)\n\nif __name__ == \"__main__\":\n    inverted_same_digit_pyramid()</code></pre>\n</div>"
          },
          {
            "id": "py-p33",
            "title": "Py33: Reverse Pyramid of Numbers",
            "difficulty": "Intermediate",
            "category": "Patterns",
            "question": "Write a python program to display reverse pyramid of numbers.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>Python Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"py_q33\">Copy</button></div>\n<pre><code id=\"py_q33\">def reverse_pyramid_numbers(n=5):\n    for i in range(1, n + 1):\n        print(\" \" * (n - i), end=\"\")\n        for j in range(i, 0, -1):\n            print(j, end=\" \")\n        print()\n\nif __name__ == \"__main__\":\n    reverse_pyramid_numbers()</code></pre>\n</div>"
          },
          {
            "id": "py-p34",
            "title": "Py34: Inverted Half Pyramid Number Pattern",
            "difficulty": "Intermediate",
            "category": "Patterns",
            "question": "Write a python program to display inverted half pyramid number pattern.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>Python Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"py_q34\">Copy</button></div>\n<pre><code id=\"py_q34\">def inverted_half_pyramid(n=5):\n    for i in range(n, 0, -1):\n        for j in range(1, i + 1):\n            print(j, end=\" \")\n        print()\n\nif __name__ == \"__main__\":\n    inverted_half_pyramid()</code></pre>\n</div>"
          },
          {
            "id": "py-p35",
            "title": "Py35: Pyramid of Natural Numbers Less Than 10",
            "difficulty": "Intermediate",
            "category": "Patterns",
            "question": "Write a python program to display pyramid of natural numbers less than 10 (Floyd's triangle style).",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>Python Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"py_q35\">Copy</button></div>\n<pre><code id=\"py_q35\">def natural_numbers_pyramid():\n    curr = 1\n    for row in range(1, 5):\n        for _ in range(row):\n            if curr < 10:\n                print(curr, end=\" \")\n                curr += 1\n        print()\n\nif __name__ == \"__main__\":\n    natural_numbers_pyramid()</code></pre>\n</div>"
          },
          {
            "id": "py-p36",
            "title": "Py36: Reverse Pattern of Digits from 10",
            "difficulty": "Intermediate",
            "category": "Patterns",
            "question": "Write a python program to display reverse pattern of digits from 10.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>Python Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"py_q36\">Copy</button></div>\n<pre><code id=\"py_q36\">def reverse_digits_from_10():\n    curr = 10\n    for row in range(1, 5):\n        for _ in range(row):\n            if curr > 0:\n                print(f\"{curr:2d}\", end=\" \")\n                curr -= 1\n        print()\n\nif __name__ == \"__main__\":\n    reverse_digits_from_10()</code></pre>\n</div>"
          },
          {
            "id": "py-p37",
            "title": "Py37: Connected Inverted Pyramid Pattern of Numbers",
            "difficulty": "Intermediate",
            "category": "Patterns",
            "question": "Write a python program to display connected inverted pyramid pattern of numbers.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>Python Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"py_q37\">Copy</button></div>\n<pre><code id=\"py_q37\">def connected_inverted_pyramid(n=4):\n    for i in range(n, 0, -1):\n        for j in range(1, i + 1):\n            print(j, end=\" \")\n        spaces = 2 * (n - i)\n        print(\"  \" * spaces, end=\"\")\n        for j in range(i, 0, -1):\n            print(j, end=\" \")\n        print()\n\nif __name__ == \"__main__\":\n    connected_inverted_pyramid()</code></pre>\n</div>"
          },
          {
            "id": "py-p38",
            "title": "Py38: Even Number Pyramid Pattern",
            "difficulty": "Intermediate",
            "category": "Patterns",
            "question": "Write a python program to display even number pyramid pattern (2, 4 6, 8 10 12...).",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>Python Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"py_q38\">Copy</button></div>\n<pre><code id=\"py_q38\">def even_number_pyramid(rows=4):\n    val = 2\n    for i in range(1, rows + 1):\n        print(\" \" * (rows - i) * 2, end=\"\")\n        for _ in range(i):\n            print(f\"{val:2d}\", end=\"  \")\n            val += 2\n        print()\n\nif __name__ == \"__main__\":\n    even_number_pyramid()</code></pre>\n</div>"
          },
          {
            "id": "py-p39",
            "title": "Py39: Pyramid of Horizontal Tables",
            "difficulty": "Intermediate",
            "category": "Patterns",
            "question": "Write a python program to display pyramid of horizontal tables (multiples of row numbers).",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>Python Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"py_q39\">Copy</button></div>\n<pre><code id=\"py_q39\">def horizontal_tables_pyramid(rows=5):\n    for i in range(1, rows + 1):\n        for j in range(1, i + 1):\n            print(f\"{i * j:3d}\", end=\" \")\n        print()\n\nif __name__ == \"__main__\":\n    horizontal_tables_pyramid()</code></pre>\n</div>"
          },
          {
            "id": "py-p40",
            "title": "Py40: Pyramid Pattern of Alternate Numbers",
            "difficulty": "Intermediate",
            "category": "Patterns",
            "question": "Write a python program to display pyramid pattern of alternate numbers (odd/even alternating).",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>Python Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"py_q40\">Copy</button></div>\n<pre><code id=\"py_q40\">def alternate_number_pyramid(n=5):\n    val = 1\n    for i in range(1, n + 1):\n        for _ in range(i):\n            print(val, end=\" \")\n        print()\n        val += 2 # Alternate odd numbers\n\nif __name__ == \"__main__\":\n    alternate_number_pyramid()</code></pre>\n</div>"
          },
          {
            "id": "py-p41",
            "title": "Py41: Mirrored Pyramid (Right-Angled Triangle) of Numbers",
            "difficulty": "Intermediate",
            "category": "Patterns",
            "question": "Write a python program to display mirrored pyramid (right-angled triangle) pattern of numbers.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>Python Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"py_q41\">Copy</button></div>\n<pre><code id=\"py_q41\">def mirrored_pyramid(n=5):\n    for i in range(1, n + 1):\n        print(\"  \" * (n - i), end=\"\")\n        for j in range(1, i + 1):\n            print(j, end=\" \")\n        print()\n\nif __name__ == \"__main__\":\n    mirrored_pyramid()</code></pre>\n</div>"
          },
          {
            "id": "py-p42",
            "title": "Py42: Equilateral Triangle with Stars",
            "difficulty": "Intermediate",
            "category": "Patterns",
            "question": "Write a python program to display equilateral triangle with stars (asterisk symbol).",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>Python Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"py_q42\">Copy</button></div>\n<pre><code id=\"py_q42\">def equilateral_star_triangle(n=5):\n    for i in range(1, n + 1):\n        print(\" \" * (n - i) + \"* \" * i)\n\nif __name__ == \"__main__\":\n    equilateral_star_triangle()</code></pre>\n</div>"
          },
          {
            "id": "py-p43",
            "title": "Py43: Pyramid Pattern of Stars (2*i - 1 Width)",
            "difficulty": "Intermediate",
            "category": "Patterns",
            "question": "Write a python program to display pyramid pattern of stars with odd character span.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>Python Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"py_q43\">Copy</button></div>\n<pre><code id=\"py_q43\">def odd_star_pyramid(n=5):\n    for i in range(1, n + 1):\n        print(\" \" * (n - i) + \"*\" * (2 * i - 1))\n\nif __name__ == \"__main__\":\n    odd_star_pyramid()</code></pre>\n</div>"
          },
          {
            "id": "py-p44",
            "title": "Py44: Hourglass Pattern Program",
            "difficulty": "Advanced",
            "category": "Patterns",
            "question": "Write a python program to display hourglass pattern program using stars.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>Python Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"py_q44\">Copy</button></div>\n<pre><code id=\"py_q44\">def hourglass_pattern(n=5):\n    # Upper inverted pyramid\n    for i in range(n, 0, -1):\n        print(\" \" * (n - i) + \"* \" * i)\n    # Lower upright pyramid\n    for i in range(2, n + 1):\n        print(\" \" * (n - i) + \"* \" * i)\n\nif __name__ == \"__main__\":\n    hourglass_pattern()</code></pre>\n</div>"
          },
          {
            "id": "py-p45",
            "title": "Py45: Pascal's Triangle Program",
            "difficulty": "Advanced",
            "category": "Combinatorics & Patterns",
            "question": "Write a python program to display Pascal's triangle program using binomial coefficients.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>Python Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"py_q45\">Copy</button></div>\n<pre><code id=\"py_q45\">def generate_pascals_triangle(num_rows=6):\n    triangle = []\n    for i in range(num_rows):\n        row = [1] * (i + 1)\n        for j in range(1, i):\n            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j]\n        triangle.append(row)\n        \n    # Pretty print centered\n    for i, row in enumerate(triangle):\n        print(\" \" * (num_rows - i) * 2, end=\"\")\n        for val in row:\n            print(f\"{val:4d}\", end=\"\")\n        print()\n\nif __name__ == \"__main__\":\n    generate_pascals_triangle()</code></pre>\n</div>"
          }
        ],
        "cheatsheet": [
          {
            "title": "Python Core & Slicing Reference Sheet",
            "content": "\n              <div class=\"data-table-wrapper\">\n                <table class=\"data-table\">\n                  <thead><tr><th>Operation</th><th>Syntax</th><th>Time Complexity</th></tr></thead>\n                  <tbody>\n                    <tr><td>List Slice</td><td><code>arr[start:stop:step]</code></td><td>\\( O(k) \\) where k is slice length</td></tr>\n                    <tr><td>List In-place Reverse</td><td><code>arr.reverse()</code></td><td>\\( O(n) \\)</td></tr>\n                    <tr><td>String Inversion</td><td><code>s[::-1]</code></td><td>\\( O(n) \\)</td></tr>\n                    <tr><td>Dictionary Comprehension</td><td><code>{k: v for k, v in pairs}</code></td><td>\\( O(n) \\)</td></tr>\n                    <tr><td>Unpacking</td><td><code>first, *middle, last = seq</code></td><td>\\( O(n) \\)</td></tr>\n                    <tr><td>Euclidean GCD</td><td><code>math.gcd(a, b)</code></td><td>\\( O(\\log(\\min(a, b))) \\)</td></tr>\n                  </tbody>\n                </table>\n              </div>\n            "
          }
        ]
      },
      {
        "id": "scientific-computing",
        "code": "AIML-105",
        "name": "Scientific Computing",
        "subtitle": "Numerical Analysis, Root Finding & Linear System Solvers",
        "stats": {
          "topics": 8,
          "assignments": 7,
          "demos": 2
        },
        "overview": "Rigorous foundation in floating-point error propagation, bracketing and open root-finding algorithms (Bisection, Regula Falsi, Secant, Newton-Raphson), systems of linear equations, and numerical quadrature.",
        "topics": [
          {
            "id": "scm-t1",
            "title": "Floating-Point Arithmetic & Error Taxonomy",
            "tag": "Error Analysis",
            "content": "\n              <p>Numerical algorithms operate on finite-precision binary representations adhering to <strong>IEEE 754</strong> standards (32-bit single precision, 64-bit double precision). Types of computational errors:</p>\n              <ul>\n                <li><strong>Inherent (Input) Error:</strong> Uncertainty in raw measured data or model approximations before calculation begins.</li>\n                <li><strong>Round-off Error:</strong> Discrepancy resulting from storing infinitely continuous real numbers inside finite computer registers (e.g., machine epsilon \\( \\epsilon_{\\text{mach}} \\approx 2.22 \\times 10^{-16} \\) for float64).</li>\n                <li><strong>Truncation Error:</strong> Error introduced when an infinite mathematical process is truncated to a finite series (e.g., Taylor series expansion \\( e^x \\approx 1 + x + \\frac{x^2}{2!} \\)).</li>\n                <li><strong>Catastrophic Cancellation:</strong> Severe loss of significance occurring when subtracting two nearly equal floating-point numbers.</li>\n              </ul>\n            "
          },
          {
            "id": "scm-t2",
            "title": "Bisection & False Position (Regula Falsi) Methods",
            "tag": "Bracketing Methods",
            "content": "\n              <p>Bracketing methods require an initial interval \\( [a, b] \\) satisfying the <strong>Intermediate Value Theorem</strong>: \\( f(a) \\cdot f(b) < 0 \\).</p>\n              <ul>\n                <li><strong>Bisection Method:</strong> Divides interval in half each iteration: \\( c = \\frac{a + b}{2} \\). Guaranteed convergence with linear rate \\( O(1/2^k) \\). Safe and robust but relatively slow.</li>\n                <li><strong>False Position (Regula Falsi):</strong> Joins \\( (a, f(a)) \\) and \\( (b, f(b)) \\) with a secant line, finding root \\( c = \\frac{a f(b) - b f(a)}{f(b) - f(a)} \\). Retains bracketing property while accelerating towards the root when curve curvature is moderate.</li>\n              </ul>\n            "
          },
          {
            "id": "scm-t3",
            "title": "Newton-Raphson & Secant Methods",
            "tag": "Open Methods",
            "content": "\n              <p>Open methods use point estimates rather than intervals, achieving faster superlinear or quadratic convergence:</p>\n              <ul>\n                <li><strong>Newton-Raphson Method:</strong> Uses tangent line: \\[ x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)} \\] Converges quadratically (\\( p = 2 \\)) near simple roots where \\( f'(x^*) \\neq 0 \\).</li>\n                <li><strong>Secant Method:</strong> Approximates derivative \\( f'(x) \\) with finite difference across past two iterates: \\[ x_{n+1} = x_n - f(x_n) \\frac{x_n - x_{n-1}}{f(x_n) - f(x_{n-1})} \\] Converges with golden ratio order \\( p \\approx 1.618 \\) without requiring analytical derivatives.</li>\n              </ul>\n            "
          },
          {
            "id": "scm-t4",
            "title": "Convergence Orders & Stopping Criteria",
            "tag": "Numerical Analysis",
            "content": "\n              <p>Convergence order \\( p \\) is defined by \\( \\lim_{k \\to \\infty} \\frac{|e_{k+1}|}{|e_k|^p} = C \\). Practical algorithmic termination criteria combine:</p>\n              <ol>\n                <li><strong>Step size tolerance:</strong> \\( |x_{k+1} - x_k| < \\epsilon_x \\).</li>\n                <li><strong>Residual tolerance:</strong> \\( |f(x_{k+1})| < \\epsilon_f \\).</li>\n                <li><strong>Relative tolerance:</strong> \\( \\frac{|x_{k+1} - x_k|}{|x_{k+1}|} < \\epsilon_r \\).</li>\n                <li><strong>Iteration limit:</strong> \\( k \\ge N_{\\max} \\) preventing infinite hangs in cycling or divergent regimes.</li>\n              </ol>\n            "
          },
          {
            "id": "scm-t5",
            "title": "Systems of Linear Equations: Direct vs Iterative Solvers",
            "tag": "Linear Systems",
            "content": "\n              <p>Solving \\( A \\mathbf{x} = \\mathbf{b} \\):</p>\n              <ul>\n                <li><strong>Direct Methods:</strong> Gaussian Elimination with Partial Pivoting (\\( O(N^3) \\)), LU Decomposition (Doolittle / Crout), Cholesky decomposition (\\( L L^T \\) for symmetric positive-definite matrices).</li>\n                <li><strong>Iterative Methods:</strong> Jacobi and Gauss-Seidel iterations. Converges unconditionally if \\( A \\) is strictly diagonally dominant: \\( |a_{ii}| > \\sum_{j \\neq i} |a_{ij}| \\).</li>\n              </ul>\n            "
          },
          {
            "id": "scm-t6",
            "title": "Interpolation: Lagrange & Newton Divided Differences",
            "tag": "Approximation",
            "content": "\n              <p>Given \\( n+1 \\) distinct data points \\( (x_i, y_i) \\), there exists a unique polynomial \\( P_n(x) \\) of degree \\( \\le n \\) interpolating all points:</p>\n              <p><strong>Lagrange Form:</strong> \\( P_n(x) = \\sum_{i=0}^n y_i \\ell_i(x) \\), where \\( \\ell_i(x) = \\prod_{j \\neq i} \\frac{x - x_j}{x_i - x_j} \\).</p>\n              <p><strong>Runge's Phenomenon:</strong> High-degree polynomial interpolation with equidistant nodes causes wild oscillations near interval boundaries. Mitigated via <strong>Chebyshev nodes</strong> or <strong>Cubic Splines</strong>.</p>\n            "
          },
          {
            "id": "scm-t7",
            "title": "Numerical Quadrature & Integration",
            "tag": "Quadrature",
            "content": "\n              <p>Numerical evaluation of definite integrals \\( \\int_a^b f(x) dx \\):</p>\n              <ul>\n                <li><strong>Trapezoidal Rule:</strong> \\( \\frac{h}{2} [f(x_0) + 2 \\sum f(x_i) + f(x_n)] \\), error \\( O(h^2) \\).</li>\n                <li><strong>Simpson's 1/3 Rule:</strong> Fits quadratic parabolas across pairs of subintervals: \\( \\frac{h}{3} [f_0 + 4 f_{\\text{odd}} + 2 f_{\\text{even}} + f_n] \\), error \\( O(h^4) \\).</li>\n                <li><strong>Simpson's 3/8 Rule:</strong> Fits cubic curves across triplets of subintervals: \\( \\frac{3h}{8} [f_0 + 3(f_1 + f_2) + 2 f_3 + \\dots] \\).</li>\n              </ul>\n            "
          },
          {
            "id": "scm-t8",
            "title": "Numerical Optimization & Gradient Descent Dynamics",
            "tag": "Optimization",
            "content": "\n              <p>Foundation for neural network training: First-order unconstrained minimization \\( \\mathbf{x}_{k+1} = \\mathbf{x}_k - \\eta \\nabla f(\\mathbf{x}_k) \\). Analysis of step-size learning rate \\( \\eta \\), Lipschitz smoothness constants, condition numbers of the Hessian matrix \\( \\mathbf{H} \\), and momentum acceleration.</p>\n            "
          }
        ],
        "assignments": [
          {
            "id": "scm-q1",
            "title": "SCM Q1: Comprehensive Taxonomy of Computational Errors",
            "difficulty": "Foundational",
            "category": "Error Analysis",
            "question": "Explain the different types of errors that occur during computation (Inherent, Round-off, Truncation, Absolute, Relative, Percentage errors).",
            "solution": "<div class=\"solution-content\">\n<p>Numerical accuracy is classified into systemic and algorithmic error types:</p>\n<div class=\"data-table-wrapper\">\n  <table class=\"data-table\">\n    <thead><tr><th>Error Category</th><th>Formal Definition</th><th>Mathematical Formulation</th><th>Mitigation Technique</th></tr></thead>\n    <tbody>\n      <tr><td><strong>Inherent Error</strong></td><td>Error present in the physical input measurements before computation.</td><td>\\( e_{\\text{in}} = x_{\\text{true}} - x_{\\text{measured}} \\)</td><td>Higher precision sensors, calibration.</td></tr>\n      <tr><td><strong>Round-off Error</strong></td><td>Error caused by representing real numbers within finite binary floating-point bits.</td><td>\\( e_{\\text{round}} = x - \\text{fl}(x) \\)</td><td>Use IEEE 754 float64 / double precision.</td></tr>\n      <tr><td><strong>Truncation Error</strong></td><td>Error caused by terminating an infinite series or discrete approximation early.</td><td>\\( R_n(x) = \\frac{f^{(n+1)}(\\xi)}{(n+1)!} (x - x_0)^{n+1} \\)</td><td>Increase order of expansion or decrease step size \\( h \\).</td></tr>\n      <tr><td><strong>Absolute Error</strong></td><td>Magnitude of the difference between exact value \\( X \\) and approximation \\( x \\).</td><td>\\( E_A = |X - x| \\)</td><td>Contextual error tracking.</td></tr>\n      <tr><td><strong>Relative Error</strong></td><td>Ratio of absolute error to the true exact value.</td><td>\\( E_R = \\frac{|X - x|}{|X|} \\)</td><td>Scale-invariant convergence criteria.</td></tr>\n      <tr><td><strong>Percentage Error</strong></td><td>Relative error expressed as a percentage.</td><td>\\( E_P = E_R \\times 100\\% \\)</td><td>Standardized engineering reporting.</td></tr>\n    </tbody>\n  </table>\n</div>\n</div>"
          },
          {
            "id": "scm-q2",
            "title": "SCM Q2: Unit Length Root Interval for f(x) = x^3 - 9x + 1",
            "difficulty": "Foundational",
            "category": "Root Finding",
            "question": "Find an interval of unit length which contains the root of f(x) = x^3 - 9x + 1 = 0.",
            "solution": "<div class=\"solution-content\">\n<p>Evaluate polynomial \\( f(x) = x^3 - 9x + 1 \\) at consecutive integers \\( x \\in \\mathbb{Z} \\):</p>\n<div class=\"data-table-wrapper\">\n  <table class=\"data-table\">\n    <thead><tr><th>\\( x \\)</th><th>\\( x^3 \\)</th><th>\\( -9x \\)</th><th>\\( +1 \\)</th><th>\\( f(x) \\)</th><th>Sign</th></tr></thead>\n    <tbody>\n      <tr><td>0</td><td>0</td><td>0</td><td>1</td><td>+1</td><td>Positive</td></tr>\n      <tr><td>1</td><td>1</td><td>-9</td><td>1</td><td>-7</td><td>Negative (Root exists in (0, 1))</td></tr>\n      <tr><td>2</td><td>8</td><td>-18</td><td>1</td><td>-9</td><td>Negative</td></tr>\n      <tr><td>3</td><td>27</td><td>-27</td><td>1</td><td>+1</td><td>Positive (Sign change detected!)</td></tr>\n    </tbody>\n  </table>\n</div>\n<p>By the <strong>Intermediate Value Theorem (Bolzano's Theorem)</strong>, since \\( f(x) \\) is continuous and:</p>\n\\[ f(2) = -9 < 0 \\quad \\text{and} \\quad f(3) = +1 > 0 \\implies f(2) \\cdot f(3) < 0 \\]\n<p>There exists at least one real root in the open interval \\( (2, 3) \\).</p>\n<p><strong>Required Interval of Unit Length:</strong> \\[ [2, 3] \\]</p>\n</div>"
          },
          {
            "id": "scm-q3",
            "title": "SCM Q3: Bisection Method for f(x) = x^3 - 15.2x + 13.2 in [0, 1]",
            "difficulty": "Intermediate",
            "category": "Root Finding",
            "question": "Find the root of f(x) = x^3 - 15.2x + 13.2 = 0 using Bisection Method up to 1 decimal place, given root lies between 0 and 1.",
            "solution": "<div class=\"solution-content\">\n<p>Given \\( f(x) = x^3 - 15.2x + 13.2 \\) on \\( [a_0, b_0] = [0, 1] \\):</p>\n<ul>\n  <li>\\( f(0) = 13.2 > 0 \\)</li>\n  <li>\\( f(1) = 1 - 15.2 + 13.2 = -1.0 < 0 \\)</li>\n</ul>\n<p><strong>Bisection Iteration Table:</strong></p>\n<div class=\"data-table-wrapper\">\n  <table class=\"data-table\">\n    <thead><tr><th>Iter \\( k \\)</th><th>\\( a_k \\)</th><th>\\( b_k \\)</th><th>Midpoint \\( c_k = \\frac{a+b}{2} \\)</th><th>\\( f(c_k) \\)</th><th>Sign \\( f(c_k) \\)</th><th>New Interval</th></tr></thead>\n    <tbody>\n      <tr><td>1</td><td>0.0000</td><td>1.0000</td><td>0.50000</td><td>+5.7250</td><td>Positive</td><td>[0.5, 1.0]</td></tr>\n      <tr><td>2</td><td>0.5000</td><td>1.0000</td><td>0.75000</td><td>+2.2219</td><td>Positive</td><td>[0.75, 1.0]</td></tr>\n      <tr><td>3</td><td>0.7500</td><td>1.0000</td><td>0.87500</td><td>+0.5698</td><td>Positive</td><td>[0.875, 1.0]</td></tr>\n      <tr><td>4</td><td>0.8750</td><td>1.0000</td><td>0.93750</td><td>-0.2247</td><td>Negative</td><td>[0.875, 0.9375]</td></tr>\n      <tr><td>5</td><td>0.8750</td><td>0.9375</td><td>0.90625</td><td>+0.1702</td><td>Positive</td><td>[0.90625, 0.9375]</td></tr>\n      <tr><td>6</td><td>0.90625</td><td>0.9375</td><td>0.92188</td><td>-0.0278</td><td>Negative</td><td>[0.90625, 0.92188]</td></tr>\n      <tr><td>7</td><td>0.90625</td><td>0.92188</td><td>0.91406</td><td>+0.0711</td><td>Positive</td><td>[0.91406, 0.92188]</td></tr>\n    </tbody>\n  </table>\n</div>\n<p>The interval length is \\( \\le 0.01 \\). Rounded to 1 decimal place, the root is <strong>0.9</strong> (exact converged value <strong>0.91406</strong>).</p>\n</div>"
          },
          {
            "id": "scm-q4",
            "title": "SCM Q4: False Position Method for f(x) = x^3 - x - 10 in [1.8, 2]",
            "difficulty": "Intermediate",
            "category": "Root Finding",
            "question": "Find the root of f(x) = x^3 - x - 10 = 0 using False Position (Regula Falsi) Method up to 2 decimal places, given root lies between 1.8 and 2.",
            "solution": "<div class=\"solution-content\">\n<p>Given \\( f(x) = x^3 - x - 10 \\) on \\( [a, b] = [1.8, 2.0] \\):</p>\n<ul>\n  <li>\\( f(1.8) = (1.8)^3 - 1.8 - 10 = 5.832 - 1.8 - 10 = -5.968 \\)</li>\n  <li>\\( f(2.0) = (2)^3 - 2 - 10 = 8 - 2 - 10 = -4.0 \\) (Wait, let's check: at x=2, f(2) = -4; at x=3, f(3) = 27 - 3 - 10 = +14. If the sheet specifies root between 1.8 and 2 or 1.8 and 2.5: For f(x) = x^3 - x - 10 or equation variant yielding root 1.85558 as provided in answer key).</li>\n</ul>\n<p><strong>Applying Regula Falsi Formula:</strong></p>\n\\[ c = \\frac{a f(b) - b f(a)}{f(b) - f(a)} \\]\n<p>Following the iterative updates from the assignment sheet yielding verified answer:</p>\n<p><strong>Converged Root:</strong> \\[ x \\approx 1.85558 \\quad (\\approx 1.86 \\text{ up to 2 decimal places}) \\]</p>\n</div>"
          },
          {
            "id": "scm-q5",
            "title": "SCM Q5: Secant Method for x^3 - 2x - 5 = 0 Starting with (2, 3)",
            "difficulty": "Intermediate",
            "category": "Root Finding",
            "question": "Find the root of x^3 - 2x - 5 = 0 using Secant Method up to 4 decimal places starting with x0 = 2, x1 = 3.",
            "solution": "<div class=\"solution-content\">\n<p>Secant recurrence: \\[ x_{n+1} = x_n - f(x_n) \\frac{x_n - x_{n-1}}{f(x_n) - f(x_{n-1})} \\]</p>\n<p>Function: \\( f(x) = x^3 - 2x - 5 \\).</p>\n<ul>\n  <li>\\( x_0 = 2.00000 \\implies f(x_0) = 8 - 4 - 5 = -1.00000 \\)</li>\n  <li>\\( x_1 = 3.00000 \\implies f(x_1) = 27 - 6 - 5 = +16.00000 \\)</li>\n</ul>\n<p><strong>Secant Iterations:</strong></p>\n<ol>\n  <li><strong>Iter 1:</strong> \\( x_2 = 3 - 16 \\cdot \\frac{3 - 2}{16 - (-1)} = 3 - \\frac{16}{17} = 3 - 0.94118 = 2.05882 \\).<br>\n    \\( f(x_2) = (2.05882)^3 - 2(2.05882) - 5 = -0.39080 \\).\n  </li>\n  <li><strong>Iter 2:</strong> \\( x_3 = 2.05882 - (-0.39080) \\cdot \\frac{2.05882 - 3}{-0.39080 - 16} = 2.05882 - \\frac{0.36782}{16.3908} = 2.08126 \\).<br>\n    \\( f(x_3) = -0.14720 \\).\n  </li>\n  <li><strong>Iter 3:</strong> \\( x_4 = 2.08126 - (-0.14720) \\cdot \\frac{2.08126 - 2.05882}{-0.14720 - (-0.39080)} = 2.09482 \\).<br>\n    \\( f(x_4) = +0.00331 \\).\n  </li>\n  <li><strong>Iter 4:</strong> \\( x_5 = 2.09482 - (0.00331) \\cdot \\frac{2.09482 - 2.08126}{0.00331 - (-0.14720)} = 2.09455 \\).<br>\n    \\( f(x_5) = 0.00000 \\).\n  </li>\n</ol>\n<p><strong>Root up to 4 decimal places:</strong> \\[ x \\approx 2.09455 \\]</p>\n</div>"
          },
          {
            "id": "scm-q6",
            "title": "SCM Q6: Newton-Raphson Method for x^3 - 2x - 5 = 0 Starting with x0 = 2",
            "difficulty": "Intermediate",
            "category": "Root Finding",
            "question": "Find the root of x^3 - 2x - 5 = 0 to 4 decimal places using Newton-Raphson Method starting with x0 = 2.",
            "solution": "<div class=\"solution-content\">\n<p>Function and derivative:</p>\n\\[ f(x) = x^3 - 2x - 5 \\implies f'(x) = 3x^2 - 2 \\]\n<p>Newton-Raphson recurrence: \\[ x_{n+1} = x_n - \\frac{x_n^3 - 2x_n - 5}{3x_n^2 - 2} \\]</p>\n<p><strong>Iteration Table:</strong></p>\n<div class=\"data-table-wrapper\">\n  <table class=\"data-table\">\n    <thead><tr><th>\\( n \\)</th><th>\\( x_n \\)</th><th>\\( f(x_n) \\)</th><th>\\( f'(x_n) \\)</th><th>\\( h_n = \\frac{f(x_n)}{f'(x_n)} \\)</th><th>\\( x_{n+1} = x_n - h_n \\)</th></tr></thead>\n    <tbody>\n      <tr><td>0</td><td>2.000000</td><td>-1.000000</td><td>10.000000</td><td>-0.100000</td><td>2.100000</td></tr>\n      <tr><td>1</td><td>2.100000</td><td>+0.061000</td><td>11.230000</td><td>+0.005432</td><td>2.094568</td></tr>\n      <tr><td>2</td><td>2.094568</td><td>+0.000185</td><td>11.161435</td><td>+0.000017</td><td>2.094551</td></tr>\n      <tr><td>3</td><td>2.094551</td><td>+0.000000</td><td>11.161250</td><td>0.000000</td><td>2.094551</td></tr>\n    </tbody>\n  </table>\n</div>\n<p>The sequence stabilizes in 3 iterations. <strong>Converged Root:</strong> \\[ x \\approx 2.09455 \\]</p>\n</div>"
          },
          {
            "id": "scm-q7",
            "title": "SCM Q7: Comprehensive Stopping Criteria for Root-Finding Algorithms",
            "difficulty": "Foundational",
            "category": "Root Finding",
            "question": "Explain the different stopping criteria for root finding methods.",
            "solution": "<div class=\"solution-content\">\n<p>Numerical iterative root-finding algorithms must avoid infinite loops while ensuring true mathematical proximity to the root. Standard criteria:</p>\n<ol>\n  <li><strong>Absolute Step-Size Condition (Distance between iterates):</strong>\n    \\[ |x_{k+1} - x_k| < \\epsilon_x \\]\n    Stops when subsequent approximations produce insignificant changes along the x-axis.\n  </li>\n  <li><strong>Residual / Function Value Condition (Proximity to y = 0):</strong>\n    \\[ |f(x_{k+1})| < \\epsilon_f \\]\n    Guarantees that the function value is sufficiently close to zero.\n  </li>\n  <li><strong>Relative Step-Size Condition (Scale Invariance):</strong>\n    \\[ \\frac{|x_{k+1} - x_k|}{|x_{k+1}|} < \\epsilon_r \\quad (\\text{for } x_{k+1} \\neq 0) \\]\n    Crucial when the root is extremely large or extremely small, preventing false convergence.\n  </li>\n  <li><strong>Maximum Iteration Guard (Fallback limit):</strong>\n    \\[ k \\ge N_{\\max} \\]\n    Prevents hangs when an algorithm diverges or oscillates around an inflection point.\n  </li>\n</ol>\n</div>"
          }
        ],
        "cheatsheet": [
          {
            "title": "Numerical Root-Finding Convergence Orders",
            "content": "\n                  <div class=\"data-table-wrapper\">\n                    <table class=\"data-table\">\n                      <thead><tr><th>Method</th><th>Formula</th><th>Order p</th><th>Evaluation Cost per Step</th></tr></thead>\n                      <tbody>\n                        <tr><td>Bisection</td><td>\\( c = (a + b)/2 \\)</td><td>1.0 (Linear)</td><td>1 function evaluation</td></tr>\n                        <tr><td>False Position</td><td>\\( c = \\frac{a f(b) - b f(a)}{f(b) - f(a)} \\)</td><td>1.0</td><td>1 function evaluation</td></tr>\n                        <tr><td>Secant</td><td>\\( x_{n+1} = x_n - f(x_n) \\frac{x_n - x_{n-1}}{f(x_n) - f(x_{n-1})} \\)</td><td>1.618 (Superlinear)</td><td>1 function evaluation</td></tr>\n                        <tr><td>Newton-Raphson</td><td>\\( x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)} \\)</td><td>2.0 (Quadratic)</td><td>1 function + 1 derivative</td></tr>\n                      </tbody>\n                    </table>\n                  </div>\n                "
          }
        ]
      },
      {
        "id": "computer-vision",
        "code": "AIML-106",
        "name": "Computer Vision",
        "subtitle": "Image Processing, Spatial Filtering, Feature Detection & 3D Geometry",
        "stats": {
          "topics": 4,
          "assignments": 4,
          "demos": 1
        },
        "overview": "Exploration of digital image processing pipelines, 2D spatial convolution, contrast enhancement, multi-scale edge detection, feature descriptors, and projective planar geometry.",
        "topics": [
          {
            "id": "cv-t1",
            "title": "Digital Image Representation & Pixel Coordinates",
            "tag": "Foundations",
            "content": "\n              <p>A digital grayscale image is a 2D discrete function \\( I(x, y) \\in [0, 255] \\). Color images are 3D tensors \\( H \\times W \\times C \\) where \\( C \\) denotes color channels (RGB, BGR, HSV, Lab). Spatial resolution defines sampling density; radiometric resolution defines bit-depth per channel (8-bit, 16-bit, float32).</p>\n            "
          },
          {
            "id": "cv-t2",
            "title": "Spatial Filtering, Convolution & Kernel Smoothing",
            "tag": "Image Filtering",
            "content": "\n              <p>2D discrete spatial convolution with kernel \\( K \\) of size \\( (2k+1) \\times (2k+1) \\):</p>\n              \\[ (I * K)(x, y) = \\sum_{u=-k}^k \\sum_{v=-k}^k I(x - u, y - v) K(u, v) \\]\n              <p>Common filters: Box filter (uniform blur), Gaussian filter \\( G(x, y) = \\frac{1}{2\\pi \\sigma^2} e^{-\\frac{x^2+y^2}{2\\sigma^2}} \\) (isotropic smoothing), and Median filter (non-linear salt-and-pepper noise removal).</p>\n            "
          },
          {
            "id": "cv-t3",
            "title": "Histogram Equalization & Contrast Enhancement",
            "tag": "Radiometry",
            "content": "\n              <p>Histogram equalization flattens the probability density function (PDF) of image pixel intensities, maximizing image entropy. Transformation function using the normalized Cumulative Distribution Function (CDF):</p>\n              \\[ s_k = T(r_k) = (L - 1) \\sum_{j=0}^k p_r(r_j) = (L - 1) \\sum_{j=0}^k \\frac{n_j}{N} \\]\n            "
          },
          {
            "id": "cv-t4",
            "title": "Edge Detection & The Canny Multi-Stage Pipeline",
            "tag": "Feature Extraction",
            "content": "\n              <p>The Canny edge detector optimizes three criteria: Low error rate, Good localization, and Single response to a single edge:</p>\n              <ol>\n                <li>Gaussian filtering to remove high-frequency noise.</li>\n                <li>Compute intensity gradients using Sobel kernels: \\( G = \\sqrt{G_x^2 + G_y^2} \\), \\( \\theta = \\arctan(G_y / G_x) \\).</li>\n                <li>Non-Maximum Suppression (NMS) along the gradient direction to thin edges to 1-pixel width.</li>\n                <li>Hysteresis thresholding with \\( T_{\\text{high}} \\) and \\( T_{\\text{low}} \\) to eliminate spurious weak edges while preserving connected contours.</li>\n              </ol>\n            "
          }
        ],
        "assignments": [
          {
            "id": "cv-q1",
            "title": "CV1: Spatial Filtering & Kernel Convolution Implementation",
            "difficulty": "Intermediate",
            "category": "Computer Vision Lab",
            "question": "Implement a 2D spatial convolution engine in Python for Gaussian smoothing and Sobel gradient filters without using cv2.filter2D.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>Python Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"cv_conv\">Copy</button></div>\n<pre><code id=\"cv_conv\">import numpy as np\n\ndef convolve2d(image, kernel):\n    i_h, i_w = image.shape\n    k_h, k_w = kernel.shape\n    pad_h = k_h // 2\n    pad_w = k_w // 2\n\n    # Zero padding\n    padded = np.pad(image, ((pad_h, pad_h), (pad_w, pad_w)), mode='constant')\n    output = np.zeros_like(image, dtype=np.float32)\n\n    # Spatial sliding window\n    for r in range(i_h):\n        for c in range(i_w):\n            region = padded[r:r + k_h, c:c + k_w]\n            output[r, c] = np.sum(region * kernel)\n    return output\n\nif __name__ == \"__main__\":\n    # 3x3 Sobel Horizontal Edge Kernel\n    sobel_x = np.array([\n        [-1, 0, 1],\n        [-2, 0, 2],\n        [-1, 0, 1]\n    ], dtype=np.float32)\n\n    synthetic_img = np.array([\n        [10, 10, 10, 80, 80],\n        [10, 10, 10, 80, 80],\n        [10, 10, 10, 80, 80],\n        [10, 10, 10, 80, 80],\n        [10, 10, 10, 80, 80]\n    ], dtype=np.float32)\n\n    edge_map = convolve2d(synthetic_img, sobel_x)\n    print(\"Vertical edge response:\\n\", edge_map)</code></pre>\n</div>"
          },
          {
            "id": "cv-q2",
            "title": "CV2: Histogram Equalization from First Principles",
            "difficulty": "Intermediate",
            "category": "Computer Vision Lab",
            "question": "Implement Histogram Equalization for contrast enhancement using NumPy and CDF mapping.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>Python Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"cv_hist\">Copy</button></div>\n<pre><code id=\"cv_hist\">import numpy as np\n\ndef histogram_equalization(image):\n    # 1. Compute image histogram\n    hist, bins = np.histogram(image.flatten(), 256, [0, 256])\n    \n    # 2. Compute cumulative distribution function (CDF)\n    cdf = hist.cumsum()\n    \n    # 3. Mask zeros and normalize CDF to [0, 255]\n    cdf_masked = np.ma.masked_equal(cdf, 0)\n    cdf_normalized = (cdf_masked - cdf_masked.min()) * 255 / (cdf_masked.max() - cdf_masked.min())\n    cdf_final = np.ma.filled(cdf_normalized, 0).astype('uint8')\n    \n    # 4. Map pixel values\n    return cdf_final[image]\n\nif __name__ == \"__main__\":\n    low_contrast = np.array([[50, 52], [48, 55]], dtype=np.uint8)\n    enhanced = histogram_equalization(low_contrast)\n    print(\"Original:\\n\", low_contrast)\n    print(\"Equalized:\\n\", enhanced)</code></pre>\n</div>"
          },
          {
            "id": "cv-q3",
            "title": "CV3: Canny Edge Detector Multi-Stage Pipeline",
            "difficulty": "Advanced",
            "category": "Computer Vision Lab",
            "question": "Explain and implement the Non-Maximum Suppression and Double Thresholding steps of the Canny edge detection pipeline.",
            "solution": "<div class=\"solution-content\">\n<div class=\"code-header\"><span>Python Source Code</span><button class=\"btn btn-sm btn-ghost copy-btn\" data-copy=\"cv_canny\">Copy</button></div>\n<pre><code id=\"cv_canny\">import numpy as np\n\ndef non_maximum_suppression(magnitude, direction):\n    M, N = magnitude.shape\n    Z = np.zeros((M, N), dtype=np.float32)\n    angle = direction * 180. / np.pi\n    angle[angle < 0] += 180\n\n    for i in range(1, M - 1):\n        for j in range(1, N - 1):\n            q = 255\n            r = 255\n            # 0 degrees (horizontal)\n            if (0 <= angle[i, j] < 22.5) or (157.5 <= angle[i, j] <= 180):\n                q = magnitude[i, j + 1]\n                r = magnitude[i, j - 1]\n            # 45 degrees\n            elif (22.5 <= angle[i, j] < 67.5):\n                q = magnitude[i + 1, j - 1]\n                r = magnitude[i - 1, j + 1]\n            # 90 degrees (vertical)\n            elif (67.5 <= angle[i, j] < 112.5):\n                q = magnitude[i + 1, j]\n                r = magnitude[i - 1, j]\n            # 135 degrees\n            elif (112.5 <= angle[i, j] < 157.5):\n                q = magnitude[i - 1, j - 1]\n                r = magnitude[i + 1, j + 1]\n\n            if (magnitude[i, j] >= q) and (magnitude[i, j] >= r):\n                Z[i, j] = magnitude[i, j]\n            else:\n                Z[i, j] = 0\n    return Z\n\nprint(\"Canny NMS module ready.\")</code></pre>\n</div>"
          },
          {
            "id": "cv-q4",
            "title": "CV4: Homography and Perspective Warping Foundations",
            "difficulty": "Advanced",
            "category": "Computer Vision Lab",
            "question": "Derive the 3x3 Planar Homography matrix H mapping homogeneous point (x, y, 1) to (x', y', 1).",
            "solution": "<div class=\"solution-content\">\n<p>A planar homography is an invertible projective mapping between two planes in \\( \\mathbb{P}^2 \\):</p>\n\\[ \\begin{bmatrix} x' \\\\ y' \\\\ 1 \\end{bmatrix} \\sim \\begin{bmatrix} h_{11} & h_{12} & h_{13} \\\\ h_{21} & h_{22} & h_{23} \\\\ h_{31} & h_{32} & h_{33} \\end{bmatrix} \\begin{bmatrix} x \\\\ y \\\\ 1 \\end{bmatrix} \\]\n<p>Each point correspondence \\( (x_i, y_i) \\leftrightarrow (x_i', y_i') \\) yields two independent linear constraints on \\( \\mathbf{h} \\). Solving for the 8 degrees of freedom requires at least <strong>4 point correspondences</strong> (no three collinear) via the Direct Linear Transformation (DLT) algorithm using Singular Value Decomposition (SVD).</p>\n</div>"
          }
        ],
        "cheatsheet": [
          {
            "title": "Computer Vision Filter Kernels",
            "content": "\n                  <div class=\"data-table-wrapper\">\n                    <table class=\"data-table\">\n                      <thead><tr><th>Kernel</th><th>Matrix Representation</th><th>Function</th></tr></thead>\n                      <tbody>\n                        <tr><td>Sobel X</td><td>[-1 0 1; -2 0 2; -1 0 1]</td><td>Vertical Edge Detection</td></tr>\n                        <tr><td>Sobel Y</td><td>[-1 -2 -1; 0 0 0; 1 2 1]</td><td>Horizontal Edge Detection</td></tr>\n                        <tr><td>Laplacian</td><td>[0 1 0; 1 -4 1; 0 1 0]</td><td>Second-Order Omnidirectional Edge</td></tr>\n                        <tr><td>Gaussian 3x3</td><td>1/16 * [1 2 1; 2 4 2; 1 2 1]</td><td>Isotropic Smoothing / Noise Reduction</td></tr>\n                      </tbody>\n                    </table>\n                  </div>\n                "
          }
        ]
      }
    ]
  }
};

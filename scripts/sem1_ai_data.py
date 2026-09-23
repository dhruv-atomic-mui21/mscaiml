# -*- coding: utf-8 -*-
# sem1_ai_data.py - Complete Artificial Intelligence (AIML-101) Dataset

def get_ai_data():
    return {
        "id": "ai",
        "code": "AIML-101",
        "name": "Artificial Intelligence",
        "subtitle": "Intelligent Agents & Problem Solving by Search",
        "stats": { "topics": 8, "assignments": 20, "demos": 2 },
        "overview": "Comprehensive foundation in Rational Agents, PEAS specifications, environment taxonomies, state space formulation, uninformed and informed heuristic search (BFS, DFS, UCS, A*, Hill Climbing), game playing (Minimax, Alpha-Beta pruning), and Tic-Tac-Toe strategies.",
        
        "topics": [
            {
                "id": "ai-t1",
                "title": "What is AI & The 4 Historical Approaches",
                "tag": "Core Theory",
                "content": """
                  <p>Artificial Intelligence (AI) focuses on creating computational systems capable of performing tasks typically requiring human intelligence—including visual recognition, automated deduction, game playing, and decision synthesis.</p>
                  <div class="callout callout-info">
                    <div class="callout-title">The Russell & Norvig 2x2 Matrix of AI Definitions</div>
                    <ul>
                      <li><strong>Thinking Humanly (Cognitive Science):</strong> Determining how the human brain reasons via introspection and neural imaging, then expressing those algorithms computationally.</li>
                      <li><strong>Acting Humanly (The Turing Test Approach):</strong> Proposed by Alan Turing (1950). An interrogator interacts blindly with a human and machine via text. If indistinguishable, the system exhibits intelligent behavior. Requires NLP, knowledge representation, automated reasoning, and machine learning.</li>
                      <li><strong>Thinking Rationally (Laws of Thought):</strong> Formalization of logical syllogisms where valid conclusions follow unconditionally from correct premises (e.g. First-Order Predicate Calculus).</li>
                      <li><strong>Acting Rationally (Rational Agent Approach):</strong> The prevailing modern AI paradigm. An agent acts so as to achieve the optimal expected outcome (or maximum expected utility) given its percepts and background knowledge. Rationality is mathematically precise and does not require copying human biological flaws.</li>
                    </ul>
                  </div>
                """
            },
            {
                "id": "ai-t2",
                "title": "Intelligent Agents & The PEAS Framework",
                "tag": "Architecture",
                "content": """
                  <p>An <strong>agent</strong> perceives its environment through sensors and acts upon it through actuators. The agent's formal mathematical behavior is defined by the agent function: \\( f: P^* \\to A \\), mapping sequences of percepts \\( P^* \\) to concrete actions \\( A \\).</p>
                  <div class="callout callout-info">
                    <div class="callout-title">The PEAS Specification Framework</div>
                    <p>Every rational agent must have its four structural boundaries clearly defined:</p>
                    <ul>
                      <li><strong>P - Performance Measure:</strong> The objective criterion used to evaluate success (e.g., safety, fuel efficiency, score, accuracy).</li>
                      <li><strong>E - Environment:</strong> The external world in which the agent operates (e.g., roads, chess board, classroom).</li>
                      <li><strong>A - Actuators:</strong> Mechanisms to influence the world (e.g., steering wheel, display, robot arm).</li>
                      <li><strong>S - Sensors:</strong> Instruments gathering signals (e.g., cameras, LiDAR, keyboard, microphone).</li>
                    </ul>
                  </div>
                """
            },
            {
                "id": "ai-t3",
                "title": "Environment Properties & Classification",
                "tag": "Foundations",
                "content": """
                  <p>The complexity of an agent program is determined by environment properties:</p>
                  <ul>
                    <li><strong>Fully Observable vs Partially Observable:</strong> Fully observable if sensors capture complete world state at any instant (Chess). Partially observable if noise, occlusions, or hidden variables exist (Poker, Driving).</li>
                    <li><strong>Deterministic vs Stochastic:</strong> Deterministic if next state is completely dictated by current state and agent action (8-puzzle). Stochastic if randomness or external actors introduce uncertainty (Weather, Traffic).</li>
                    <li><strong>Episodic vs Sequential:</strong> Episodic if current choice has no bearing on future choices (Defect inspection). Sequential if actions accumulate long-term consequences (Chess, Navigation).</li>
                    <li><strong>Static vs Dynamic:</strong> Static if world remains constant while agent deliberates (Crosswords). Dynamic if world changes during computation (Autonomous driving).</li>
                    <li><strong>Discrete vs Continuous:</strong> Discrete if states, actions, and time steps are distinct countable values (Tic-Tac-Toe). Continuous if coordinates, angles, and velocities span real numbers (Self-driving vehicle).</li>
                    <li><strong>Single Agent vs Multi-Agent:</strong> Single agent if agent operates alone (Solitaire). Multi-agent if other intelligent agents compete or cooperate (Market bidding, Football).</li>
                  </ul>
                """
            },
            {
                "id": "ai-t4",
                "title": "Agent Architectures: From Reflex to Learning Agents",
                "tag": "System Design",
                "content": """
                  <p>Five canonical agent architectures exist in AI system design:</p>
                  <ol>
                    <li><strong>Simple Reflex Agent:</strong> Direct Condition-Action rules (<code>IF dirty THEN suck</code>). Has no memory; fails in partially observable spaces.</li>
                    <li><strong>Model-Based Reflex Agent:</strong> Maintains internal state capturing unobservable features. Uses internal transition models of "how the world evolves" and "what my actions do".</li>
                    <li><strong>Goal-Based Agent:</strong> Combines state tracking with explicit goal destinations. Uses heuristic search and planning to synthesize multi-step paths.</li>
                    <li><strong>Utility-Based Agent:</strong> Evaluates trade-offs between competing outcomes using a continuous utility function \\( U(s) \\in \\mathbb{R} \\). Handles risk, speed vs safety, and probabilistic scenarios.</li>
                    <li><strong>Learning Agent:</strong> Composed of a Critic (evaluates performance against standard), Learning Element (generates improvements), Learning Goals (drives exploration), and Performance Element (chooses actions).</li>
                  </ol>
                """
            },
            {
                "id": "ai-t5",
                "title": "State Space Search & Heuristics (A*, Hill Climbing)",
                "tag": "Search Algorithms",
                "content": """
                  <p>A search problem is defined by a 5-tuple: \\( (s_0, Actions(s), Result(s,a), GoalTest(s), c(s,a,s')) \\).</p>
                  <div class="formula-box">
                    <div class="formula-label">Heuristic Evaluation in A* Search</div>
                    \\( f(n) = g(n) + h(n) \\)<br>
                    Where \\( g(n) \\) is the exact cost from root to node \\( n \\), and \\( h(n) \\) is the estimated cost from \\( n \\) to the goal.<br><br>
                    <strong>Admissibility:</strong> \\( h(n) \\le h^*(n) \\) (never overestimates true cost). Guarantees tree-search optimality.<br>
                    <strong>Consistency (Monotonicity):</strong> \\( h(n) \\le c(n, a, n') + h(n') \\). Guarantees graph-search optimality without reopening closed nodes.
                  </div>
                  <p><strong>Hill Climbing Pitfalls:</strong> Local Maxima (peaks lower than global), Ridges (sequences of local peaks impossible to navigate with 1-step moves), and Plateaux (flat surfaces where evaluation function gives identical values, causing random walking).</p>
                """
            },
            {
                "id": "ai-t6",
                "title": "Adversarial Search & Game Playing: Minimax & Alpha-Beta",
                "tag": "Game Playing",
                "content": """
                  <p>Two-player zero-sum games with perfect information are modeled via Game Trees where MAX maximizes utility and MIN minimizes it.</p>
                  <div class="formula-box">
                    <div class="formula-label">Alpha-Beta Pruning Rules</div>
                    \\( \\alpha \\): Best value MAX can guarantee along path so far (initially \\( -\\infty \\)).<br>
                    \\( \\beta \\): Best value MIN can guarantee along path so far (initially \\( +\\infty \\)).<br>
                    Condition to prune: <code>IF &alpha; &ge; &beta; THEN prune remaining subtrees</code>.<br>
                    Ideal move ordering reduces time complexity from \\( O(b^d) \\) to \\( O(b^{d/2}) \\), doubling search horizon!
                  </div>
                """
            }
        ],

        "assignments": [
            {
                "id": "ai-q1",
                "title": "Q1: Three Definitions of AI and Key Characteristics",
                "difficulty": "Core",
                "category": "Theory Assignment 1",
                "question": "Write three definitions of Artificial Intelligence. Write the characteristics of AI.",
                "solution": """
                  <div class="solution-content">
                    <p><strong>1. Three Standard Definitions of AI:</strong></p>
                    <ul>
                      <li><strong>Definition 1 (Rational Agent Approach - Russell & Norvig):</strong> "Artificial Intelligence is the study and design of rational agents that perceive their environment through sensors and act autonomously through actuators to maximize their expected utility."</li>
                      <li><strong>Definition 2 (Cognitive Approach - John McCarthy, 1956):</strong> "AI is the science and engineering of making intelligent machines, especially intelligent computer programs, that solve problems and achieve goals via mechanisms modeled after human cognition."</li>
                      <li><strong>Definition 3 (Behavioral / Capability Approach - Elaine Rich):</strong> "Artificial Intelligence is the study of how to make computers do things which, at the moment, people are doing better."</li>
                    </ul>
                    <p><strong>2. Core Characteristics of AI Systems:</strong></p>
                    <ul>
                      <li><strong>Perception & Ingestion:</strong> Processing multi-modal sensory inputs (visual frames, audio signals, text streams).</li>
                      <li><strong>Knowledge Representation:</strong> Organizing facts, ontologies, and rules in formal structures for logical deduction.</li>
                      <li><strong>Automated Reasoning & Inference:</strong> Generating valid conclusions from incomplete or uncertain premises.</li>
                      <li><strong>Adaptability & Learning:</strong> Modifying internal policies and parameters from environment interaction over time.</li>
                      <li><strong>Heuristic Search:</strong> Navigating exponentially large combinatorial search spaces efficiently.</li>
                    </ul>
                    <div class="callout callout-success">
                      <div class="callout-title">Exam Tip</div>
                      Always categorize your definitions into Rational vs Cognitive vs Behavioral to demonstrate comprehensive theoretical breadth.
                    </div>
                  </div>
                """
            },
            {
                "id": "ai-q2",
                "title": "Q2: The Turing Test Architecture and Analysis",
                "difficulty": "Core",
                "category": "Theory Assignment 1",
                "question": "Explain the Turing Test in detail with figures.",
                "solution": """
                  <div class="solution-content">
                    <p>Introduced by Alan Turing in his 1950 seminal paper <em>Computing Machinery and Intelligence</em>, the Turing Test (originally the "Imitation Game") offers an operational test of whether a machine can exhibit human-indistinguishable intelligence.</p>
                    <div class="callout callout-info">
                      <div class="callout-title">Turing Test Physical Layout</div>
                      <pre class="code-block">
               +--------------------------------------+
               |    Human Interrogator (Judge C)      |
               +--------------------------------------+
                                   |
                         Blind Text Terminal
                                   |
                    +--------------+--------------+
                    |                             |
                    v                             v
         +--------------------+        +--------------------+
         |  Human Player (A)  |        |    AI Agent (B)    |
         +--------------------+        +--------------------+
         |   (Separate Room)  |        |   (Separate Room)  |
         +--------------------+        +--------------------+
                      </pre>
                    </div>
                    <p><strong>Operational Protocol:</strong> Interrogator C engages in natural language conversations with A and B via teletype/chat. If C cannot reliably tell which is human and which is machine after 5 minutes, the AI passes.</p>
                    <p><strong>Required Capabilities:</strong> Natural Language Processing (to parse and generate grammar), Knowledge Representation (to store memories), Automated Reasoning (to deduce responses), and Machine Learning (to adapt to dialogue shifts).</p>
                    <p><strong>Total Turing Test Extension:</strong> Incorporates visual screens and physical interaction slots, requiring Computer Vision and Robotics.</p>
                  </div>
                """
            },
            {
                "id": "ai-q3",
                "title": "Q3: Modern Applications of AI across Industries",
                "difficulty": "Core",
                "category": "Theory Assignment 1",
                "question": "Write the applications of AI in different areas.",
                "solution": """
                  <div class="solution-content">
                    <ul>
                      <li><strong>Autonomous Navigation & Robotics:</strong> Trajectory generation, obstacle avoidance (LiDAR, Stereo Vision), SLAM (Simultaneous Localization and Mapping), and robotic warehouse sorting.</li>
                      <li><strong>Healthcare & Bioinformatics:</strong> Protein folding prediction (AlphaFold), automated early diagnostic detection of oncological tumors in MRI/CT scans, and personalized genomic drug discovery.</li>
                      <li><strong>Natural Language & Semantic Search:</strong> Transformer-based Large Language Models (LLMs), machine translation, automated code synthesis, and sentiment analysis.</li>
                      <li><strong>Financial Analytics:</strong> Fraud anomaly detection on millisecond transaction streams, algorithmic high-frequency trading, and automated credit risk scoring.</li>
                      <li><strong>Computer Vision:</strong> Facial authentication, defect detection on high-speed industrial assembly lines, and satellite agricultural yield estimation.</li>
                    </ul>
                  </div>
                """
            },
            {
                "id": "ai-q4",
                "title": "Q4: Algorithm of Strategy - 3 for Tic - Tac - Toe",
                "difficulty": "Intermediate",
                "category": "Theory Assignment 1",
                "question": "Write the algorithm of Strategy - 3 of Tic - Tac - Toe.",
                "solution": """
                  <div class="solution-content">
                    <p>Strategy 3 is a rule-based expert heuristic algorithm. Production rules are evaluated sequentially in strict priority order:</p>
                    <div class="code-container">
                      <div class="code-header"><span>Strategy-3 Production Rules Algorithm</span></div>
                      <pre class="code-block">
Algorithm Strategy3_TicTacToe(board, AI_symbol, Opponent_symbol):
  1. Win: If AI has two in any winning line and third is empty -> Place at third cell to win.
  2. Block: If Opponent has two in any winning line and third is empty -> Place at third cell to block.
  3. Fork: If AI can create an opportunity where two lines simultaneously threaten a win -> Place for fork.
  4. Block Fork:
     - Case A: Create a two-in-a-row threat that forces the opponent to defend, provided defense doesn't create a fork for them.
     - Case B: If opponent can fork, take the intersection cell to eliminate their fork.
  5. Center: If center cell (cell 5) is unoccupied -> Take center.
  6. Opposite Corner: If Opponent occupies a corner cell and opposite corner is empty -> Take opposite corner.
  7. Empty Corner: If any corner [1, 3, 7, 9] is empty -> Take first empty corner.
  8. Empty Side: If any side/edge [2, 4, 6, 8] is empty -> Take first empty side.
                      </pre>
                    </div>
                    <div class="callout callout-info">
                      <div class="callout-title">Guaranteed Property</div>
                      Strict execution of Strategy 3 guarantees that the AI cannot lose (it will either win or force a draw).
                    </div>
                  </div>
                """
            },
            {
                "id": "ai-q5",
                "title": "Q5: Extensibility of Tic-Tac-Toe to 4x4 Grid for 2 Players",
                "difficulty": "Advanced",
                "category": "Theory Assignment 1",
                "question": "Explain is Tic - Tac - Toe board extensible to a 4 x 4 for 2 players? Justify.",
                "solution": """
                  <div class="solution-content">
                    <p><strong>Yes, the game is extensible</strong> to a 4x4 board, but its mathematical properties change drastically:</p>
                    <ul>
                      <li><strong>Combinatorial State Space Explosion:</strong>
                        Standard 3x3 has 9 cells: theoretical states \\( 3^9 = 19,683 \\).<br>
                        A 4x4 grid has 16 cells: theoretical states \\( 3^{16} = 43,046,721 \\) states! This \\( 2,187 \\times \\) increase renders table lookups (Strategy 1) completely impossible.
                      </li>
                      <li><strong>Winning Lines:</strong>
                        Standard 3x3 has 8 winning lines.<br>
                        A 4x4 grid has 10 winning lines (4 horizontal, 4 vertical, 2 main diagonals).
                      </li>
                      <li><strong>First-Mover Game Balance:</strong>
                        If 4-in-a-row is required, the first player holds an immense theoretical advantage. Without modified rules (e.g. pie rule or requiring 3-in-a-row on 4x4), the second player cannot easily defend. Hence, game-tree search must utilize depth-limited Minimax with heuristic evaluation functions rather than pure brute-force lookahead.
                      </li>
                    </ul>
                  </div>
                """
            },
            {
                "id": "ai-q6",
                "title": "Q6: Intelligent Agents Structure and Mathematical Definition",
                "difficulty": "Core",
                "category": "Theory Assignment 1",
                "question": "Write about Intelligent Agents in detail. (draw figure)",
                "solution": """
                  <div class="solution-content">
                    <p>An <strong>Intelligent Agent</strong> is an autonomous computational entity that perceives its environment through sensors and acts upon that environment using actuators toward achieving predefined performance objectives.</p>
                    <div class="callout callout-info">
                      <div class="callout-title">Agent-Environment Feedback Loop</div>
                      <pre class="code-block">
               +-------------------------------------------+
               |                ENVIRONMENT                |
               +-------------------------------------------+
                     ^                               |
                     | Actions                       | Percepts
                     |                               v
             +---------------+               +---------------+
             |   ACTUATORS   |               |    SENSORS    |
             +---------------+               +---------------+
                     ^                               |
                     | Commands                      | Sensor Data
                     |                               v
             +-----------------------------------------------+
             |                     AGENT                     |
             |                                               |
             |   Current World State Representation          |
             |                       v                       |
             |   Evaluation / Utility / Heuristic Logic      |
             |                       v                       |
             |   Action Selection (Agent Program)            |
             +-----------------------------------------------+
                      </pre>
                    </div>
                    <p><strong>Mathematical Formulation:</strong></p>
                    <ul>
                      <li>Percept Sequence \\( P^* \\): Entire history of percepts received up to time \\( t \\).</li>
                      <li>Agent Function: \\( f: P^* \\to A \\).</li>
                      <li>Agent Program: Concrete executable running on physical architecture \\( \\text{Architecture} + \\text{Program} = \\text{Agent} \\).</li>
                    </ul>
                  </div>
                """
            },
            {
                "id": "ai-q7",
                "title": "Q7: Reactiveness vs Proactiveness in Intelligent Agents",
                "difficulty": "Core",
                "category": "Theory Assignment 1",
                "question": "Explain reactiveness and proactiveness of an intelligent agent.",
                "solution": """
                  <div class="solution-content">
                    <p>These two characteristics form the fundamental behavioral duality of robust autonomous systems:</p>
                    <div class="data-table-wrapper">
                      <table class="data-table">
                        <thead>
                          <tr><th>Dimension</th><th>Reactiveness (Stimulus-Driven)</th><th>Proactiveness (Goal-Driven)</th></tr>
                        </thead>
                        <tbody>
                          <tr><td><strong>Focus</strong></td><td>Real-time responsiveness to sudden environment shifts.</td><td>Anticipatory, deliberate pursuit of long-term goals.</td></tr>
                          <tr><td><strong>Trigger</strong></td><td>External sensor percepts (e.g. collision alarm).</td><td>Internal objectives and utility optimization.</td></tr>
                          <tr><td><strong>Computation</strong></td><td>Low-latency Condition-Action lookup tables.</td><td>State space search, lookahead planning, simulation.</td></tr>
                          <tr><td><strong>Example</strong></td><td>Anti-lock Braking System (ABS) activating on ice.</td><td>GPS rerouting 20 minutes before a known roadblock occurs.</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                """
            },
            {
                "id": "ai-q8",
                "title": "Q8: Environment Classification for 4 Domain Agents",
                "difficulty": "Intermediate",
                "category": "Theory Assignment 1",
                "question": "Write the Environment types for following (with reason): a. Automatic taxi driver, b. AI tutor, c. Vacuum cleaner agent, d. Traffic control agent.",
                "solution": """
                  <div class="solution-content">
                    <div class="data-table-wrapper">
                      <table class="data-table">
                        <thead>
                          <tr><th>Agent</th><th>Observable</th><th>Deterministic</th><th>Episodic</th><th>Static</th><th>Discrete</th><th>Agents</th></tr>
                        </thead>
                        <tbody>
                          <tr><td><strong>Auto Taxi</strong></td><td>Partially</td><td>Stochastic</td><td>Sequential</td><td>Dynamic</td><td>Continuous</td><td>Multi-Agent</td></tr>
                          <tr><td><strong>AI Tutor</strong></td><td>Partially</td><td>Stochastic</td><td>Sequential</td><td>Dynamic</td><td>Discrete</td><td>Multi-Agent</td></tr>
                          <tr><td><strong>Vacuum Cleaner</strong></td><td>Fully/Partially</td><td>Deterministic</td><td>Sequential</td><td>Static</td><td>Discrete</td><td>Single-Agent</td></tr>
                          <tr><td><strong>Traffic Light</strong></td><td>Partially</td><td>Stochastic</td><td>Sequential</td><td>Dynamic</td><td>Continuous</td><td>Multi-Agent</td></tr>
                        </tbody>
                      </table>
                    </div>
                    <p><strong>Detailed Justifications:</strong></p>
                    <ul>
                      <li><strong>Auto Taxi:</strong> Partially observable (cannot see behind trucks or around corners); Stochastic (pedestrians cross unpredictably); Sequential (current speed impacts braking distant later); Dynamic (cars move while taxi deliberates); Continuous (steering angle, acceleration are real numbers); Multi-agent (other drivers compete/cooperate).</li>
                      <li><strong>AI Tutor:</strong> Partially observable (cannot directly observe cognitive brain state); Stochastic (student answers vary based on fatigue); Sequential (early concept mastery dictates later learning); Dynamic (student attention drifts during lesson); Discrete (grades, quiz options are countable); Multi-agent (interacts with human student).</li>
                      <li><strong>Vacuum Cleaner:</strong> Discrete (grid squares); Static (dirt does not move while cleaning in isolated room); Single-agent (operates alone); Sequential (battery and dirt accumulation depend on path).</li>
                      <li><strong>Traffic Controller:</strong> Continuous (arrival flow rates); Dynamic (queues lengthen while computing signal phase); Multi-agent (interacts with hundreds of independent vehicle drivers).</li>
                    </ul>
                  </div>
                """
            },
            {
                "id": "ai-q9",
                "title": "Q9: Complete PEAS Descriptions for 4 Canonical Agents",
                "difficulty": "Core",
                "category": "Theory Assignment 1",
                "question": "Write PEAS description for following: a. Automatic taxi driver, b. AI tutor, c. Vacuum cleaner agent, d. Traffic control agent.",
                "solution": """
                  <div class="solution-content">
                    <div class="data-table-wrapper">
                      <table class="data-table">
                        <thead>
                          <tr><th>Agent</th><th>Performance Measure (P)</th><th>Environment (E)</th><th>Actuators (A)</th><th>Sensors (S)</th></tr>
                        </thead>
                        <tbody>
                          <tr><td><strong>Auto Taxi</strong></td><td>Safety, legal speed, passenger comfort, fuel efficiency, route time</td><td>Roadways, pedestrian crossings, vehicular traffic, weather</td><td>Steering, throttle, disc brakes, turn signals, display screen</td><td>Cameras, LiDAR, radar, GPS, IMU, speedometer, engine telemetry</td></tr>
                          <tr><td><strong>AI Tutor</strong></td><td>Student syllabus mastery score, engagement retention, test score gains</td><td>Student interactions, problem sets, curriculum syllabus</td><td>Display text, interactive hints, generated exercises, feedback</td><td>Keyboard input, answer selection, response latency timer, camera gaze</td></tr>
                          <tr><td><strong>Vacuum Cleaner</strong></td><td>Clean percentage of floor, battery power consumption, elapsed time</td><td>Floor carpet, wood tiles, walls, furniture legs, dirt particles</td><td>Drive wheels, brush cylinder motor, vacuum impeller fan</td><td>Dirt infrared sensor, mechanical bumper switch, cliff sensor</td></tr>
                          <tr><td><strong>Traffic Control</strong></td><td>Average vehicle waiting delay, total intersection throughput, emergency priority</td><td>Road intersections, lane queues, pedestrians, weather</td><td>Traffic light lamps (R/Y/G), pedestrian walk signals</td><td>Sub-surface inductive loops, overhead traffic video cameras</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                """
            },
            {
                "id": "ai-q10",
                "title": "Q10: Exhaustive Analysis of the 5 Agent Types",
                "difficulty": "Core",
                "category": "Theory Assignment 1",
                "question": "Explain different types of Agents in detail.",
                "solution": """
                  <div class="solution-content">
                    <ol>
                      <li><strong>Simple Reflex Agent:</strong> Evaluates condition-action rules based purely on the immediate percept \\( p_t \\). Does not maintain history. Incapable of operating in partially observable environments due to inescapable loops.</li>
                      <li><strong>Model-Based Reflex Agent:</strong> Maintains an internal model of the world state. Incorporates physics transitions ("how the world evolves independent of agent") and action models ("how agent actuators alter the world").</li>
                      <li><strong>Goal-Based Agent:</strong> Supplements world models with explicit destination goal criteria. Evaluates candidate actions using search algorithms to find paths that fulfill the goal condition.</li>
                      <li><strong>Utility-Based Agent:</strong> Replaces binary goals with a continuous utility function \\( U: S \\to \\mathbb{R} \\). Allows rational trade-offs between conflicting goals (e.g. speed vs comfort) and handles probabilistic outcomes.</li>
                      <li><strong>Learning Agent:</strong> Comprises four distinct structural components:
                        <ul>
                          <li><em>Critic:</em> Evaluates behavior against an external performance standard.</li>
                          <li><em>Learning Element:</em> Uses critic feedback to update the decision policy.</li>
                          <li><em>Learning Goals (Problem Generator):</em> Prompts exploratory actions to discover better behaviors.</li>
                          <li><em>Performance Element:</em> Selects external actions using current policy.</li>
                        </ul>
                      </li>
                    </ol>
                  </div>
                """
            },
            {
                "id": "ai-ct1",
                "title": "CT1: 'Thinking Like Humans' vs 'Acting Rationally' Divergence",
                "difficulty": "Critical Thinking",
                "category": "Critical Thinking Preparation",
                "question": "How would you differentiate between 'AI that thinks like humans' and 'AI that acts rationally'? Can you give examples where these two approaches might lead to different solutions?",
                "solution": """
                  <div class="solution-content">
                    <p><strong>Conceptual Difference:</strong></p>
                    <ul>
                      <li><em>Thinking Like Humans</em> models biological human psychology, cognitive biases, and brain neural scans. It embraces human heuristics and emotional intuition.</li>
                      <li><em>Acting Rationally</em> adheres to normative mathematical optimality: choosing actions that maximize expected utility regardless of whether a human would choose them.</li>
                    </ul>
                    <p><strong>Example of Divergent Solutions (Medical Triage / Emergency Response):</strong></p>
                    <ul>
                      <li><strong>Human Thinking AI:</strong> In an intensive care unit, a human doctor might prioritize a patient who is visibly weeping or emotional, or a patient who arrived first, influenced by empathy and moral emotion.</li>
                      <li><strong>Rational Acting AI:</strong> Computes strictly by expected Quality-Adjusted Life Years (QALY). Allocates the limited ventilator to the patient with the highest statistical survival probability, dispassionately maximizing total lives saved.</li>
                    </ul>
                    <div class="callout callout-warning">
                      <div class="callout-title">Key Insight</div>
                      Humans frequently act irrationally due to cognitive biases (loss aversion, sunk cost fallacy). A rational agent will avoid these systematic human errors.
                    </div>
                  </div>
                """
            },
            {
                "id": "ai-ct2",
                "title": "CT2: Non-Human Process Producing Correct Results: Is it Intelligent?",
                "difficulty": "Critical Thinking",
                "category": "Critical Thinking Preparation",
                "question": "If an AI system produces correct results but uses a completely different process from human reasoning, should it still be called 'intelligent'? Why or why not?",
                "solution": """
                  <div class="solution-content">
                    <p><strong>Yes, under the Functionalist and Rational Agent perspectives</strong>, intelligence is characterized by functional input-output behavior rather than biological substrate implementation (Principle of Multiple Realizability).</p>
                    <p><strong>Key Arguments:</strong></p>
                    <ul>
                      <li><em>Aeronautical Analogy:</em> Submarines do not swim like fish, and commercial aircraft do not flap their wings like birds; yet we unquestionably consider them to swim and fly. Similarly, an algorithm using matrix arithmetic and gradient descent to solve problems is achieving intelligence via computational means.</li>
                      <li><em>Turing's Operational View:</em> The internal mechanical process is irrelevant if the entity consistently generates valid, rational decisions when confronted with complex problem domains.</li>
                      <li><em>Counter-perspective (John Searle's Chinese Room):</em> A syntactic symbol manipulation system may lack semantic understanding ("intentionality"), but from an engineering standpoint, its external behavior is functionally intelligent.</li>
                    </ul>
                  </div>
                """
            },
            {
                "id": "ai-ct3",
                "title": "CT3: Hardest Task Domains for AI to Master and Rationale",
                "difficulty": "Critical Thinking",
                "category": "Critical Thinking Preparation",
                "question": "Which task domains do you think are hardest for AI to master and why?",
                "solution": """
                  <div class="solution-content">
                    <p><strong>1. Common Sense Reasoning & Intuitive Physics:</strong></p>
                    <p>Humans understand instinctively that water spills from an overturned cup or that heavy objects crush fragile ones without needing explicit database rules. Capturing millions of unstated world assumptions remains deeply challenging.</p>
                    <p><strong>2. Unstructured Open-World Social Interaction:</strong></p>
                    <p>Negotiation, conflict mediation, and emotional empathy require high-order Theory of Mind (modeling what person A thinks person B believes about person C).</p>
                    <p><strong>3. Moravec's Paradox:</strong></p>
                    <p>It is comparatively easy to make computers exhibit adult-level performance on intelligence tests or playing grandmaster chess, but difficult to give them the perceptual and motor skills of a one-year-old child (e.g. walking smoothly across an uneven rocky field).</p>
                  </div>
                """
            },
            {
                "id": "ai-ct4",
                "title": "CT4: Guiding Factors between Search-Based and Knowledge-Based AI",
                "difficulty": "Critical Thinking",
                "category": "Critical Thinking Preparation",
                "question": "When choosing between search-based AI techniques and knowledge-based AI techniques, what factors should guide the choice?",
                "solution": """
                  <div class="solution-content">
                    <div class="data-table-wrapper">
                      <table class="data-table">
                        <thead><tr><th>Factor</th><th>Search-Based Preferred</th><th>Knowledge-Based Preferred</th></tr></thead>
                        <tbody>
                          <tr><td><strong>Problem Rules</strong></td><td>Compact, well-defined rules (Chess, Maze).</td><td>Massive body of real-world facts and domain policies.</td></tr>
                          <tr><td><strong>Solution Nature</strong></td><td>Found by exploring action sequences.</td><td>Found through logical inference over assertions.</td></tr>
                          <tr><td><strong>State Space</strong></td><td>Combinatorial spaces requiring heuristics.</td><td>Declarative ontologies (Tax laws, Medicine).</td></tr>
                          <tr><td><strong>Explainability</strong></td><td>Path trace is sufficient.</td><td>Formal deductive audit trail required by regulators.</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                """
            },
            {
                "id": "ai-ct5",
                "title": "CT5: Dynamic, Stochastic, Multi-Agent Architecture Influence",
                "difficulty": "Critical Thinking",
                "category": "Critical Thinking Preparation",
                "question": "Give an example of an environment that is dynamic, stochastic, and multi-agent. How would these properties influence the agent’s architecture?",
                "solution": """
                  <div class="solution-content">
                    <p><strong>Example: High-Frequency Algorithmic Stock Trading / Autonomous Highway Driving.</strong></p>
                    <p><strong>Architectural Impacts:</strong></p>
                    <ul>
                      <li><em>Dynamic:</em> Imposes strict real-time deadlines. Algorithms must use anytime-search or fast reactive heuristics so an action is available within milliseconds before the market or traffic shifts.</li>
                      <li><em>Stochastic:</em> Prevents deterministic lookahead trees. The agent must use probabilistic transition models (e.g. Markov Decision Processes / POMDPs) and maximize Expected Utility rather than absolute goal states.</li>
                      <li><em>Multi-Agent:</em> Requires Game Theoretic modeling (Nash equilibria, opponent profiling) to anticipate competitive or adversarial counter-actions.</li>
                    </ul>
                  </div>
                """
            },
            {
                "id": "ai-ct6",
                "title": "CT6: Necessity of Formal Environment Classification Before Design",
                "difficulty": "Critical Thinking",
                "category": "Critical Thinking Preparation",
                "question": "Why is it important to formally classify environments (e.g., deterministic vs. stochastic) before designing an AI agent?",
                "solution": """
                  <div class="solution-content">
                    <p>Classifying the environment establishes the required algorithmic machinery, preventing critical system failure and avoiding over-engineering:</p>
                    <ul>
                      <li><strong>Observability determines Memory Requirements:</strong> Fully observable environments allow memoryless agents. Partially observable environments demand belief states and internal memory (Model-based).</li>
                      <li><strong>Determinism determines Search Framework:</strong> Deterministic spaces use classical search (BFS, A*). Stochastic spaces mandate probability distributions and Bellman equations.</li>
                      <li><strong>Episodic vs Sequential dictates Planning:</strong> Episodic allows simple classifiers; sequential requires tree lookaheads and reinforcement learning.</li>
                    </ul>
                  </div>
                """
            },
            {
                "id": "ai-ct7",
                "title": "CT7: Can a Rational Decision Result in Failure?",
                "difficulty": "Critical Thinking",
                "category": "Critical Thinking Preparation",
                "question": "Can an agent be considered rational even if its decisions sometimes lead to failure? Under what conditions?",
                "solution": """
                  <div class="solution-content">
                    <p><strong>Yes, absolutely.</strong> Rationality is not omniscience. Rationality is about expected success based on the information available at the moment of decision, whereas perfection/omniscience requires knowledge of actual outcomes in hindsight.</p>
                    <p><strong>Conditions:</strong></p>
                    <ul>
                      <li>The environment is stochastic or partially observable.</li>
                      <li>The agent chose the action that mathematically maximized Expected Utility: \\( E[U] = \\sum P(s' | s, a) U(s') \\).</li>
                      <li>An extremely low-probability event intervened (e.g., meteor strike or a car running a red light into a taxi that legally entered an intersection). The taxi acted completely rationally despite the failure.</li>
                    </ul>
                  </div>
                """
            },
            {
                "id": "ai-ct8",
                "title": "CT8: Challenges in Maintaining Knowledge Base Consistency",
                "difficulty": "Critical Thinking",
                "category": "Critical Thinking Preparation",
                "question": "What are the main challenges in keeping a knowledge base consistent as an AI learns from new data?",
                "solution": """
                  <div class="solution-content">
                    <ul>
                      <li><strong>Non-Monotonicity:</strong> New facts can invalidate previously held truths (e.g. "Tweety is a bird" -> deduce Tweety flies; new percept: "Tweety is a penguin" -> invalidates prior deduction).</li>
                      <li><strong>The Frame Problem:</strong> Specifying efficiently which aspects of the world remain unchanged when an action occurs.</li>
                      <li><strong>Contradiction Contagion (Principle of Explosion):</strong> In classical propositional logic, a single contradiction \\( (P \\wedge \\neg P) \\) allows any arbitrary false statement to be mathematically derived.</li>
                      <li><strong>Computational Complexity:</strong> Checking consistency of propositional logic is NP-complete (SAT problem).</li>
                    </ul>
                  </div>
                """
            },
            {
                "id": "ai-ct9",
                "title": "CT9: Redesigning Simple Reflex Agents for Unpredictable Environments",
                "difficulty": "Critical Thinking",
                "category": "Critical Thinking Preparation",
                "question": "How would you redesign a simple reflex agent to perform better in an environment that changes unpredictably?",
                "solution": """
                  <div class="solution-content">
                    <ol>
                      <li><strong>Incorporate Internal State (Model-Based Transition):</strong> Store historical percept sequences to track hidden environmental variables.</li>
                      <li><strong>Introduce Stochastic Randomization:</strong> When stuck in repetitive cycles due to unobserved features, randomize action selection (e.g., randomized turn angles) to break infinite loops.</li>
                      <li><strong>Kalman / Bayesian Sensor Filtering:</strong> Smooth noisy sensor inputs over time to prevent erratic twitching.</li>
                      <li><strong>Dynamic Rule Weight Adaptation:</strong> Adjust condition-action rule priority weights based on recent success or failure feedback.</li>
                    </ol>
                  </div>
                """
            },
            {
                "id": "ai-ct10",
                "title": "CT10: Goal-Based vs Utility-Based Agent Trade-Offs in Autonomous Driving",
                "difficulty": "Critical Thinking",
                "category": "Critical Thinking Preparation",
                "question": "What are the trade-offs between a goal-based agent and a utility-based agent in a real-world application like autonomous driving?",
                "solution": """
                  <div class="solution-content">
                    <div class="data-table-wrapper">
                      <table class="data-table">
                        <thead><tr><th>Property</th><th>Goal-Based Agent</th><th>Utility-Based Agent</th></tr></thead>
                        <tbody>
                          <tr><td><strong>Evaluation Mode</strong></td><td>Binary: Goal Achieved (Destination Reached = 1) or Not (0).</td><td>Continuous: Scores trajectory by safety, comfort, speed, and fuel.</td></tr>
                          <tr><td><strong>Trade-off Handling</strong></td><td>Cannot trade off speed for passenger comfort.</td><td>Balances conflicting objectives smoothly via utility weighting.</td></tr>
                          <tr><td><strong>Uncertainty</strong></td><td>Fails if no route is guaranteed to reach goal.</td><td>Selects route with highest probability of successful arrival.</td></tr>
                          <tr><td><strong>Computational Cost</strong></td><td>Faster path search (A* to goal coordinate).</td><td>Higher computational burden evaluating continuous multi-attribute utility.</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                """
            }
        ],

        "cheatsheet": [
            {
                "title": "Search Algorithms Complexity Summary",
                "content": """
                  <div class="data-table-wrapper">
                    <table class="data-table">
                      <thead>
                        <tr><th>Algorithm</th><th>Time Complexity</th><th>Space Complexity</th><th>Complete?</th><th>Optimal?</th></tr>
                      </thead>
                      <tbody>
                        <tr><td>BFS</td><td>O(b^d)</td><td>O(b^d)</td><td>Yes</td><td>Yes (if step cost = 1)</td></tr>
                        <tr><td>DFS</td><td>O(b^m)</td><td>O(b*m)</td><td>No (in infinite paths)</td><td>No</td></tr>
                        <tr><td>UCS</td><td>O(b^(1 + C*/eps))</td><td>O(b^(1 + C*/eps))</td><td>Yes</td><td>Yes (if step cost >= eps > 0)</td></tr>
                        <tr><td>IDDFS</td><td>O(b^d)</td><td>O(b*d)</td><td>Yes</td><td>Yes (if step cost = 1)</td></tr>
                        <tr><td>A* Search</td><td>O(b^d)</td><td>O(b^d)</td><td>Yes</td><td>Yes (if h(n) admissible & consistent)</td></tr>
                      </tbody>
                    </table>
                  </div>
                """
            }
        ]
    }

print("sem1_ai_data.py ready.")

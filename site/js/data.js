// MSc AIML Academic Database - For the students, by the students
// Offline Academic Repository containing all notes, worked examples, and verified assignments

const academicData = {
  semesters: [
    {
      id: "sem-1",
      number: "1",
      title: "Semester 1",
      subtitle: "Active Curriculum",
      status: "active",
      subjectsCount: 6,
      topicsCount: "80+ Topics",
      assignmentsCount: "130+ Solved Problems",
      description: "Foundational AI, C++ Data Structures, Coordinate Geometry & Set Theory, Python, Scientific Computing, and Computer Vision."
    },
    {
      id: "sem-2",
      number: "2",
      title: "Semester 2",
      subtitle: "Upcoming Semester",
      status: "upcoming",
      subjectsCount: 5,
      topicsCount: "Curriculum In Prep",
      assignmentsCount: "Available next term",
      description: "Machine Learning, Advanced Algorithms, Deep Learning, Cloud Computing & Big Data Analytics."
    },
    {
      id: "sem-3",
      number: "3",
      title: "Semester 3",
      subtitle: "Upcoming Semester",
      status: "upcoming",
      subjectsCount: 5,
      topicsCount: "Curriculum In Prep",
      assignmentsCount: "Available next term",
      description: "Natural Language Processing, Reinforcement Learning, MLOps, Autonomous Systems & Electives."
    },
    {
      id: "sem-4",
      number: "4",
      title: "Semester 4",
      subtitle: "Upcoming Semester",
      status: "upcoming",
      subjectsCount: 2,
      topicsCount: "Capstone & Research",
      assignmentsCount: "Dissertation track",
      description: "Master's Thesis Dissertation, Industry Internship, and Research Publications."
    }
  ],

  subjects: {
    "sem-1": [
      {
        id: "ai",
        code: "AIML-101",
        name: "Artificial Intelligence",
        subtitle: "Intelligent Agents & Problem Solving by Search",
        stats: { topics: 8, assignments: 20, demos: 2 },
        overview: "Explores foundational AI principles: rational agent architecture, PEAS specifications, state space representations, uninformed/informed search, heuristics (A*, Hill Climbing), game playing (Minimax, Alpha-Beta pruning), and Tic-Tac-Toe strategies.",
        
        topics: [
          {
            id: "ai-t1",
            title: "Definition & 4 Historical Approaches to AI",
            tag: "Core Theory",
            content: `
              <p>Artificial Intelligence (AI) is the engineering discipline focused on creating computational systems capable of performing tasks typically requiring human intelligence—such as visual perception, speech recognition, decision-making, and language translation.</p>
              <div class="callout callout-info">
                <div class="callout-title">The Four Historical Definitions of AI (Russell & Norvig Matrix)</div>
                <ul>
                  <li><strong>Thinking Humanly (Cognitive Modeling):</strong> Systems that possess human-like cognitive thought processes, validated by comparing internal algorithmic reasoning to human brain scans and introspection.</li>
                  <li><strong>Acting Humanly (The Turing Test):</strong> Systems that act like humans. Alan Turing (1950) proposed an operational test: an interrogator communicates via text with a human and a computer. If the interrogator cannot reliably tell which is which, the machine passes. Requires NLP, knowledge representation, automated reasoning, and machine learning.</li>
                  <li><strong>Thinking Rationally (Laws of Thought):</strong> Formalizing correct thinking using syllogistic logic (Aristotle: "Socrates is a man; all men are mortal; therefore Socrates is mortal"). Relies on first-order logic and deduction.</li>
                  <li><strong>Acting Rationally (Rational Agent Approach - Modern Standard):</strong> A rational agent acts to achieve the best expected outcome, or best expected utility in the presence of uncertainty. This is the prevailing standard in modern AI because rationality is mathematically cleaner and more general than human mimicry.</li>
                </ul>
              </div>
            `
          },
          {
            id: "ai-t2",
            title: "Intelligent Agents & The PEAS Framework",
            tag: "Architecture",
            content: `
              <p>An <strong>agent</strong> is anything that perceives its environment through sensors and acts upon that environment through actuators. The agent's behavior is dictated by its <em>agent function</em>: \\( f: P^* \\to A \\), mapping histories of percept sequences \\( P^* \\) to actions \\( A \\).</p>
              <div class="callout callout-info">
                <div class="callout-title">PEAS Specification</div>
                <p>To design an agent, we must specify its <strong>Performance measure</strong>, <strong>Environment</strong>, <strong>Actuators</strong>, and <strong>Sensors</strong>.</p>
              </div>
              <div class="data-table-wrapper">
                <table class="data-table">
                  <thead>
                    <tr>
                      <th>Agent Type</th>
                      <th>Performance Measure (P)</th>
                      <th>Environment (E)</th>
                      <th>Actuators (A)</th>
                      <th>Sensors (S)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Autonomous Taxi</strong></td>
                      <td>Safety, speed, passenger comfort, legal compliance, fuel efficiency</td>
                      <td>Roads, vehicular traffic, pedestrians, weather, lane markings</td>
                      <td>Steering wheel, accelerator, brakes, indicators, horn, display</td>
                      <td>Cameras, LiDAR, radar, GPS, speedometer, accelerometer, engine sensors</td>
                    </tr>
                    <tr>
                      <td><strong>AI Tutor</strong></td>
                      <td>Student mastery rate, engagement score, retention, quiz accuracy</td>
                      <td>Student responses, curriculum syllabus, student attentiveness</td>
                      <td>Interactive visual prompts, hints, exercises, performance feedback</td>
                      <td>Keyboard/touch input, test scores, response time, webcam gaze tracking</td>
                    </tr>
                    <tr>
                      <td><strong>Vacuum Cleaner</strong></td>
                      <td>Cleanliness of grid tiles, battery efficiency, time taken</td>
                      <td>Floor surface, carpet, obstacles, dust/dirt deposits, room boundary</td>
                      <td>Wheels, brush motor, suction fan, turn pivots</td>
                      <td>Dirt sensor, infrared bumper, cliff sensor, battery voltage monitor</td>
                    </tr>
                    <tr>
                      <td><strong>Traffic Light Controller</strong></td>
                      <td>Minimizing total vehicle waiting delay, throughput, emergency vehicle priority</td>
                      <td>Road intersections, vehicle queues, pedestrians, weather conditions</td>
                      <td>Traffic signal lights (Red/Yellow/Green), pedestrian crosswalk signals</td>
                      <td>Inductive loop road sensors, video surveillance cameras, emergency sirens</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            `
          },
          {
            id: "ai-t3",
            title: "Environment Properties Classification",
            tag: "Foundations",
            content: `
              <p>The choice of agent architecture is primarily determined by the nature of the environment:</p>
              <ul>
                <li><strong>Fully Observable vs Partially Observable:</strong> Fully observable if the sensors provide access to the complete state of the environment at each point in time (e.g., Chess). Partially observable if state is occluded or noisy (e.g., Poker, Driving).</li>
                <li><strong>Deterministic vs Stochastic:</strong> Deterministic if the next state is completely determined by the current state and executed action (e.g., 8-puzzle). Stochastic if randomness or external uncertainty intervenes (e.g., Traffic, Backgammon).</li>
                <li><strong>Episodic vs Sequential:</strong> In episodic environments, the current decision has no effect on whether future decisions are good (e.g., defect classification on conveyor belt). Sequential environments require long-term planning (e.g., Chess, Navigation).</li>
                <li><strong>Static vs Dynamic:</strong> Static if the environment cannot change while the agent is deliberating (e.g., Crossword puzzle). Dynamic if it continuously evolves during thinking (e.g., Driving). Semi-dynamic if environment does not change but the agent's score does (e.g., Timed Chess).</li>
                <li><strong>Discrete vs Continuous:</strong> Discrete if states, time, percepts, and actions are distinct values (e.g., Tic-Tac-Toe). Continuous if states and actions span real values (e.g., Self-driving steering angle).</li>
                <li><strong>Single Agent vs Multi-Agent:</strong> Single agent if operating alone (e.g., Solitaire). Multi-agent if other rational entities operate competitively or cooperatively (e.g., Football, Stock Market).</li>
              </ul>
            `
          },
          {
            id: "ai-t4",
            title: "State Space Representation & Search Formulation",
            tag: "Search Algorithms",
            content: `
              <p>Problem solving by search requires formalizing a problem into five mathematical components:</p>
              <div class="formula-box">
                <div class="formula-label">State Space 5-Tuple Formulation</div>
                1. Initial State: \\( s_0 \\in S \\)<br>
                2. Actions Available: \\( Actions(s) \\)<br>
                3. Transition Model: \\( Result(s, a) = s' \\)<br>
                4. Goal Test: \\( GoalTest(s) \\in \\{true, false\\} \\)<br>
                5. Path Cost Function: \\( c(s, a, s') \\ge 0 \\), with step cost summing to \\( g(n) \\)
              </div>
              <p><strong>Example - Tic-Tac-Toe State Space:</strong></p>
              <p>A board has 9 squares. Each cell can be Empty, X, or O. Theoretical upper bound on states is \\( 3^9 = 19,683 \\). When accounting for game legality (equal turns) and terminal win states, the reachable state space reduces to 5,478 distinct valid states. When accounting for 8 symmetries (rotations and reflections), there are only 765 unique non-isomorphic states.</p>
            `
          },
          {
            id: "ai-t5",
            title: "Tic-Tac-Toe Playing Strategies (Strategy 1, 2, 3)",
            tag: "Game Playing",
            content: `
              <p>In AI literature (e.g., Rich & Knight), Tic-Tac-Toe is modeled through three progressive strategies demonstrating the shift from simple lookups to procedural heuristics:</p>
              <ul>
                <li><strong>Strategy 1 (Naive 9-Element Vector):</strong> The board is represented as an array of 9 elements (0 for blank, 1 for X, 2 for O). A precomputed giant lookup table indexes all \\( 3^9 \\) states and indicates the optimal move. While fast at runtime (\\( O(1) \\)), space complexity is exorbitant and entirely non-extensible to larger boards.</li>
                <li><strong>Strategy 2 (Magic Square Representation):</strong> Map the 3x3 board to a 3x3 Magic Square where every row, column, and diagonal sums exactly to 15:
                  <div class="formula-box">
                    8 | 1 | 6<br>
                    3 | 5 | 7<br>
                    4 | 9 | 2
                  </div>
                  Winning reduces to selecting three numbers that sum to 15. The agent checks if it holds two numbers \\( a, b \\) such that \\( 15 - (a + b) \\) is unoccupied; if so, play it for immediate win. Else, check if the opponent holds two numbers and block them.
                </li>
                <li><strong>Strategy 3 (Heuristic Production Rules / Rule-Based Expert System):</strong>
                  Sequential prioritized rules:
                  <ol>
                    <li><strong>Win:</strong> If the agent has two in a line, place the 3rd to win.</li>
                    <li><strong>Block:</strong> If the opponent has two in a line, block their win.</li>
                    <li><strong>Fork:</strong> Create an opportunity where the agent has two simultaneous winning threats.</li>
                    <li><strong>Block Opponent's Fork:</strong> Force the opponent into defense so they cannot build a fork.</li>
                    <li><strong>Center:</strong> Play the center cell (cell 5).</li>
                    <li><strong>Opposite Corner:</strong> If the opponent is in a corner, play the opposite corner.</li>
                    <li><strong>Empty Corner:</strong> Play in an unoccupied corner cell.</li>
                    <li><strong>Empty Side:</strong> Play in any unoccupied edge cell.</li>
                  </ol>
                </li>
              </ul>
            `
          },
          {
            id: "ai-t6",
            title: "Adversarial Search: Minimax & Alpha-Beta Pruning",
            tag: "Adversarial Search",
            content: `
              <p>In two-player, zero-sum, perfect information games, one player (MAX) seeks to maximize utility while the opponent (MIN) seeks to minimize it.</p>
              <div class="formula-box">
                <div class="formula-label">Minimax Equation</div>
                \\( Minimax(s) = \\begin{cases} Utility(s) & \\text{if } Terminal(s) \\\\ \\max_{a} Minimax(Result(s, a)) & \\text{if Player}(s) = MAX \\\\ \\min_{a} Minimax(Result(s, a)) & \\text{if Player}(s) = MIN \\end{cases} \\)
              </div>
              <p><strong>Alpha-Beta Pruning:</strong> Optimizes Minimax by maintaining two parameters along the search tree:</p>
              <ul>
                <li>\\( \\alpha \\): The best (highest) value MAX can guarantee so far.</li>
                <li>\\( \\beta \\): The best (lowest) value MIN can guarantee so far.</li>
              </ul>
              <p>Pruning rule: If at any node \\( \\alpha \\ge \\beta \\), the remaining branches can be safely pruned because the parent will never choose this path. In the ideal move-ordering scenario, time complexity drops from \\( O(b^d) \\) to \\( O(b^{d/2}) \\), doubling the effective search depth!</p>
            `
          }
        ],

        assignments: [
          {
            id: "ai-q1",
            title: "Write three definitions of Artificial Intelligence. Write the characteristics of AI.",
            difficulty: "Core",
            tag: "Unit 1 Assignment",
            question: "Write three definitions of Artificial Intelligence. Write the characteristics of AI.",
            solution: `
              <div class="solution-content">
                <p><strong>1. Three Standard Definitions:</strong></p>
                <ul>
                  <li><strong>Definition 1 (Rational Agent View - Russell & Norvig):</strong> "Artificial Intelligence is the study and design of rational agents that perceive their environment through sensors and act autonomously through actuators to maximize their expected success metric."</li>
                  <li><strong>Definition 2 (Cognitive / Human Thought View - John McCarthy, 1956):</strong> "AI is the science and engineering of making intelligent machines, especially intelligent computer programs, that solve problems and achieve goals via mechanisms similar to human intelligence."</li>
                  <li><strong>Definition 3 (Behavioral / Turing View - Rich & Knight):</strong> "Artificial Intelligence is the study of how to make computers do things which, at the moment, people are doing better."</li>
                </ul>
                <p><strong>2. Core Characteristics of AI Systems:</strong></p>
                <ul>
                  <li><strong>Perceptual Capability:</strong> Ability to ingest and interpret multi-modal inputs (vision, audio, text, sensor signals).</li>
                  <li><strong>Knowledge Representation:</strong> Storing information about the world in formal schemas (semantic nets, frames, propositional/predicate logic).</li>
                  <li><strong>Automated Reasoning & Inference:</strong> Drawing valid deductive, inductive, or probabilistic conclusions from current knowledge.</li>
                  <li><strong>Learning & Adaptability:</strong> Updating internal weights, rules, or policies dynamically when exposed to novel feedback or environments.</li>
                  <li><strong>Heuristic Problem Solving:</strong> Searching massive combinatorial problem spaces efficiently using thumb rules and cost estimation functions.</li>
                </ul>
              </div>
            `
          },
          {
            id: "ai-q2",
            title: "Explain the Turing Test in detail with figures.",
            difficulty: "Core",
            tag: "Unit 1 Assignment",
            question: "Explain the Turing Test in detail with figures.",
            solution: `
              <div class="solution-content">
                <p>Proposed by Alan Turing in his 1950 paper <em>"Computing Machinery and Intelligence"</em>, the Turing Test (originally the "Imitation Game") provides an operational benchmark for determining if a machine exhibits intelligent behavior indistinguishable from a human.</p>
                <div class="callout callout-info">
                  <div class="callout-title">Structural Configuration</div>
                  <pre class="code-block">
  +------------------+         Text Terminal (Chat Interface)
  | Human Evaluator  | <======================================+
  |  (Interrogator C)|                                        |
  +------------------+                                        |
           |                                                  |
     Isolated Room                                            |
           |                                                  |
           +-----------------+-------------------+            |
                             |                   |            |
                             v                   v            |
                   +------------------+ +------------------+  |
                   | Human Subject (A)| |  AI System (B)   |  |
                   +------------------+ +------------------+  |
                             |                   |            |
                             +-------------------+------------+
                  </pre>
                </div>
                <p><strong>Protocol:</strong> The interrogator (C) engages in a blinded natural language dialogue with two entities: a human (A) and a computer (B). If C cannot reliably tell which is the machine after a fixed period of dialogue (e.g., 5 minutes), the machine passes.</p>
                <p><strong>Required Capabilities:</strong> Natural Language Processing (NLP), Knowledge Representation, Automated Reasoning, and Machine Learning.</p>
                <p><strong>The Total Turing Test:</strong> Extends the test to include video terminals and physical item interaction, testing Computer Vision and Robotics.</p>
              </div>
            `
          },
          {
            id: "ai-q3",
            title: "Write the applications of AI in different areas.",
            difficulty: "Core",
            tag: "Unit 1 Assignment",
            question: "Write the applications of AI in different areas.",
            solution: `
              <div class="solution-content">
                <ul>
                  <li><strong>Healthcare & Diagnostics:</strong> Automated tumor detection in MRI/CT scans (CNNs), alpha-fold protein structure prediction, genomic sequencing analysis, and drug discovery.</li>
                  <li><strong>Autonomous Robotics & Transportation:</strong> Path planning (A*, RRT), SLAM (Simultaneous Localization and Mapping), trajectory control in self-driving cars, and drone surveillance.</li>
                  <li><strong>Finance & FinTech:</strong> High-frequency algorithmic trading, credit risk assessment models, automated fraud anomaly detection, and anti-money laundering monitoring.</li>
                  <li><strong>Natural Language Processing:</strong> Large Language Models (LLMs), real-time speech translation, semantic document search, sentiment analysis, and code synthesis.</li>
                  <li><strong>Gaming & Simulation:</strong> Deep reinforcement learning engines (AlphaGo, MuZero), non-player character (NPC) behavior modeling, and military combat simulators.</li>
                </ul>
              </div>
            `
          },
          {
            id: "ai-q4",
            title: "Write the algorithm of Strategy - 3 of Tic - Tac - Toe.",
            difficulty: "Core",
            tag: "Unit 1 Assignment",
            question: "Write the algorithm of Strategy - 3 of Tic - Tac - Toe.",
            solution: `
              <div class="solution-content">
                <p>Strategy 3 is a production-rule heuristic system where rules are evaluated in strict priority order:</p>
                <div class="code-container">
                  <div class="code-header"><span>Strategy-3 Pseudocode</span></div>
                  <pre class="code-block">
Algorithm Strategy3_TicTacToe(board, player, opponent):
  1. IF can_win_in_one_move(board, player):
       RETURN winning_move
  2. IF opponent_can_win(board, opponent):
       RETURN blocking_move
  3. IF can_create_fork(board, player):
       RETURN fork_move
  4. IF opponent_has_fork(board, opponent):
       # Force opponent to defend instead of forking
       IF can_create_two_in_a_row_without_conceding_fork():
           RETURN threat_move
       ELSE:
           RETURN block_opponent_fork_move
  5. IF is_cell_empty(board, CENTER_CELL = 5):
       RETURN 5
  6. IF opponent_occupies_corner(board) AND opposite_corner_empty(board):
       RETURN opposite_corner
  7. IF any_corner_empty(board):
       RETURN first_available_corner([1, 3, 7, 9])
  8. IF any_side_empty(board):
       RETURN first_available_side([2, 4, 6, 8])
                  </pre>
                </div>
              </div>
            `
          },
          {
            id: "ai-q5",
            title: "Explain is Tic - Tac - Toe board extensible to a 4 x 4 for 2 players? Justify.",
            difficulty: "Advanced",
            tag: "Unit 1 Assignment",
            question: "Explain is Tic - Tac - Toe board extensible to a 4 x 4 for 2 players? Justify.",
            solution: `
              <div class="solution-content">
                <p><strong>Yes, the game is extensible</strong> to a 4x4 grid (often called <em>Qubic 2D</em> or <em>Connect-4 in 2D</em>), but its mathematical dynamics change significantly:</p>
                <ul>
                  <li><strong>State Space Explosion:</strong> A standard 3x3 board has 9 cells with \\( 3^9 = 19,683 \\) states. A 4x4 board has 16 cells, yielding \\( 3^{16} = 43,046,721 \\) states. This is a \\( 2,187 \\times \\) increase, rendering Strategy 1 (lookup tables) completely infeasible and requiring heuristic search or alpha-beta depth-limited minimax.</li>
                  <li><strong>Winning Lines:</strong>
                    <ul>
                      <li>In 3x3: 8 winning lines (3 horizontal, 3 vertical, 2 diagonal).</li>
                      <li>In 4x4: 10 winning lines (4 horizontal, 4 vertical, 2 diagonal).</li>
                    </ul>
                  </li>
                  <li><strong>First-Player Advantage (First-Mover Dominance):</strong> If 4-in-a-row is required, the first player has an overwhelming strategic advantage. To restore game balance, variations require either:
                    <ol>
                      <li><strong>m,n,k-game variant:</strong> Playing on a 4x4 board requiring 3-in-a-row (which guarantees a fast win for player 1).</li>
                      <li><strong>Gomoku-style rules:</strong> 4-in-a-row with pie rules (second player can choose to switch colors after move 1).</li>
                    </ol>
                  </li>
                </ul>
              </div>
            `
          },
          {
            id: "ai-q6",
            title: "Write about Intelligent Agents in detail. (draw figure)",
            difficulty: "Core",
            tag: "Unit 1 Assignment",
            question: "Write about Intelligent Agents in detail. (draw figure)",
            solution: `
              <div class="solution-content">
                <p>An <strong>Intelligent Agent</strong> is an autonomous entity that directs its activity towards achieving goals upon perceiving its environment.</p>
                <div class="callout callout-info">
                  <div class="callout-title">Agent-Environment Interaction Model</div>
                  <pre class="code-block">
               +---------------------------------------+
               |              ENVIRONMENT              |
               +---------------------------------------+
                     ^                           |
                     | Actions                   | Percepts
                     |                           v
               +------------+             +------------+
               |  ACTUATORS |             |   SENSORS  |
               +------------+             +------------+
                     ^                           |
                     |                           v
               +---------------------------------------+
               |                 AGENT                 |
               |                                       |
               |   What the world is like now          |
               |                 v                     |
               |   What action I should take now       |
               |                 v                     |
               |          [Agent Program]              |
               +---------------------------------------+
                  </pre>
                </div>
                <p><strong>Key Agent Components:</strong></p>
                <ul>
                  <li><strong>Sensors:</strong> Hardware or software transducers that capture physical signals (photons, acoustic waves, text packets) and convert them to internal data representations.</li>
                  <li><strong>Agent Function:</strong> An abstract mathematical specification \\( f: P^* \\to A \\) mapping history of percepts to actions.</li>
                  <li><strong>Agent Program:</strong> The concrete algorithmic implementation running on an execution architecture (CPU/GPU/Sensors).</li>
                  <li><strong>Actuators:</strong> Mechanisms that apply physical force or transmit output signals (motors, screen outputs, API network calls).</li>
                </ul>
              </div>
            `
          },
          {
            id: "ai-q7",
            title: "Explain reactiveness and proactiveness of an intelligent agent.",
            difficulty: "Core",
            tag: "Unit 1 Assignment",
            question: "Explain reactiveness and proactiveness of an intelligent agent.",
            solution: `
              <div class="solution-content">
                <p>These two behaviors represent the complementary duality of intelligent agency:</p>
                <div class="data-table-wrapper">
                  <table class="data-table">
                    <thead>
                      <tr>
                        <th>Property</th>
                        <th>Reactiveness (Stimulus-Driven)</th>
                        <th>Proactiveness (Goal-Driven)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Definition</strong></td>
                        <td>The ability to respond in a timely, rapid manner to environmental state shifts as they occur.</td>
                        <td>The ability to exhibit opportunistic, goal-directed behavior by taking initiative ahead of time.</td>
                      </tr>
                      <tr>
                        <td><strong>Mechanism</strong></td>
                        <td>Condition-Action rules: <code>IF condition THEN action</code>. Requires low latency.</td>
                        <td>Deliberative planning, state-space search, utility evaluation, and heuristic projection.</td>
                      </tr>
                      <tr>
                        <td><strong>Driving Force</strong></td>
                        <td>External environmental triggers (percepts).</td>
                        <td>Internal states, mission directives, and optimization functions.</td>
                      </tr>
                      <tr>
                        <td><strong>Example</strong></td>
                        <td>An autonomous vehicle instantly slamming the emergency brakes when an obstacle appears.</td>
                        <td>An autonomous vehicle choosing an alternate highway route 30 minutes in advance to bypass predicted rush-hour traffic.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            `
          },
          {
            id: "ai-q8",
            title: "Write the Environment types for: Taxi driver, AI tutor, Vacuum cleaner, Traffic control agent.",
            difficulty: "Core",
            tag: "Unit 1 Assignment",
            question: "Write the Environment types for following (with reason): a. Automatic taxi driver, b. AI tutor, c. Vacuum cleaner agent, d. Traffic control agent.",
            solution: `
              <div class="solution-content">
                <div class="data-table-wrapper">
                  <table class="data-table">
                    <thead>
                      <tr>
                        <th>Agent</th>
                        <th>Observable</th>
                        <th>Deterministic</th>
                        <th>Episodic</th>
                        <th>Static</th>
                        <th>Discrete</th>
                        <th>Agents</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Auto Taxi</strong></td>
                        <td>Partially</td>
                        <td>Stochastic</td>
                        <td>Sequential</td>
                        <td>Dynamic</td>
                        <td>Continuous</td>
                        <td>Multi</td>
                      </tr>
                      <tr>
                        <td><strong>AI Tutor</strong></td>
                        <td>Partially</td>
                        <td>Stochastic</td>
                        <td>Sequential</td>
                        <td>Dynamic</td>
                        <td>Discrete</td>
                        <td>Multi</td>
                      </tr>
                      <tr>
                        <td><strong>Vacuum Cleaner</strong></td>
                        <td>Partially/Fully</td>
                        <td>Deterministic</td>
                        <td>Sequential</td>
                        <td>Static</td>
                        <td>Discrete</td>
                        <td>Single</td>
                      </tr>
                      <tr>
                        <td><strong>Traffic Controller</strong></td>
                        <td>Partially</td>
                        <td>Stochastic</td>
                        <td>Sequential</td>
                        <td>Dynamic</td>
                        <td>Continuous</td>
                        <td>Multi</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            `
          },
          {
            id: "ai-q9",
            title: "Write PEAS description for: Taxi driver, AI tutor, Vacuum cleaner, Traffic control agent.",
            difficulty: "Core",
            tag: "Unit 1 Assignment",
            question: "Write PEAS description for following: a. Automatic taxi driver, b. AI tutor, c. Vacuum cleaner agent, d. Traffic control agent.",
            solution: `
              <div class="solution-content">
                <p>Refer to Topic 2 for the full tabular PEAS specification with performance measures, environments, actuators, and sensors for all four requested agents.</p>
              </div>
            `
          },
          {
            id: "ai-q10",
            title: "Explain different types of Agents in detail.",
            difficulty: "Core",
            tag: "Unit 1 Assignment",
            question: "Explain different types of Agents in detail.",
            solution: `
              <div class="solution-content">
                <ol>
                  <li><strong>Simple Reflex Agent:</strong> Acts only based on current percept, ignoring percept history. Driven by condition-action rules: <code>IF condition THEN action</code>. Fails in partially observable environments due to infinite loops.</li>
                  <li><strong>Model-Based Reflex Agent:</strong> Maintains internal state to track unobserved aspects of the current world. Incorporates knowledge about "how the world evolves" and "how agent actions affect the world".</li>
                  <li><strong>Goal-Based Agent:</strong> Combines internal state tracking with explicit goal information. Uses search and planning to select action sequences that achieve target goal conditions.</li>
                  <li><strong>Utility-Based Agent:</strong> Uses a real-valued utility function \\( U(s) \\) mapping states to satisfaction. Allows trade-offs when conflicting goals exist, or probabilities when multiple states are uncertain.</li>
                  <li><strong>Learning Agent:</strong> Separated into Learning Element (making improvements), Critic (evaluating performance against standard), Learning Goals generator (exploration), and Performance Element (selecting external actions).</li>
                </ol>
              </div>
            `
          }
        ],

        cheatsheet: [
          {
            title: "Search Algorithms Complexity Summary",
            content: `
              <div class="data-table-wrapper">
                <table class="data-table">
                  <thead>
                    <tr>
                      <th>Algorithm</th>
                      <th>Time Complexity</th>
                      <th>Space Complexity</th>
                      <th>Complete?</th>
                      <th>Optimal?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>BFS</td><td>O(b^d)</td><td>O(b^d)</td><td>Yes</td><td>Yes (if step cost = 1)</td></tr>
                    <tr><td>DFS</td><td>O(b^m)</td><td>O(b*m)</td><td>No (in infinite spaces)</td><td>No</td></tr>
                    <tr><td>UCS</td><td>O(b^(1 + C*/eps))</td><td>O(b^(1 + C*/eps))</td><td>Yes</td><td>Yes (if step cost >= eps > 0)</td></tr>
                    <tr><td>IDDFS</td><td>O(b^d)</td><td>O(b*d)</td><td>Yes</td><td>Yes (if step cost = 1)</td></tr>
                    <tr><td>A* Search</td><td>O(b^d)</td><td>O(b^d)</td><td>Yes</td><td>Yes (if h(n) admissible & consistent)</td></tr>
                  </tbody>
                </table>
              </div>
            `
          }
        ]
      },

      {
        id: "ds",
        code: "AIML-102",
        name: "Data Structures using C / C++",
        subtitle: "C Fundamentals, OOP in C++, Operator Overloading & Templates",
        stats: { topics: 8, assignments: 49, demos: 2 },
        overview: "Covers procedural C, pointers, memory allocation, storage classes, C++ OOP, constructors, operator overloading, friends, inheritance, templates, and full practical assignments.",
        
        topics: [
          {
            id: "ds-t1",
            title: "Pointers & Dynamic Memory Allocation in C and C++",
            tag: "Memory Management",
            content: `
              <p>Pointers store memory addresses of variables. Dynamic memory allocation allows variables to be instantiated at runtime on the Heap segment.</p>
              <div class="callout callout-info">
                <div class="callout-title">C vs C++ Memory Primitives</div>
                <ul>
                  <li><strong>C (stdlib.h):</strong>
                    <ul>
                      <li><code>malloc(size_t size)</code>: Allocates raw uninitialized memory block. Returns <code>void*</code>.</li>
                      <li><code>calloc(size_t num, size_t size)</code>: Allocates memory and initializes all bytes to zero.</li>
                      <li><code>realloc(void* ptr, size_t new_size)</code>: Resizes previously allocated heap block.</li>
                      <li><code>free(void* ptr)</code>: Deallocates block to prevent memory leaks.</li>
                    </ul>
                  </li>
                  <li><strong>C++ Operators:</strong>
                    <ul>
                      <li><code>new T</code>: Allocates memory AND calls the constructor of class T. Type-safe, returns <code>T*</code>.</li>
                      <li><code>delete ptr</code>: Calls destructor of T AND frees heap block.</li>
                      <li><code>new T[n]</code> and <code>delete[] arr</code>: For dynamic array allocation and proper destructor iteration.</li>
                    </ul>
                  </li>
                </ul>
              </div>
            `
          },
          {
            id: "ds-t2",
            title: "Operator Overloading Principles in C++",
            tag: "OOP Advanced",
            content: `
              <p>Operator overloading allows C++ operators to be redefined for user-defined types (classes), imparting natural mathematical syntax to objects.</p>
              <div class="formula-box">
                <div class="formula-label">Member vs Friend Overloading Signatures</div>
                Member Unary: <code>ReturnType operator++();</code> (Prefix) | <code>ReturnType operator++(int);</code> (Postfix)<br>
                Member Binary: <code>ReturnType operator+(const ClassName& rhs) const;</code><br>
                Friend Binary (Required when left operand is primitive or stream):<br>
                <code>friend ostream& operator<<(ostream& os, const ClassName& obj);</code><br>
                <code>friend ClassName operator*(int scalar, const ClassName& mat);</code>
              </div>
              <p><strong>Rules:</strong> Operators that CANNOT be overloaded: <code>.</code> (dot member access), <code>.*</code> (pointer to member), <code>::</code> (scope resolution), <code>?:</code> (ternary conditional), and <code>sizeof</code>.</p>
            `
          },
          {
            id: "ds-t3",
            title: "C++ Templates: Generic Functions & Classes",
            tag: "Generics",
            content: `
              <p>Templates enable writing type-independent blueprints that are instantiated by the compiler at compile-time.</p>
              <div class="code-container">
                <div class="code-header"><span>Function & Class Template Syntax</span></div>
                <pre class="code-block">
template &lt;typename T&gt;
void bubbleSort(T arr[], int n) {
    for (int i = 0; i &lt; n - 1; i++) {
        for (int j = 0; j &lt; n - i - 1; j++) {
            if (arr[j] &gt; arr[j + 1]) {
                T temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
                </pre>
              </div>
            `
          }
        ],

        assignments: [
          {
            id: "ds-c1",
            title: "C Practical 1: Determine maximum of 3 numbers",
            difficulty: "Easy",
            tag: "C Practical Assignment",
            question: "Write a C program to determine the maximum of 3 numbers.",
            solution: `
              <div class="solution-content">
                <div class="code-container">
                  <div class="code-header"><span>max3.c</span></div>
                  <pre class="code-block">
#include &lt;stdio.h&gt;

int main() {
    double a, b, c, max;
    printf("Enter three numbers: ");
    if (scanf("%lf %lf %lf", &a, &b, &c) != 3) {
        printf("Invalid numeric input.\\n");
        return 1;
    }
    
    if (a &gt;= b && a &gt;= c) max = a;
    else if (b &gt;= a && b &gt;= c) max = b;
    else max = c;
    
    printf("Maximum number: %.2lf\\n", max);
    return 0;
}
                  </pre>
                </div>
              </div>
            `
          },
          {
            id: "ds-c19",
            title: "C Practical 19: Merge two sorted 1D arrays into sorted array C",
            difficulty: "Medium",
            tag: "C Practical Assignment",
            question: "Given two 1-D arrays A and B, which are sorted in ascending order. Write a program to merge them into a single sorted array C that contains every item from arrays A and B, in ascending order.",
            solution: `
              <div class="solution-content">
                <div class="code-container">
                  <div class="code-header"><span>merge_sorted.c</span></div>
                  <pre class="code-block">
#include &lt;stdio.h&gt;

void mergeSorted(int A[], int n1, int B[], int n2, int C[]) {
    int i = 0, j = 0, k = 0;
    while (i &lt; n1 && j &lt; n2) {
        if (A[i] &lt;= B[j]) C[k++] = A[i++];
        else C[k++] = B[j++];
    }
    while (i &lt; n1) C[k++] = A[i++];
    while (j &lt; n2) C[k++] = B[j++];
}

int main() {
    int A[] = {2, 5, 8, 12, 19};
    int B[] = {1, 3, 7, 15, 22, 25};
    int n1 = 5, n2 = 6;
    int C[11];
    
    mergeSorted(A, n1, B, n2, C);
    
    printf("Merged sorted array: ");
    for (int idx = 0; idx &lt; n1 + n2; idx++) {
        printf("%d ", C[idx]);
    }
    printf("\\n");
    return 0;
}
                  </pre>
                </div>
              </div>
            `
          },
          {
            id: "ds-p1-q10",
            title: "DS Practical 1 (Q10): Class Wallet digital transactions tracking",
            difficulty: "Hard",
            tag: "DS Practical 1 (C++)",
            question: "Write a C++ program to create a class Wallet to manage the details and transactions of digital wallets. Data members: Wallet ID, Owner Name, Balance, Transaction Count. Display: wallet with highest balance, wallet with highest transactions, and total transaction count across all wallets with validations.",
            solution: `
              <div class="solution-content">
                <div class="code-container">
                  <div class="code-header"><span>wallet.cpp</span></div>
                  <pre class="code-block">
#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;

class Wallet {
private:
    int walletId;
    string ownerName;
    double balance;
    int transactionCount;
    static int globalTotalTransactions;

public:
    Wallet() : walletId(0), ownerName(""), balance(500.0), transactionCount(0) {}

    bool initialize(int id, string name, double initialBal) {
        if (id &lt;= 0 || initialBal &lt; 500.0) return false;
        walletId = id;
        ownerName = name;
        balance = initialBal;
        transactionCount = 0;
        return true;
    }

    bool deposit(double amount) {
        if (amount &gt;= 100.0) {
            balance += amount;
            transactionCount++;
            globalTotalTransactions++;
            return true;
        }
        return false;
    }

    bool withdraw(double amount) {
        if (amount &gt; 0 && (balance - amount) &gt;= 500.0) {
            balance -= amount;
            transactionCount++;
            globalTotalTransactions++;
            return true;
        }
        return false;
    }

    double getBalance() const { return balance; }
    int getTxCount() const { return transactionCount; }
    static int getGlobalTxCount() { return globalTotalTransactions; }
    
    void display() const {
        cout &lt;&lt; "Wallet ID: " &lt;&lt; walletId &lt;&lt; " | Owner: " &lt;&lt; ownerName 
             &lt;&lt; " | Balance: Rs." &lt;&lt; balance &lt;&lt; " | Transactions: " &lt;&lt; transactionCount &lt;&lt; "\\n";
    }
};

int Wallet::globalTotalTransactions = 0;
                  </pre>
                </div>
              </div>
            `
          },
          {
            id: "ds-p2-q5",
            title: "DS Practical 2 (Q5): Matrix class with overloaded * operator (5 * Matrix)",
            difficulty: "Hard",
            tag: "DS Practical 2 (C++)",
            question: "WAP to define a matrix class and overload the * operator to multiply a number with matrix (Example: 5 * Matrix should be possible).",
            solution: `
              <div class="solution-content">
                <p>When the scalar appears on the left side (<code>5 * Matrix</code>), the operator cannot be implemented as a member function of Matrix; it must be implemented as a non-member <strong>friend function</strong>.</p>
                <div class="code-container">
                  <div class="code-header"><span>matrix_overload.cpp</span></div>
                  <pre class="code-block">
#include &lt;iostream&gt;
using namespace std;

class Matrix {
private:
    int mat[3][3];

public:
    Matrix() {
        for (int i = 0; i &lt; 3; i++)
            for (int j = 0; j &lt; 3; j++)
                mat[i][j] = 0;
    }

    void input() {
        cout &lt;&lt; "Enter 3x3 matrix elements:\\n";
        for (int i = 0; i &lt; 3; i++)
            for (int j = 0; j &lt; 3; j++)
                cin &gt;&gt; mat[i][j];
    }

    void display() const {
        for (int i = 0; i &lt; 3; i++) {
            for (int j = 0; j &lt; 3; j++) cout &lt;&lt; mat[i][j] &lt;&lt; "\\t";
            cout &lt;&lt; "\\n";
        }
    }

    // Member: Matrix * scalar
    Matrix operator*(int scalar) const {
        Matrix res;
        for (int i = 0; i &lt; 3; i++)
            for (int j = 0; j &lt; 3; j++)
                res.mat[i][j] = this-&gt;mat[i][j] * scalar;
        return res;
    }

    // Friend: scalar * Matrix
    friend Matrix operator*(int scalar, const Matrix& m) {
        return m * scalar; // reuse member operator
    }
};
                  </pre>
                </div>
              </div>
            `
          }
        ],

        cheatsheet: [
          {
            title: "C/C++ Storage Classes Matrix",
            content: `
              <div class="data-table-wrapper">
                <table class="data-table">
                  <thead>
                    <tr><th>Storage Class</th><th>Storage Location</th><th>Default Initial Value</th><th>Scope</th><th>Lifetime</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>auto</td><td>Stack</td><td>Garbage</td><td>Block local</td><td>Within block</td></tr>
                    <tr><td>register</td><td>CPU Register</td><td>Garbage</td><td>Block local</td><td>Within block</td></tr>
                    <tr><td>static</td><td>Data Segment</td><td>Zero (0)</td><td>Block / File</td><td>Entire program execution</td></tr>
                    <tr><td>extern</td><td>Data Segment</td><td>Zero (0)</td><td>Global / Multi-file</td><td>Entire program execution</td></tr>
                  </tbody>
                </table>
              </div>
            `
          }
        ]
      },

      {
        id: "mf",
        code: "AIML-103",
        name: "Mathematical Foundation",
        subtitle: "Set Theory, 2D/3D Coordinate Geometry, Lines, Planes & Hyperplanes",
        stats: { topics: 7, assignments: 54, demos: 2 },
        overview: "Covers formal set theory, De Morgan's laws, inclusion-exclusion principle, Cartesian geometry, distance and section formulas, straight line forms, plane equations, hyperplanes in ML, and Least Squares regression.",
        
        topics: [
          {
            id: "mf-t1",
            title: "Set Operations & De Morgan's Laws",
            tag: "Set Theory",
            content: `
              <p>A set is a well-defined collection of distinct objects. Core operations include Union (\\( A \\cup B \\)), Intersection (\\( A \\cap B \\)), Difference (\\( A \\setminus B \\)), and Complement (\\( A' \\)).</p>
              <div class="formula-box">
                <div class="formula-label">De Morgan's Laws</div>
                Law 1: \\( (A \\cup B)' = A' \\cap B' \\)<br>
                Law 2: \\( (A \\cap B)' = A' \\cup B' \\)
              </div>
              <div class="formula-box">
                <div class="formula-label">Principle of Inclusion-Exclusion (3 Sets)</div>
                \\( n(A \\cup B \\cup C) = n(A) + n(B) + n(C) - n(A \\cap B) - n(B \\cap C) - n(C \\cap A) + n(A \\cap B \\cap C) \\)
              </div>
            `
          },
          {
            id: "mf-t2",
            title: "Distance & Section Formulas (2D and 3D)",
            tag: "Coordinate Geometry",
            content: `
              <p>For two points \\( P(x_1, y_1, z_1) \\) and \\( Q(x_2, y_2, z_2) \\):</p>
              <div class="formula-box">
                <div class="formula-label">Distance Formula (3D)</div>
                \\( d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2} \\)
              </div>
              <div class="formula-box">
                <div class="formula-label">Section Formula (Ratio m:n)</div>
                Internal Division: \\( \\left( \\frac{m x_2 + n x_1}{m + n}, \\frac{m y_2 + n y_1}{m + n}, \\frac{m z_2 + n z_1}{m + n} \\right) \\)<br>
                External Division: \\( \\left( \\frac{m x_2 - n x_1}{m - n}, \\frac{m y_2 - n y_1}{m - n}, \\frac{m z_2 - n z_1}{m - n} \\right) \\)
              </div>
            `
          },
          {
            id: "mf-t3",
            title: "Straight Lines, Slopes & Perpendicular Distances",
            tag: "Analytical Geometry",
            content: `
              <p>The inclination angle \\( \\theta \\) yields slope \\( m = \\tan \\theta = \\frac{y_2 - y_1}{x_2 - x_1} \\).</p>
              <div class="formula-box">
                <div class="formula-label">Key Line Formulas</div>
                Perpendicular Distance from \\( (x_0, y_0) \\) to \\( Ax + By + C = 0 \\):<br>
                \\( d = \\frac{|A x_0 + B y_0 + C|}{\\sqrt{A^2 + B^2}} \\)<br><br>
                Distance between parallel lines \\( Ax + By + C_1 = 0 \\) and \\( Ax + By + C_2 = 0 \\):<br>
                \\( d = \\frac{|C_1 - C_2|}{\\sqrt{A^2 + B^2}} \\)<br><br>
                Angle between lines with slopes \\( m_1, m_2 \\): \\( \\tan \\theta = \\left| \\frac{m_2 - m_1}{1 + m_1 m_2} \\right| \\)
              </div>
            `
          },
          {
            id: "mf-t4",
            title: "Planes & Hyperplanes in Machine Learning",
            tag: "Linear Algebra & ML",
            content: `
              <p>A plane in 3D is defined by a point \\( (x_0, y_0, z_0) \\) and normal vector \\( \\mathbf{n} = (A, B, C) \\):</p>
              <div class="formula-box">
                <div class="formula-label">Equation of Plane & Hyperplane</div>
                3D Plane: \\( A(x - x_0) + B(y - y_0) + C(z - z_0) = 0 \\implies Ax + By + Cz + D = 0 \\)<br>
                Hyperplane in \\( \\mathbb{R}^n \\): \\( \\mathbf{w}^T \\mathbf{x} + b = 0 \\)<br>
                In Machine Learning, this hyperplane serves as the linear decision boundary for Support Vector Machines (SVM) and Perceptrons, partitioning feature space into classification regions.
              </div>
            `
          },
          {
            id: "mf-t5",
            title: "Method of Least Squares (Linear Regression)",
            tag: "Optimization",
            content: `
              <p>To fit a straight line \\( y = mx + c \\) through \\( n \\) data points \\( (x_i, y_i) \\), we minimize the sum of squared residuals \\( S = \\sum (y_i - (m x_i + c))^2 \\).</p>
              <div class="formula-box">
                <div class="formula-label">Normal Equations</div>
                1. \\( \\sum y = m \\sum x + n c \\)<br>
                2. \\( \\sum xy = m \\sum x^2 + c \\sum x \\)<br><br>
                Direct Solution:<br>
                \\( m = \\frac{n \\sum xy - (\\sum x)(\\sum y)}{n \\sum x^2 - (\\sum x)^2} \\), \\quad c = \\bar{y} - m \\bar{x}
              </div>
            `
          }
        ],

        assignments: [
          {
            id: "mf-a1-q1",
            title: "Set Theory Q1: True/False statements on sets",
            difficulty: "Easy",
            tag: "Unit 1 Part A (Set Theory)",
            question: "Which of the following statements are true or false? Justify: 1) A = {a} and b = {{a}} are equal. 2) {a} ⊂ {a}. 3) {a} ∈ {a}. 4) Ø ⊂ {a}. 5) Ø ∈ {Ø}. 6) {3, 4} ⊂ {1, 2, 3, {3,4}, 5}.",
            solution: `
              <div class="solution-content">
                <ol>
                  <li><strong>False:</strong> \\( A \\) contains the element 'a', whereas \\( b \\) contains the set \\( \\{a\\} \\). Their elements differ, so \\( A \\ne b \\).</li>
                  <li><strong>False (under strict subset definition):</strong> If \\( \\subset \\) denotes proper subset, no set is a proper subset of itself. If \\( \\subseteq \\) is intended, it is True. Under strict standard \\( \\subset \\), it is False.</li>
                  <li><strong>False:</strong> The element of \\( \\{a\\} \\) is \\( a \\), not the set \\( \\{a\\} \\). Thus \\( \\{a\\} \\notin \\{a\\} \\).</li>
                  <li><strong>True:</strong> The empty set \\( \\emptyset \\) is a subset of every set.</li>
                  <li><strong>True:</strong> The set \\( \\{\\emptyset\\} \\) contains one element, which is \\( \\emptyset \\). Therefore, \\( \\emptyset \\in \\{\\emptyset\\} \\).</li>
                  <li><strong>False:</strong> For \\( \\{3, 4\\} \\) to be a subset of \\( \\{1, 2, 3, \\{3,4\\}, 5\\} \\), both 3 and 4 must be individual elements of the parent set. 3 is an element, but 4 is NOT an individual element (it only exists nested inside the subset \\( \\{3,4\\} \\)). Therefore, \\( \\{3, 4\\} \\not\\subset \\{1, 2, 3, \\{3,4\\}, 5\\} \\). (Note: \\( \\{3, 4\\} \\in S \\) is true, but not subset).</li>
                </ol>
              </div>
            `
          },
          {
            id: "mf-a1-q25",
            title: "Coordinate Geometry Q25: Least Square Method line fit for (x, y)",
            difficulty: "Medium",
            tag: "Unit 1 Part B (Coordinate Geometry)",
            question: "The following data shows values of x and y: x: [1, 2, 3, 4, 5], y: [2, 4, 5, 4, 5]. Using the Least Square Method, find the slope (m) and intercept (c) of the best-fit line y = mx + c. Hence write the equation of the regression line.",
            solution: `
              <div class="solution-content">
                <p><strong>Step 1: Compute Summations (n = 5):</strong></p>
                <div class="data-table-wrapper">
                  <table class="data-table">
                    <thead>
                      <tr><th>x</th><th>y</th><th>x^2</th><th>xy</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>2</td><td>1</td><td>2</td></tr>
                      <tr><td>2</td><td>4</td><td>4</td><td>8</td></tr>
                      <tr><td>3</td><td>5</td><td>9</td><td>15</td></tr>
                      <tr><td>4</td><td>4</td><td>16</td><td>16</td></tr>
                      <tr><td>5</td><td>5</td><td>25</td><td>25</td></tr>
                      <tr><td><strong>Sum = 15</strong></td><td><strong>Sum = 20</strong></td><td><strong>Sum = 55</strong></td><td><strong>Sum = 66</strong></td></tr>
                    </tbody>
                  </table>
                </div>
                <p><strong>Step 2: Solve Normal Equations:</strong></p>
                <div class="formula-box">
                  \\( m = \\frac{n \\sum xy - (\\sum x)(\\sum y)}{n \\sum x^2 - (\\sum x)^2} = \\frac{5(66) - (15)(20)}{5(55) - (15)^2} = \\frac{330 - 300}{275 - 225} = \\frac{30}{50} = 0.6 \\)<br><br>
                  \\( \\bar{x} = \\frac{15}{5} = 3, \\quad \\bar{y} = \\frac{20}{5} = 4 \\)<br>
                  \\( c = \\bar{y} - m \\bar{x} = 4 - (0.6)(3) = 4 - 1.8 = 2.2 \\)
                </div>
                <p><strong>Resulting Regression Line:</strong> \\( y = 0.6x + 2.2 \\) (or in standard form: \\( 3x - 5y + 11 = 0 \\)).</p>
              </div>
            `
          },
          {
            id: "mf-a1-q26",
            title: "Coordinate Geometry Q26: Plane equation through (1, 2, 3) with normal (2, -1, 4)",
            difficulty: "Medium",
            tag: "Unit 1 Part B (Planes & Hyperplanes)",
            question: "Find the equation of the plane passing through the point (1, 2, 3) and having direction ratios of its normal as (2, −1, 4).",
            solution: `
              <div class="solution-content">
                <p><strong>Formula:</strong> \\( A(x - x_1) + B(y - y_1) + C(z - z_1) = 0 \\)</p>
                <p>Given: \\( (x_1, y_1, z_1) = (1, 2, 3) \\) and normal direction ratios \\( (A, B, C) = (2, -1, 4) \\).</p>
                <div class="formula-box">
                  \\( 2(x - 1) + (-1)(y - 2) + 4(z - 3) = 0 \\)<br>
                  \\( 2x - 2 - y + 2 + 4z - 12 = 0 \\)<br>
                  \\( 2x - y + 4z - 12 = 0 \\)
                </div>
                <p><strong>Final Answer:</strong> The equation of the plane is \\( 2x - y + 4z = 12 \\).</p>
              </div>
            `
          }
        ],

        cheatsheet: [
          {
            title: "Coordinate Geometry & Straight Line Master Formulas",
            content: `
              <ul>
                <li>Distance: \\( d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2} \\)</li>
                <li>Slope: \\( m = \\frac{y_2-y_1}{x_2-x_1} \\)</li>
                <li>Slope-intercept: \\( y = mx + c \\)</li>
                <li>Intercept form: \\( \\frac{x}{a} + \\frac{y}{b} = 1 \\)</li>
                <li>Perpendicular distance: \\( d = \\frac{|Ax_1 + By_1 + C|}{\\sqrt{A^2 + B^2}} \\)</li>
              </ul>
            `
          }
        ]
      },

      {
        id: "python",
        code: "AIML-104",
        name: "Python Programming",
        subtitle: "Scripting, Logic Building & Practical Laboratory",
        stats: { topics: 6, assignments: 45, demos: 1 },
        overview: "Covers Python dynamic typing, mathematical logic, control structures, pattern generation algorithms, number theory (primes, Fibonacci, Armstrong), and all 45 practical assignment programs.",
        
        topics: [
          {
            id: "py-t1",
            title: "Dynamic Typing, I/O & Memory References",
            tag: "Core Syntax",
            content: `
              <p>In Python, variables are dynamically-typed object references. The <code>id()</code> function reveals the underlying memory address, while <code>type()</code> returns the class type.</p>
              <div class="code-container">
                <div class="code-header"><span>Type & Identity Introspection</span></div>
                <pre class="code-block">
x = 42
print(type(x), id(x))  # &lt;class 'int'&gt;
x = "Hello"
print(type(x), id(x))  # &lt;class 'str'&gt;
                </pre>
              </div>
            `
          },
          {
            id: "py-t2",
            title: "Algorithmic Pattern Generation Logic",
            tag: "Loops & Patterns",
            content: `
              <p>Pattern generation tests mastery over nested loops. The outer loop controls row index \\( i \\), while inner loops manage leading whitespace padding and character/number printing.</p>
              <div class="formula-box">
                <div class="formula-label">Equilateral Triangle Coordinates</div>
                For row \\( i \\in [1, n] \\):<br>
                Print \\( (n - i) \\) leading spaces, followed by \\( i \\) asterisks separated by spaces.
              </div>
            `
          }
        ],

        assignments: [
          {
            id: "py-q8",
            title: "Python Q8: Roots of quadratic equation",
            difficulty: "Easy",
            tag: "Python Practical Assignment 1",
            question: "Write a python program to find all roots of a quadratic equation ax^2 + bx + c = 0.",
            solution: `
              <div class="solution-content">
                <div class="code-container">
                  <div class="code-header"><span>quadratic_roots.py</span></div>
                  <pre class="code-block">
import cmath

def solve_quadratic(a, b, c):
    if a == 0:
        if b != 0:
            return -c / b
        return "Degenerate equation"
    
    d = (b**2) - (4*a*c)
    root1 = (-b - cmath.sqrt(d)) / (2*a)
    root2 = (-b + cmath.sqrt(d)) / (2*a)
    
    if d &gt;= 0:
        return root1.real, root2.real
    return root1, root2

a, b, c = 1, -5, 6
print("Roots:", solve_quadratic(a, b, c)) # Output: (2.0, 3.0)
                  </pre>
                </div>
              </div>
            `
          },
          {
            id: "py-q23",
            title: "Python Q23: Check Armstrong Number",
            difficulty: "Medium",
            tag: "Python Practical Assignment 1",
            question: "Write a python program to check armstrong number. (eg. 1^3 + 5^3 + 3^3 = 153).",
            solution: `
              <div class="solution-content">
                <div class="code-container">
                  <div class="code-header"><span>armstrong.py</span></div>
                  <pre class="code-block">
def is_armstrong(num):
    s = str(num)
    order = len(s)
    total = sum(int(digit) ** order for digit in s)
    return total == num

val = 153
print(f"{val} is Armstrong? {is_armstrong(val)}")
                  </pre>
                </div>
              </div>
            `
          },
          {
            id: "py-q45",
            title: "Python Q45: Pascal's Triangle Generator",
            difficulty: "Medium",
            tag: "Python Practical Assignment 1",
            question: "Write a python program to display pascal's triangle program.",
            solution: `
              <div class="solution-content">
                <div class="code-container">
                  <div class="code-header"><span>pascal.py</span></div>
                  <pre class="code-block">
def print_pascals_triangle(n):
    for i in range(n):
        print(" " * (n - i), end="")
        c = 1
        for j in range(i + 1):
            print(c, end=" ")
            c = c * (i - j) // (j + 1)
        print()

print_pascals_triangle(5)
                  </pre>
                </div>
              </div>
            `
          }
        ],

        cheatsheet: [
          {
            title: "Python Complexity Reference",
            content: `
              <div class="data-table-wrapper">
                <table class="data-table">
                  <thead><tr><th>Operation</th><th>List</th><th>Dict</th><th>Set</th></tr></thead>
                  <tbody>
                    <tr><td>Get / Index</td><td>O(1)</td><td>O(1)</td><td>N/A</td></tr>
                    <tr><td>Search (in)</td><td>O(n)</td><td>O(1)</td><td>O(1)</td></tr>
                    <tr><td>Append / Add</td><td>O(1)</td><td>O(1)</td><td>O(1)</td></tr>
                    <tr><td>Delete</td><td>O(n)</td><td>O(1)</td><td>O(1)</td></tr>
                  </tbody>
                </table>
              </div>
            `
          }
        ]
      },

      {
        id: "scm",
        code: "AIML-105",
        name: "Scientific Computing",
        subtitle: "Numerical Analysis & Root Finding Algorithms",
        stats: { topics: 6, assignments: 7, demos: 1 },
        overview: "Focuses on computation errors, stopping criteria, and iterative non-linear equation root finding methods: Bisection, Regula-Falsi, Secant, and Newton-Raphson with step-by-step arithmetic tables.",
        
        topics: [
          {
            id: "scm-t1",
            title: "Types of Errors in Numerical Computing",
            tag: "Error Analysis",
            content: `
              <p>In scientific computations, error is defined as the deviation of an approximated quantity \\( x_{approx} \\) from its exact true value \\( x_{true} \\):</p>
              <ul>
                <li><strong>Absolute Error (\\( E_a \\)):</strong> \\( E_a = |x_{true} - x_{approx}| \\)</li>
                <li><strong>Relative Error (\\( E_r \\)):</strong> \\( E_r = \\frac{|x_{true} - x_{approx}|}{|x_{true}|} \\)</li>
                <li><strong>Percentage Error (\\( E_p \\)):</strong> \\( E_p = E_r \\times 100\\% \\)</li>
                <li><strong>Truncation Error:</strong> Error introduced by truncating an infinite mathematical series to a finite number of terms (e.g., using 3 terms of a Taylor series expansion).</li>
                <li><strong>Round-off Error:</strong> Error resulting from finite machine precision (e.g., representing \\( 1/3 \\) in IEEE-754 floating point format).</li>
              </ul>
            `
          },
          {
            id: "scm-t2",
            title: "Root Finding Methods & Orders of Convergence",
            tag: "Iterative Methods",
            content: `
              <div class="data-table-wrapper">
                <table class="data-table">
                  <thead>
                    <tr><th>Method</th><th>Formula</th><th>Order of Convergence (p)</th><th>Properties</th></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Bisection</strong></td>
                      <td>\\( x_{mid} = \\frac{a + b}{2} \\)</td>
                      <td>\\( p = 1 \\) (Linear, factor 0.5)</td>
                      <td>Always converges if \\( f(a)f(b) < 0 \\); slow.</td>
                    </tr>
                    <tr>
                      <td><strong>False Position</strong></td>
                      <td>\\( x = \\frac{a f(b) - b f(a)}{f(b) - f(a)} \\)</td>
                      <td>\\( p = 1 \\) (Superlinear in parts)</td>
                      <td>Bracketing method; one endpoint often stalls.</td>
                    </tr>
                    <tr>
                      <td><strong>Secant</strong></td>
                      <td>\\( x_{k+1} = x_k - f(x_k) \\frac{x_k - x_{k-1}}{f(x_k) - f(x_{k-1})} \\)</td>
                      <td>\\( p \\approx 1.618 \\) (Golden Ratio)</td>
                      <td>Open method; does not require derivative.</td>
                    </tr>
                    <tr>
                      <td><strong>Newton-Raphson</strong></td>
                      <td>\\( x_{k+1} = x_k - \\frac{f(x_k)}{f'(x_k)} \\)</td>
                      <td>\\( p = 2 \\) (Quadratic convergence)</td>
                      <td>Fastest; fails if \\( f'(x_k) = 0 \\) or near inflection points.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            `
          }
        ],

        assignments: [
          {
            id: "scm-q2",
            title: "SCM Q2: Unit length root interval for f(x) = x^3 - 9x + 1",
            difficulty: "Easy",
            tag: "SCM Assignment 1",
            question: "Find an interval of unit length which contains a root of f(x) = x^3 - 9x + 1 = 0.",
            solution: `
              <div class="solution-content">
                <p>We evaluate \\( f(x) \\) at integer intervals to locate a sign change (Intermediate Value Theorem):</p>
                <ul>
                  <li>\\( f(0) = 0 - 0 + 1 = +1 > 0 \\)</li>
                  <li>\\( f(1) = 1^3 - 9(1) + 1 = -7 < 0 \\implies \\) Root exists in <strong>[0, 1]</strong>.</li>
                  <li>\\( f(2) = 8 - 18 + 1 = -9 < 0 \\)</li>
                  <li>\\( f(3) = 27 - 27 + 1 = +1 > 0 \\implies \\) Another root exists in <strong>[2, 3]</strong>.</li>
                </ul>
                <p><strong>Answer:</strong> The interval of unit length is <strong>[2, 3]</strong> (or <strong>[0, 1]</strong>).</p>
              </div>
            `
          },
          {
            id: "scm-q6",
            title: "SCM Q6: Newton-Raphson for x^3 - 2x - 5 starting at x0 = 2",
            difficulty: "Medium",
            tag: "SCM Assignment 1",
            question: "Find the root of f(x) = x^3 - 2x - 5 to four decimal places using Newton-Raphson Method starting with x0 = 2.",
            solution: `
              <div class="solution-content">
                <p>Given: \\( f(x) = x^3 - 2x - 5 \\implies f'(x) = 3x^2 - 2 \\)</p>
                <div class="formula-box">
                  Newton-Raphson Formula: \\( x_{k+1} = x_k - \\frac{x_k^3 - 2x_k - 5}{3x_k^2 - 2} \\)
                </div>
                <div class="data-table-wrapper">
                  <table class="data-table">
                    <thead>
                      <tr><th>Iteration k</th><th>x_k</th><th>f(x_k)</th><th>f'(x_k)</th><th>x_{k+1}</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>0</td><td>2.00000</td><td>-1.00000</td><td>10.00000</td><td>2.10000</td></tr>
                      <tr><td>1</td><td>2.10000</td><td>0.06100</td><td>11.23000</td><td>2.09457</td></tr>
                      <tr><td>2</td><td>2.09457</td><td>0.00018</td><td>11.16239</td><td>2.09455</td></tr>
                      <tr><td>3</td><td>2.09455</td><td>0.00000</td><td>11.16216</td><td>2.09455</td></tr>
                    </tbody>
                  </table>
                </div>
                <p><strong>Final Root:</strong> \\( x = 2.09455 \\) (matches assignment official key).</p>
              </div>
            `
          }
        ],

        cheatsheet: [
          {
            title: "Stopping Criteria Equations",
            content: `
              <ul>
                <li>Residual threshold: \\( |f(x_k)| < \\epsilon \\)</li>
                <li>Absolute step difference: \\( |x_{k+1} - x_k| < \\epsilon \\)</li>
                <li>Relative tolerance: \\( \\frac{|x_{k+1} - x_k|}{|x_{k+1}|} < \\epsilon \\)</li>
              </ul>
            `
          }
        ]
      },

      {
        id: "cv",
        code: "AIML-106",
        name: "Computer Vision",
        subtitle: "Digital Image Matrix Foundations & Spatial Filtering",
        stats: { topics: 4, assignments: 2, demos: 1 },
        overview: "Introduces digital image representations, pixel coordinate matrices, color channels, 2D spatial convolution kernels (Sobel, Box, Gaussian), and edge detection fundamentals.",
        
        topics: [
          {
            id: "cv-t1",
            title: "Digital Images as 2D and 3D Matrices",
            tag: "Image Basics",
            content: `
              <p>In digital processing, an image is a discrete function \\( f(x, y) \\) where \\( x \\) and \\( y \\) are spatial coordinates and \\( f \\) is the pixel intensity (0 to 255 for 8-bit unsigned integers).</p>
              <ul>
                <li><strong>Grayscale:</strong> 2D Matrix of dimensions \\( H \\times W \\).</li>
                <li><strong>RGB Color Image:</strong> 3D Tensor of dimensions \\( H \\times W \\times 3 \\) corresponding to Red, Green, and Blue channels.</li>
              </ul>
            `
          },
          {
            id: "cv-t2",
            title: "2D Spatial Convolution & Edge Filters",
            tag: "Filtering",
            content: `
              <p>Convolving an image with a \\( 3 \\times 3 \\) kernel computes linear combinations of neighborhood pixels:</p>
              <div class="formula-box">
                <div class="formula-label">Sobel Gradient Kernels</div>
                \\( G_x = \\begin{bmatrix} -1 & 0 & 1 \\\\ -2 & 0 & 2 \\\\ -1 & 0 & 1 \\end{bmatrix}, \\quad G_y = \\begin{bmatrix} -1 & -2 & -1 \\\\ 0 & 0 & 0 \\\\ 1 & 2 & 1 \\end{bmatrix} \\)<br><br>
                Gradient Magnitude: \\( G = \\sqrt{G_x^2 + G_y^2} \\)
              </div>
            `
          }
        ],

        assignments: [
          {
            id: "cv-q1",
            title: "CV Lab 1: Image representation and channel splitting with OpenCV",
            difficulty: "Easy",
            tag: "CV Practical Preparation",
            question: "Explain how to load an RGB image, convert to grayscale, and extract individual color channels using OpenCV and NumPy.",
            solution: `
              <div class="solution-content">
                <div class="code-container">
                  <div class="code-header"><span>cv_channels.py</span></div>
                  <pre class="code-block">
import cv2
import numpy as np

# OpenCV loads images in BGR format by default
img = cv2.imread('sample.jpg')
b, g, r = cv2.split(img)

# Convert to Grayscale
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

print(f"Original shape: {img.shape}") # (H, W, 3)
print(f"Grayscale shape: {gray.shape}") # (H, W)
                  </pre>
                </div>
              </div>
            `
          }
        ],

        cheatsheet: [
          {
            title: "Standard 3x3 Convolution Kernels",
            content: `
              <p><strong>Identity:</strong> [[0,0,0],[0,1,0],[0,0,0]]</p>
              <p><strong>Box Blur:</strong> 1/9 * [[1,1,1],[1,1,1],[1,1,1]]</p>
              <p><strong>Laplacian (Edge):</strong> [[0,1,0],[1,-4,1],[0,1,0]]</p>
            `
          }
        ]
      }
    ]
  }
};

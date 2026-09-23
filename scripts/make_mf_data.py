# -*- coding: utf-8 -*-
# make_mf_data.py - Contains all 55 solved assignments for Mathematical Foundation (AIML-103)
import json

def get_mf_part_a():
    return [
        {
            "id": "mf-a1",
            "title": "Set Theory Q1: True / False Statements with Justifications",
            "difficulty": "Foundational",
            "category": "Set Theory (Part A)",
            "question": "Which of the following statements are true or false? Justify your answer:\\n1) The set A = {a} and b = {{a}} are equal.\\n2) {a} ⊂ {a}\\n3) {a} ∈ {a}\\n4) ∅ ⊂ {a}\\n5) ∅ ∈ {∅}\\n6) {3, 4} ⊂ {1, 2, 3, {3,4}, 5}",
            "solution": """<div class="solution-content">
<ol>
  <li><strong>1) A = {a} and b = {{a}} are equal:</strong> <span class="badge badge-error">FALSE</span>. The set \\( A \\) contains the symbol \\( a \\) (cardinality 1). The set \\( b \\) contains the set \\( \\{a\\} \\) as its sole element (cardinality 1). Since \\( a \\neq \\{a\\} \\), the elements differ and the sets are not equal.</li>
  <li><strong>2) {a} ⊂ {a}:</strong> <span class="badge badge-error">FALSE</span>. The symbol \\( \\subset \\) denotes strict (proper) subset. For \\( X \\subset Y \\), there must exist at least one element in \\( Y \\) not in \\( X \\). Here \\( X = Y \\), so \\( \\{a\\} \\subseteq \\{a\\} \\) is true, but \\( \\{a\\} \\subset \\{a\\} \\) is false.</li>
  <li><strong>3) {a} ∈ {a}:</strong> <span class="badge badge-error">FALSE</span>. The only element inside \\( \\{a\\} \\) is the literal symbol \\( a \\), not the singleton set \\( \\{a\\} \\). Hence \\( \\{a\\} \\notin \\{a\\} \\).</li>
  <li><strong>4) ∅ ⊂ {a}:</strong> <span class="badge badge-success">TRUE</span>. The empty set \\( \\emptyset \\) is a subset of every set. Since \\( \\{a\\} \\neq \\emptyset \\), \\( \\emptyset \\) is a strictly proper subset of \\( \\{a\\} \\).</li>
  <li><strong>5) ∅ ∈ {∅}:</strong> <span class="badge badge-success">TRUE</span>. The set \\( \\{\\emptyset\\} \\) explicitly contains one element, which is the empty set symbol \\( \\emptyset \\).</li>
  <li><strong>6) {3, 4} ⊂ {1, 2, 3, {3,4}, 5}:</strong> <span class="badge badge-error">FALSE</span>. For \\( \\{3, 4\\} \\subset S \\), every element of \\( \\{3, 4\\} \\) (namely 3 and 4) must be an element of \\( S \\). While 3 is an element of \\( S \\), 4 is not an individual element of \\( S \\) (it is encapsulated inside the set element \\( \\{3,4\\} \\)). Note that \\( \\{3,4\\} \\in S \\) is true, but \\( \\{3,4\\} \\subset S \\) is false.</li>
</ol>
</div>"""
        },
        {
            "id": "mf-a2",
            "title": "Set Theory Q2: Converting Set-Builder Expressions to Roster Form",
            "difficulty": "Foundational",
            "category": "Set Theory (Part A)",
            "question": "Write down the following sets into roster form:\\n1) A = {x ∈ R | x is a real number such that x^2 = 4}\\n2) B = {x ∈ N | x is a prime number less than 15}",
            "solution": """<div class="solution-content">
<ol>
  <li><strong>1) \\( A = \\{x \\in \\mathbb{R} \\mid x^2 = 4\\} \\):</strong><br>
    Solving the algebraic quadratic: \\( x^2 - 4 = 0 \\implies (x - 2)(x + 2) = 0 \\implies x = 2 \\text{ or } x = -2 \\).<br>
    Both \\( 2 \\in \\mathbb{R} \\) and \\( -2 \\in \\mathbb{R} \\).<br>
    <strong>Roster Form:</strong> \\[ A = \\{-2, 2\\} \\]
  </li>
  <li><strong>2) \\( B = \\{x \\in \\mathbb{N} \\mid x \\text{ is a prime number less than } 15\\} \\):</strong><br>
    Primes in \\( \\mathbb{N} \\) strictly less than 15 are 2, 3, 5, 7, 11, and 13.<br>
    <strong>Roster Form:</strong> \\[ B = \\{2, 3, 5, 7, 11, 13\\} \\]
  </li>
</ol>
</div>"""
        },
        {
            "id": "mf-a3",
            "title": "Set Theory Q3: Roster Form Representations across Number Systems",
            "difficulty": "Foundational",
            "category": "Set Theory (Part A)",
            "question": "Express the following sets in roster form:\\n2) B = {x ∈ N | x is even}\\n3) C = {x ∈ N | (x + a)(x - b) = 0}, where a, b are arbitrary real constants\\n4) D = {x ∈ Z | x^2 = 9}\\n5) E = {x ∈ B | 3x - 1 = 0} (where B is Boolean domain {0, 1})",
            "solution": """<div class="solution-content">
<ol>
  <li><strong>2) \\( B = \\{x \\in \\mathbb{N} \\mid x \\text{ is even}\\} \\):</strong><br>
    The set of even natural numbers: \\[ B = \\{2, 4, 6, 8, 10, \\dots\\} \\]
  </li>
  <li><strong>3) \\( C = \\{x \\in \\mathbb{N} \\mid (x + a)(x - b) = 0\\} \\):</strong><br>
    The equation yields real roots \\( x = -a \\) and \\( x = b \\). Filtering for natural numbers \\( \\mathbb{N} = \\{1, 2, 3, \\dots\\} \\):
    \\[ C = \\{-a, b\\} \\cap \\mathbb{N} \\]
    If \\( b \\in \\mathbb{N} \\) and \\( -a \\notin \\mathbb{N} \\), \\( C = \\{b\\} \\). If neither root is in \\( \\mathbb{N} \\), \\( C = \\emptyset \\).
  </li>
  <li><strong>4) \\( D = \\{x \\in \\mathbb{Z} \\mid x^2 = 9\\} \\):</strong><br>
    Roots are \\( x = \\pm 3 \\). Since both are integers: \\[ D = \\{-3, 3\\} \\]
  </li>
  <li><strong>5) \\( E = \\{x \\in \\{0, 1\\} \\mid 3x - 1 = 0\\} \\):</strong><br>
    Solving gives \\( x = 1/3 \\). Since \\( 1/3 \\notin \\{0, 1\\} \\): \\[ E = \\emptyset \\]
  </li>
</ol>
</div>"""
        },
        {
            "id": "mf-a4",
            "title": "Set Theory Q4: Four Fundamental Properties of Set Operations",
            "difficulty": "Foundational",
            "category": "Set Theory (Part A)",
            "question": "Write down any four properties of set operations. Explain each through distinct concrete examples.",
            "solution": """<div class="solution-content">
<ol>
  <li><strong>1. Commutative Property:</strong> \\( A \\cup B = B \\cup A \\) and \\( A \\cap B = B \\cap A \\).<br>
    <em>Example:</em> Let \\( A = \\{1, 2\\}, B = \\{2, 3\\} \\). Then \\( A \\cup B = \\{1, 2, 3\\} = B \\cup A \\).
  </li>
  <li><strong>2. Associative Property:</strong> \\( (A \\cup B) \\cup C = A \\cup (B \\cup C) \\) and \\( (A \\cap B) \\cap C = A \\cap (B \\cap C) \\).<br>
    <em>Example:</em> Let \\( A = \\{1\\}, B = \\{2\\}, C = \\{3\\} \\). Both group associations yield \\( \\{1, 2, 3\\} \\).
  </li>
  <li><strong>3. Distributive Property:</strong> \\( A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C) \\).<br>
    <em>Example:</em> Let \\( A = \\{1, 2, 3\\}, B = \\{2, 4\\}, C = \\{3, 5\\} \\). \\( B \\cup C = \\{2, 3, 4, 5\\} \\). LHS = \\( A \\cap \\{2, 3, 4, 5\\} = \\{2, 3\\} \\). RHS = \\( \\{2\\} \\cup \\{3\\} = \\{2, 3\\} \\). LHS = RHS.
  </li>
  <li><strong>4. Identity & Annihilation Laws:</strong> \\( A \\cup \\emptyset = A \\) and \\( A \\cap \\emptyset = \\emptyset \\).<br>
    <em>Example:</em> Let \\( A = \\{4, 7\\} \\). \\( \\{4, 7\\} \\cup \\emptyset = \\{4, 7\\} \\). \\( \\{4, 7\\} \\cap \\emptyset = \\emptyset \\).
  </li>
</ol>
</div>"""
        },
        {
            "id": "mf-a5",
            "title": "Set Theory Q5: Proof and Venn Diagram of De Morgan's Laws",
            "difficulty": "Intermediate",
            "category": "Set Theory (Part A)",
            "question": "State and prove De Morgan's laws: (1) (A ∪ B)' = A' ∩ B', and (2) (A ∩ B)' = A' ∪ B'.",
            "solution": """<div class="solution-content">
<h4>Law 1: \\( (A \\cup B)' = A' \\cap B' \\)</h4>
<p><strong>Proof via Double Containment:</strong></p>
<p><strong>Part (i): Show \\( (A \\cup B)' \\subseteq A' \\cap B' \\)</strong><br>
Let \\( x \\in (A \\cup B)' \\).<br>
\\( \\implies x \\notin (A \\cup B) \\)<br>
\\( \\implies \\neg(x \\in A \\lor x \\in B) \\)<br>
\\( \\implies x \\notin A \\land x \\notin B \\)<br>
\\( \\implies x \\in A' \\land x \\in B' \\implies x \\in (A' \\cap B') \\).<br>
Hence \\( (A \\cup B)' \\subseteq A' \\cap B' \\).</p>

<p><strong>Part (ii): Show \\( A' \\cap B' \\subseteq (A \\cup B)' \\)</strong><br>
Let \\( y \\in (A' \\cap B') \\).<br>
\\( \\implies y \\in A' \\land y \\in B' \\)<br>
\\( \\implies y \\notin A \\land y \\notin B \\)<br>
\\( \\implies \\neg(y \\in A \\lor y \\in B) \\)<br>
\\( \\implies y \\notin (A \\cup B) \\implies y \\in (A \\cup B)' \\).<br>
Hence \\( A' \\cap B' \\subseteq (A \\cup B)' \\).</p>
<p>Combining both parts confirms \\( (A \\cup B)' = A' \\cap B' \\). <span class="badge badge-success">Q.E.D.</span></p>
</div>"""
        },
        {
            "id": "mf-a6",
            "title": "Set Theory Q6: Application of Power Sets in Bit String Representation",
            "difficulty": "Intermediate",
            "category": "Set Theory (Part A)",
            "question": "Consider S = {a1, a2, a3, ..., a10}. Each subset of S is denoted by Bi, where 'i' represents a sequence of bits in binary digits. Determine the sequence of bits and corresponding set for B111 and B73. How will you designate {a2, a6, a9} and {a1, a9}?",
            "solution": """<div class="solution-content">
<p>Let index mapping order be \\( (a_{10}, a_9, a_8, a_7, a_6, a_5, a_4, a_3, a_2, a_1) \\), where bit \\( k \\) corresponds to element \\( a_k \\).</p>

<ol>
  <li><strong>For \\( B_{111} \\):</strong><br>
    Convert integer 111 to 10-bit binary:<br>
    \\( 111 = 64 + 32 + 8 + 4 + 2 + 1 = 2^6 + 2^5 + 2^3 + 2^2 + 2^1 + 2^0 \\).<br>
    10-bit string: <code>0001101111</code>.<br>
    Positions set (from right): \\( a_1, a_2, a_3, a_4, a_6, a_7 \\).<br>
    <strong>Set \\( B_{111} = \\{a_1, a_2, a_3, a_4, a_6, a_7\\} \\)</strong>.
  </li>
  <li><strong>For \\( B_{73} \\):</strong><br>
    Convert integer 73 to 10-bit binary:<br>
    \\( 73 = 64 + 8 + 1 = 2^6 + 2^3 + 2^0 \\).<br>
    10-bit string: <code>0001001001</code>.<br>
    Positions set: \\( a_1, a_4, a_7 \\).<br>
    <strong>Set \\( B_{73} = \\{a_1, a_4, a_7\\} \\)</strong>.
  </li>
  <li><strong>Designating \\( \\{a_2, a_6, a_9\\} \\):</strong><br>
    Bits at positions 2, 6, 9 are 1, all others 0.<br>
    Binary string: <code>0100100010</code>.<br>
    Decimal value = \\( 2^8 + 2^5 + 2^1 = 256 + 32 + 2 = 290 \\).<br>
    <strong>Designation: \\( B_{290} \\) (Binary: 0100100010)</strong>.
  </li>
  <li><strong>Designating \\( \\{a_1, a_9\\} \\):</strong><br>
    Bits at positions 1, 9 are 1.<br>
    Binary string: <code>0100000001</code>.<br>
    Decimal value = \\( 2^8 + 2^0 = 256 + 1 = 257 \\).<br>
    <strong>Designation: \\( B_{257} \\) (Binary: 0100000001)</strong>.
  </li>
</ol>
</div>"""
        },
        {
            "id": "mf-a7",
            "title": "Set Theory Q7: Cartesian Products & Set Operations",
            "difficulty": "Foundational",
            "category": "Set Theory (Part A)",
            "question": "Define Cartesian product. Given A = {1, 2, 3}, B = {3, 5}, and C = {2, 3, 5}, compute:\\n1) A x B, B x A\\n2) A x A, B x B\\n3) A x (B ∩ C), A x (B ∪ C)\\n4) (A x B) ∩ (A x C), (A x B) ∪ (A x C)",
            "solution": """<div class="solution-content">
<p><strong>Definition:</strong> \\( A \\times B = \\{(a, b) \\mid a \\in A, b \\in B\\} \\).</p>
<ol>
  <li><strong>\\( A \\times B \\) & \\( B \\times A \\):</strong><br>
    \\( A \\times B = \\{(1,3), (1,5), (2,3), (2,5), (3,3), (3,5)\\} \\)<br>
    \\( B \\times A = \\{(3,1), (3,2), (3,3), (5,1), (5,2), (5,3)\\} \\).
  </li>
  <li><strong>\\( A \\times A \\) & \\( B \\times B \\):</strong><br>
    \\( A \\times A = \\{(1,1), (1,2), (1,3), (2,1), (2,2), (2,3), (3,1), (3,2), (3,3)\\} \\)<br>
    \\( B \\times B = \\{(3,3), (3,5), (5,3), (5,5)\\} \\).
  </li>
  <li><strong>\\( A \\times (B \\cap C) \\) & \\( A \\times (B \\cup C) \\):</strong><br>
    \\( B \\cap C = \\{3, 5\\} \\cap \\{2, 3, 5\\} = \\{3, 5\\} = B \\).<br>
    \\( A \\times (B \\cap C) = \\{(1,3), (1,5), (2,3), (2,5), (3,3), (3,5)\\} \\).<br>
    \\( B \\cup C = \\{2, 3, 5\\} \\).<br>
    \\( A \\times (B \\cup C) = \\{(1,2), (1,3), (1,5), (2,2), (2,3), (2,5), (3,2), (3,3), (3,5)\\} \\).
  </li>
  <li><strong>Distributive verification:</strong><br>
    \\( (A \\times B) \\cap (A \\times C) = A \\times (B \\cap C) = \\{(1,3), (1,5), (2,3), (2,5), (3,3), (3,5)\\} \\).<br>
    \\( (A \\times B) \\cup (A \\times C) = A \\times (B \\cup C) \\) (9 ordered pairs above).
  </li>
</ol>
</div>"""
        },
        {
            "id": "mf-a8",
            "title": "Set Theory Q8: Social Media Survey (Venn Diagram Analysis)",
            "difficulty": "Intermediate",
            "category": "Set Theory (Part A)",
            "question": "In a survey of 1000 persons: 280 use Facebook (F), 300 use Twitter (T), 420 use Instagram (I). 80 use F and T, 100 use F and I, 50 use T and I, 30 use all three. Find:\\n1) How many use at least one platform?\\n2) How many use none?\\n3) How many use only Facebook?\\n4) How many use Facebook and Twitter but not Instagram?",
            "solution": """<div class="solution-content">
<p><strong>Given Data:</strong> \\( N = 1000 \\), \\( n(F)=280 \\), \\( n(T)=300 \\), \\( n(I)=420 \\), \\( n(F \\cap T)=80 \\), \\( n(F \\cap I)=100 \\), \\( n(T \\cap I)=50 \\), \\( n(F \\cap T \\cap I)=30 \\).</p>
<ol>
  <li><strong>1) Use at least one platform:</strong><br>
    \\[ n(F \\cup T \\cup I) = 280 + 300 + 420 - (80 + 100 + 50) + 30 = 1000 - 230 + 30 = 800 \\]
  </li>
  <li><strong>2) Use none of the three platforms:</strong><br>
    \\[ \\text{None} = 1000 - n(F \\cup T \\cup I) = 1000 - 800 = 200 \\]
  </li>
  <li><strong>3) Use only Facebook:</strong><br>
    \\[ n(\\text{Only } F) = n(F) - n(F \\cap T) - n(F \\cap I) + n(F \\cap T \\cap I) = 280 - 80 - 100 + 30 = 130 \\]
  </li>
  <li><strong>4) Use Facebook and Twitter but not Instagram:</strong><br>
    \\[ n((F \\cap T) \\setminus I) = n(F \\cap T) - n(F \\cap T \\cap I) = 80 - 30 = 50 \\]
  </li>
</ol>
</div>"""
        },
        {
            "id": "mf-a9",
            "title": "Set Theory Q9: Video Conferencing Platform Survey (1000 Individuals)",
            "difficulty": "Intermediate",
            "category": "Set Theory (Part A)",
            "question": "In a survey of 1000 individuals: 400 use Google Meet (G), 350 use Zoom (Z), 300 use Microsoft Teams (M). 150 use both G and Z, 120 use both Z and M, 100 use both G and M, 60 use all three. Find:\\n1) How many use exactly two platforms?\\n2) How many use Google Meet or Zoom but not Teams?\\n3) How many use at least one platform but not all three?",
            "solution": """<div class="solution-content">
<p><strong>Decomposition into disjoint subsets:</strong></p>
<ul>
  <li>All three: \\( n(G \\cap Z \\cap M) = 60 \\).</li>
  <li>Only G and Z: \\( 150 - 60 = 90 \\).</li>
  <li>Only Z and M: \\( 120 - 60 = 60 \\).</li>
  <li>Only G and M: \\( 100 - 60 = 40 \\).</li>
  <li>Only G: \\( 400 - (90 + 40 + 60) = 400 - 190 = 210 \\).</li>
  <li>Only Z: \\( 350 - (90 + 60 + 60) = 350 - 210 = 140 \\).</li>
  <li>Only M: \\( 300 - (40 + 60 + 60) = 300 - 160 = 140 \\).</li>
</ul>
<ol>
  <li><strong>1) Exactly two platforms:</strong><br>
    \\[ \\text{Exactly 2} = 90 + 60 + 40 = 190 \\]
  </li>
  <li><strong>2) Google Meet or Zoom but not Teams:</strong><br>
    \\[ \\text{Only } G + \\text{Only } Z + (\\text{Only } G \\text{ and } Z) = 210 + 140 + 90 = 440 \\]
  </li>
  <li><strong>3) At least one platform but not all three:</strong><br>
    Total at least one = \\( (210 + 140 + 140) + 190 + 60 = 740 \\).<br>
    Excluding all three: \\[ 740 - 60 = 680 \\]
  </li>
</ol>
</div>"""
        },
        {
            "id": "mf-a10",
            "title": "Set Theory Q10: Tech Club Course Enrollments (800 Students)",
            "difficulty": "Intermediate",
            "category": "Set Theory (Part A)",
            "question": "In a college tech club of 800 students: 300 enrolled in AI (A), 350 in Web Dev (W), 250 in Cybersecurity (C). 100 in AI & Web Dev, 80 in AI & Cyber, 90 in Web & Cyber, 50 in all three. Find:\\n1) Enrolled in exactly one course?\\n2) Enrolled in at least two courses?\\n3) Not enrolled in any course?",
            "solution": """<div class="solution-content">
<p><strong>Disjoint Region Evaluation:</strong></p>
<ul>
  <li>All three = 50.</li>
  <li>Only A and W = \\( 100 - 50 = 50 \\).</li>
  <li>Only A and C = \\( 80 - 50 = 30 \\).</li>
  <li>Only W and C = \\( 90 - 50 = 40 \\).</li>
  <li>Only AI = \\( 300 - (50 + 30 + 50) = 170 \\).</li>
  <li>Only Web Dev = \\( 350 - (50 + 40 + 50) = 210 \\).</li>
  <li>Only Cyber = \\( 250 - (30 + 40 + 50) = 130 \\).</li>
</ul>
<ol>
  <li><strong>1) Enrolled in exactly one course:</strong><br>
    \\[ 170 + 210 + 130 = 510 \\]
  </li>
  <li><strong>2) Enrolled in at least two courses:</strong><br>
    \\[ (\\text{Exactly 2}) + (\\text{All 3}) = (50 + 30 + 40) + 50 = 120 + 50 = 170 \\]
  </li>
  <li><strong>3) Not enrolled in any course:</strong><br>
    Total enrolled = \\( 510 + 170 = 680 \\).<br>
    \\[ \\text{Not enrolled} = 800 - 680 = 120 \\]
  </li>
</ol>
</div>"""
        },
        {
            "id": "mf-a11",
            "title": "Set Theory Q11: Set Equality Proof A = B",
            "difficulty": "Foundational",
            "category": "Set Theory (Part A)",
            "question": "If A = {x ∈ N | x < 6} and B = {x ∈ N | (x + 1)^2 < 49}, prove that A = B.",
            "solution": """<div class="solution-content">
<p><strong>Analyzing Set A:</strong><br>
\\( A = \\{x \\in \\mathbb{N} \\mid x < 6\\} = \\{1, 2, 3, 4, 5\\} \\).</p>

<p><strong>Analyzing Set B:</strong><br>
\\( (x + 1)^2 < 49 \\implies |x + 1| < 7 \\implies -7 < x + 1 < 7 \\implies -8 < x < 6 \\).<br>
Restricting to the natural numbers domain \\( x \\in \\mathbb{N} = \\{1, 2, 3, \\dots\\} \\):<br>
\\( x \\in \\{1, 2, 3, 4, 5\\} \\implies B = \\{1, 2, 3, 4, 5\\} \\).</p>

<p>Since both sets possess identical elements: \\[ A = B \\quad \\text{Q.E.D.} \\]</p>
</div>"""
        },
        {
            "id": "mf-a12",
            "title": "Set Theory Q12: Cardinalities and Union / Intersection",
            "difficulty": "Foundational",
            "category": "Set Theory (Part A)",
            "question": "If A = {a, b, c, d, e} and B = {d, e, f, g}, obtain n(A), n(B), n(A ∩ B), and n(A ∪ B).",
            "solution": """<div class="solution-content">
<ul>
  <li>\\( n(A) = 5 \\) (elements: a, b, c, d, e)</li>
  <li>\\( n(B) = 4 \\) (elements: d, e, f, g)</li>
  <li>\\( A \\cap B = \\{d, e\\} \\implies n(A \\cap B) = 2 \\)</li>
  <li>\\( A \\cup B = \\{a, b, c, d, e, f, g\\} \\implies n(A \\cup B) = 7 \\)</li>
</ul>
<p><strong>Verification:</strong> \\( n(A \\cup B) = n(A) + n(B) - n(A \\cap B) = 5 + 4 - 2 = 7 \\). Satisfied.</p>
</div>"""
        },
        {
            "id": "mf-a13",
            "title": "Set Theory Q13: Verification of 3-Set Inclusion-Exclusion Identity",
            "difficulty": "Intermediate",
            "category": "Set Theory (Part A)",
            "question": "If A = {1, 2, 3, 4, 5, 6}, B = {2, 5, 6, 8} and C = {1, 6, 7}, prove that n(A ∪ B ∪ C) = n(A) + n(B) + n(C) - n(A ∩ B) - n(B ∩ C) - n(C ∩ A) + n(A ∩ B ∩ C).",
            "solution": """<div class="solution-content">
<ol>
  <li><strong>Individual sets:</strong> \\( n(A) = 6 \\), \\( n(B) = 4 \\), \\( n(C) = 3 \\).</li>
  <li><strong>Pairwise intersections:</strong>
    <ul>
      <li>\\( A \\cap B = \\{2, 5, 6\\} \\implies n(A \\cap B) = 3 \\).</li>
      <li>\\( B \\cap C = \\{6\\} \\implies n(B \\cap C) = 1 \\).</li>
      <li>\\( C \\cap A = \\{1, 6\\} \\implies n(C \\cap A) = 2 \\).</li>
    </ul>
  </li>
  <li><strong>Three-way intersection:</strong> \\( A \\cap B \\cap C = \\{6\\} \\implies n(A \\cap B \\cap C) = 1 \\).</li>
  <li><strong>RHS Calculation:</strong>
    \\[ \\text{RHS} = 6 + 4 + 3 - (3 + 1 + 2) + 1 = 13 - 6 + 1 = 8 \\]
  </li>
  <li><strong>LHS Evaluation:</strong>
    \\( A \\cup B \\cup C = \\{1, 2, 3, 4, 5, 6, 7, 8\\} \\implies n(A \\cup B \\cup C) = 8 \\).
  </li>
</ol>
<p>\\( \\text{LHS} = \\text{RHS} = 8 \\). <span class="badge badge-success">Proved</span>.</p>
</div>"""
        },
        {
            "id": "mf-a14",
            "title": "Set Theory Q14: Mathematics & Physics Exam Results (120 Students)",
            "difficulty": "Foundational",
            "category": "Set Theory (Part A)",
            "question": "In a school of 120 students: 55 passed Mathematics, 60 passed Physics, and 22 passed both. Find:\\n1. Students passing only Mathematics?\\n2. Students passing only Physics?\\n3. Students failing both subjects?",
            "solution": """<div class="solution-content">
<ol>
  <li><strong>1. Passing only Mathematics:</strong><br>
    \\[ n(M \\setminus P) = n(M) - n(M \\cap P) = 55 - 22 = 33 \\]
  </li>
  <li><strong>2. Passing only Physics:</strong><br>
    \\[ n(P \\setminus M) = n(P) - n(M \\cap P) = 60 - 22 = 38 \\]
  </li>
  <li><strong>3. Failing both subjects:</strong><br>
    Total students passing at least one = \\( 33 + 38 + 22 = 93 \\).<br>
    \\[ \\text{Failing both} = 120 - 93 = 27 \\]
  </li>
</ol>
</div>"""
        },
        {
            "id": "mf-a15",
            "title": "Set Theory Q15: Football and Hockey Sports Participation (63 Students)",
            "difficulty": "Foundational",
            "category": "Set Theory (Part A)",
            "question": "In a class of 63 students: 15 do not play hockey or football. 35 students play football and 20 students play hockey. Find:\\n1. How many students play both games?\\n2. How many play only football?\\n3. How many play only hockey?",
            "solution": """<div class="solution-content">
<p>Students playing at least one game: \\( n(F \\cup H) = 63 - 15 = 48 \\).</p>
<ol>
  <li><strong>1. Play both games:</strong><br>
    Using \\( n(F \\cup H) = n(F) + n(H) - n(F \\cap H) \\):<br>
    \\[ 48 = 35 + 20 - n(F \\cap H) \\implies n(F \\cap H) = 55 - 48 = 7 \\]
  </li>
  <li><strong>2. Play only football:</strong><br>
    \\[ n(\\text{Only } F) = 35 - 7 = 28 \\]
  </li>
  <li><strong>3. Play only hockey:</strong><br>
    \\[ n(\\text{Only } H) = 20 - 7 = 13 \\]
  </li>
</ol>
<p><strong>Sanity check:</strong> \\( 28 + 13 + 7 + 15 = 63 \\) total students.</p>
</div>"""
        }
    ]

print("get_mf_part_a defined (15 Qs).")

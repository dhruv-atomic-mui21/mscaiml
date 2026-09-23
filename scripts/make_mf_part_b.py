# -*- coding: utf-8 -*-
# make_mf_part_b.py - Part B (Coordinate Geometry Q0-Q31) and Test Paper (Q1-Q8)
import json

def get_mf_part_b():
    return [
        {
            "id": "mf-b0",
            "title": "Geometry Q0: Cartesian Plane Plotting & Quadrant Classification",
            "difficulty": "Foundational",
            "category": "Coordinate Geometry (Part B)",
            "question": "Plot the points A(2, 3), B(-4, 1), C(0, -5) and D(3, -2) on the Cartesian plane. State which quadrant each point lies in.",
            "solution": """<div class="solution-content">
<p><strong>Quadrant Rules:</strong> QI: \\( (+, +) \\), QII: \\( (-, +) \\), QIII: \\( (-, -) \\), QIV: \\( (+, -) \\).</p>
<div class="data-table-wrapper">
  <table class="data-table">
    <thead><tr><th>Point</th><th>Coordinates \\( (x, y) \\)</th><th>Sign \\( (\\text{sgn}(x), \\text{sgn}(y)) \\)</th><th>Quadrant / Axis Location</th></tr></thead>
    <tbody>
      <tr><td><strong>A</strong></td><td>\\( (2, 3) \\)</td><td>\\( (+, +) \\)</td><td><span class="badge badge-info">Quadrant I</span></td></tr>
      <tr><td><strong>B</strong></td><td>\\( (-4, 1) \\)</td><td>\\( (-, +) \\)</td><td><span class="badge badge-info">Quadrant II</span></td></tr>
      <tr><td><strong>C</strong></td><td>\\( (0, -5) \\)</td><td>\\( (0, -) \\)</td><td><span class="badge badge-warning">Negative Y-Axis (Boundary between QIII & QIV)</span></td></tr>
      <tr><td><strong>D</strong></td><td>\\( (3, -2) \\)</td><td>\\( (+, -) \\)</td><td><span class="badge badge-info">Quadrant IV</span></td></tr>
    </tbody>
  </table>
</div>
</div>"""
        },
        {
            "id": "mf-b1",
            "title": "Geometry Q1: Derivation of the Cartesian Distance Formula",
            "difficulty": "Foundational",
            "category": "Coordinate Geometry (Part B)",
            "question": "Derive the Distance formula for two points in the Cartesian plane.",
            "solution": """<div class="solution-content">
<p>Let \\( P(x_1, y_1) \\) and \\( Q(x_2, y_2) \\) be two arbitrary points in the Cartesian 2D plane.</p>
<ol>
  <li>Construct a right-angled triangle \\( \\triangle PQR \\) by dropping perpendiculars from \\( P \\) and \\( Q \\) to the coordinate axes such that the vertex at the right angle is \\( R(x_2, y_1) \\).</li>
  <li>The horizontal base length is: \\[ PR = |x_2 - x_1| \\]</li>
  <li>The vertical altitude length is: \\[ QR = |y_2 - y_1| \\]</li>
  <li>By the <strong>Pythagorean Theorem</strong> in right triangle \\( \\triangle PQR \\):
    \\[ PQ^2 = PR^2 + QR^2 \\]
    \\[ PQ^2 = (x_2 - x_1)^2 + (y_2 - y_1)^2 \\]
  </li>
  <li>Taking the non-negative principal square root yields:
    \\[ d(P, Q) = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} \\]
  </li>
</ol>
<p><span class="badge badge-success">Proved</span>.</p>
</div>"""
        },
        {
            "id": "mf-b2",
            "title": "Geometry Q2: Right-Angled Triangle Verification",
            "difficulty": "Foundational",
            "category": "Coordinate Geometry (Part B)",
            "question": "Prove that the points A(4, 4), B(3, 5) and C(-1, -1) are the vertices of a right-angled triangle.",
            "solution": """<div class="solution-content">
<p>Compute square of distance for each of the three sides:</p>
<ul>
  <li>\\( AB^2 = (3 - 4)^2 + (5 - 4)^2 = (-1)^2 + (1)^2 = 1 + 1 = 2 \\)</li>
  <li>\\( BC^2 = (-1 - 3)^2 + (-1 - 5)^2 = (-4)^2 + (-6)^2 = 16 + 36 = 52 \\)</li>
  <li>\\( AC^2 = (-1 - 4)^2 + (-1 - 4)^2 = (-5)^2 + (-5)^2 = 25 + 25 = 50 \\)</li>
</ul>
<p>Checking the Converse of Pythagoras Theorem:</p>
\\[ AB^2 + AC^2 = 2 + 50 = 52 = BC^2 \\]
<p>Since the sum of squares of two sides equals the square of the third side (hypotenuse \\( BC \\)), \\( \\triangle ABC \\) is a <strong>right-angled triangle</strong> with right angle at vertex \\( A \\). <span class="badge badge-success">Proved</span>.</p>
</div>"""
        },
        {
            "id": "mf-b3",
            "title": "Geometry Q3: Solving for Unknown Coordinate from Given Distance",
            "difficulty": "Foundational",
            "category": "Coordinate Geometry (Part B)",
            "question": "If the distance between the points A(5, x) and B(2, 6) is 3√2, then find the value of x.",
            "solution": """<div class="solution-content">
<p>Apply distance formula between \\( A(5, x) \\) and \\( B(2, 6) \\):</p>
\\[ d(A, B) = \\sqrt{(5 - 2)^2 + (x - 6)^2} = 3\\sqrt{2} \\]
<p>Square both sides:</p>
\\[ (3)^2 + (x - 6)^2 = (3\\sqrt{2})^2 \\]
\\[ 9 + (x - 6)^2 = 18 \\]
\\[ (x - 6)^2 = 18 - 9 = 9 \\]
<p>Take square roots on both sides:</p>
\\[ x - 6 = \\pm 3 \\]
<ul>
  <li>Case 1: \\( x - 6 = 3 \\implies x = 9 \\)</li>
  <li>Case 2: \\( x - 6 = -3 \\implies x = 3 \\)</li>
</ul>
<p><strong>Values of x:</strong> \\[ x = 3 \\quad \\text{or} \\quad x = 9 \\]</p>
</div>"""
        },
        {
            "id": "mf-b4",
            "title": "Geometry Q4: Right-Angled Isosceles Triangle Proof",
            "difficulty": "Intermediate",
            "category": "Coordinate Geometry (Part B)",
            "question": "Show that the vertices of the triangle (7, 9), (3, -7) and (-3, 3) form a right-angled isosceles triangle.",
            "solution": """<div class="solution-content">
<p>Let \\( P(7, 9) \\), \\( Q(3, -7) \\), \\( R(-3, 3) \\).</p>
<ol>
  <li>\\( PQ^2 = (3 - 7)^2 + (-7 - 9)^2 = (-4)^2 + (-16)^2 = 16 + 256 = 272 \\)</li>
  <li>\\( QR^2 = (-3 - 3)^2 + (3 - (-7))^2 = (-6)^2 + (10)^2 = 36 + 100 = 136 \\)</li>
  <li>\\( PR^2 = (-3 - 7)^2 + (3 - 9)^2 = (-10)^2 + (-6)^2 = 100 + 36 = 136 \\)</li>
</ol>
<p><strong>Isosceles Property:</strong> \\( QR^2 = PR^2 = 136 \\implies QR = PR = \\sqrt{136} \\). Two sides are of equal length.</p>
<p><strong>Right-Angled Property:</strong> \\( QR^2 + PR^2 = 136 + 136 = 272 = PQ^2 \\).</p>
<p>Hence, \\( \\triangle PQR \\) is a <strong>right-angled isosceles triangle</strong> with hypotenuse \\( PQ \\) and right angle at \\( R \\). <span class="badge badge-success">Proved</span>.</p>
</div>"""
        },
        {
            "id": "mf-b5",
            "title": "Geometry Q5: Rhombus Verification via Side Equalities & Diagonals",
            "difficulty": "Intermediate",
            "category": "Coordinate Geometry (Part B)",
            "question": "Show that the points (1, 0), (5, 3), (2, 7) and (-2, 4) are the vertices of a rhombus.",
            "solution": """<div class="solution-content">
<p>Let \\( A(1, 0) \\), \\( B(5, 3) \\), \\( C(2, 7) \\), \\( D(-2, 4) \\).</p>
<ol>
  <li>Side \\( AB = \\sqrt{(5 - 1)^2 + (3 - 0)^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5 \\)</li>
  <li>Side \\( BC = \\sqrt{(2 - 5)^2 + (7 - 3)^2} = \\sqrt{9 + 16} = 5 \\)</li>
  <li>Side \\( CD = \\sqrt{(-2 - 2)^2 + (4 - 7)^2} = \\sqrt{16 + 9} = 5 \\)</li>
  <li>Side \\( DA = \\sqrt{(1 - (-2))^2 + (0 - 4)^2} = \\sqrt{9 + 16} = 5 \\)</li>
</ol>
<p>All four sides are equal: \\( AB = BC = CD = DA = 5 \\). Therefore, the quadrilateral is a <strong>rhombus</strong>.</p>
<p><em>Check diagonals:</em> \\( AC = \\sqrt{(2-1)^2 + (7-0)^2} = \\sqrt{1+49} = \\sqrt{50} \\), \\( BD = \\sqrt{(-2-5)^2 + (4-3)^2} = \\sqrt{49+1} = \\sqrt{50} \\). Equal diagonals confirm it is specifically a square (which is an equiangular rhombus). <span class="badge badge-success">Proved</span>.</p>
</div>"""
        },
        {
            "id": "mf-b6",
            "title": "Geometry Q6: Rectangle Verification via Opposite Sides and Diagonals",
            "difficulty": "Intermediate",
            "category": "Coordinate Geometry (Part B)",
            "question": "Show that (-1, 0), (2, 3), (4, 1) and (1, -2) are the vertices of a rectangle.",
            "solution": """<div class="solution-content">
<p>Let \\( A(-1, 0) \\), \\( B(2, 3) \\), \\( C(4, 1) \\), \\( D(1, -2) \\).</p>
<ol>
  <li>\\( AB^2 = (2 - (-1))^2 + (3 - 0)^2 = 9 + 9 = 18 \\)</li>
  <li>\\( BC^2 = (4 - 2)^2 + (1 - 3)^2 = 4 + 4 = 8 \\)</li>
  <li>\\( CD^2 = (1 - 4)^2 + (-2 - 1)^2 = 9 + 9 = 18 \\)</li>
  <li>\\( DA^2 = (-1 - 1)^2 + (0 - (-2))^2 = 4 + 4 = 8 \\)</li>
</ol>
<p>Opposite sides are equal: \\( AB = CD = \\sqrt{18} \\) and \\( BC = DA = \\sqrt{8} \\) (it is a parallelogram).</p>
<p>Check diagonals:</p>
<ul>
  <li>\\( AC^2 = (4 - (-1))^2 + (1 - 0)^2 = 25 + 1 = 26 \\)</li>
  <li>\\( BD^2 = (1 - 2)^2 + (-2 - 3)^2 = 1 + 25 = 26 \\)</li>
</ul>
<p>Since opposite sides are equal and diagonals are equal (\\( AC = BD = \\sqrt{26} \\)), \\( ABCD \\) is a <strong>rectangle</strong>. <span class="badge badge-success">Proved</span>.</p>
</div>"""
        },
        {
            "id": "mf-b7",
            "title": "Geometry Q7: Equidistant Point on Y-Axis",
            "difficulty": "Foundational",
            "category": "Coordinate Geometry (Part B)",
            "question": "Find the point on the Y-axis which is equidistant from the points (-5, -2) and (3, 2).",
            "solution": """<div class="solution-content">
<p>Any point on the Y-axis has coordinates \\( P(0, y) \\). Given \\( d(P, A) = d(P, B) \\) where \\( A(-5, -2) \\) and \\( B(3, 2) \\):</p>
\\[ PA^2 = PB^2 \\]
\\[ (0 - (-5))^2 + (y - (-2))^2 = (0 - 3)^2 + (y - 2)^2 \\]
\\[ (5)^2 + (y + 2)^2 = (-3)^2 + (y - 2)^2 \\]
\\[ 25 + (y^2 + 4y + 4) = 9 + (y^2 - 4y + 4) \\]
<p>Cancel \\( y^2 + 4 \\) from both sides:</p>
\\[ 25 + 4y = 9 - 4y \\]
\\[ 8y = 9 - 25 = -16 \\implies y = -2 \\]
<p><strong>Required Point on Y-Axis:</strong> \\[ P(0, -2) \\]</p>
</div>"""
        },
        {
            "id": "mf-b8",
            "title": "Geometry Q8: Area of Triangle from Coordinates",
            "difficulty": "Foundational",
            "category": "Coordinate Geometry (Part B)",
            "question": "Find the area of the triangle whose vertices are (4, 4), (3, -2) and (-3, 16).",
            "solution": """<div class="solution-content">
<p>Coordinate Area Formula:</p>
\\[ \\Delta = \\frac{1}{2} |x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)| \\]
<p>Substitute \\( (x_1, y_1) = (4, 4) \\), \\( (x_2, y_2) = (3, -2) \\), \\( (x_3, y_3) = (-3, 16) \\):</p>
\\[ \\Delta = \\frac{1}{2} |4(-2 - 16) + 3(16 - 4) + (-3)(4 - (-2))| \\]
\\[ \\Delta = \\frac{1}{2} |4(-18) + 3(12) - 3(6)| \\]
\\[ \\Delta = \\frac{1}{2} |-72 + 36 - 18| = \\frac{1}{2} |-54| = 27 \\text{ sq. units} \\]
<p><strong>Area:</strong> 27 square units.</p>
</div>"""
        },
        {
            "id": "mf-b9",
            "title": "Geometry Q9: Determining Unknown Vertex Coordinate from Given Triangle Area",
            "difficulty": "Intermediate",
            "category": "Coordinate Geometry (Part B)",
            "question": "For which value of x is the area of the triangle formed by the vertices (x, 4), (8, 2) and (6, 7) equal to 13 units?",
            "solution": """<div class="solution-content">
<p>Area equation:</p>
\\[ \\frac{1}{2} |x(2 - 7) + 8(7 - 4) + 6(4 - 2)| = 13 \\]
\\[ |x(-5) + 8(3) + 6(2)| = 26 \\]
\\[ |-5x + 24 + 12| = 26 \\implies |-5x + 36| = 26 \\]
<p>Two algebraic branches:</p>
<ul>
  <li>Branch 1: \\( -5x + 36 = 26 \\implies -5x = -10 \\implies x = 2 \\)</li>
  <li>Branch 2: \\( -5x + 36 = -26 \\implies -5x = -62 \\implies x = \\frac{62}{5} = 12.4 \\)</li>
</ul>
<p><strong>Values of x:</strong> \\[ x = 2 \\quad \\text{or} \\quad x = 12.4 \\]</p>
</div>"""
        },
        {
            "id": "mf-b10",
            "title": "Geometry Q10: Section Formula (Internal & External Division in 3:2 Ratio)",
            "difficulty": "Foundational",
            "category": "Coordinate Geometry (Part B)",
            "question": "Find the coordinates of the point which divides the line segment joining the points (6, 3) and (-4, 5) in the ratio 3:2 (i) internally and (ii) externally.",
            "solution": """<div class="solution-content">
<p>Let \\( A(6, 3) \\), \\( B(-4, 5) \\), and ratio \\( m:n = 3:2 \\).</p>
<ol>
  <li><strong>(i) Internal Division Formula:</strong>
    \\[ P = \\left( \\frac{m x_2 + n x_1}{m + n}, \\frac{m y_2 + n y_1}{m + n} \\right) \\]
    \\[ x = \\frac{3(-4) + 2(6)}{3 + 2} = \\frac{-12 + 12}{5} = 0 \\]
    \\[ y = \\frac{3(5) + 2(3)}{3 + 2} = \\frac{15 + 6}{5} = \\frac{21}{5} = 4.2 \\]
    <strong>Internal Point:</strong> \\[ P_{\\text{int}}(0, 4.2) \\]
  </li>
  <li><strong>(ii) External Division Formula:</strong>
    \\[ Q = \\left( \\frac{m x_2 - n x_1}{m - n}, \\frac{m y_2 - n y_1}{m - n} \\right) \\]
    \\[ x = \\frac{3(-4) - 2(6)}{3 - 2} = \\frac{-12 - 12}{1} = -24 \\]
    \\[ y = \\frac{3(5) - 2(3)}{3 - 2} = \\frac{15 - 6}{1} = 9 \\]
    <strong>External Point:</strong> \\[ Q_{\\text{ext}}(-24, 9) \\]
  </li>
</ol>
</div>"""
        },
        {
            "id": "mf-b11",
            "title": "Geometry Q11: Determining Section Ratio for Point P(-1, -1)",
            "difficulty": "Intermediate",
            "category": "Coordinate Geometry (Part B)",
            "question": "Find the ratio in which P(-1, -1) divides line segment AB, where A(4, 4), B(7, 7).",
            "solution": """<div class="solution-content">
<p>Let the division ratio be \\( k:1 \\). Using section formula on x-coordinate:</p>
\\[ x = \\frac{k x_2 + x_1}{k + 1} \\implies -1 = \\frac{k(7) + 4}{k + 1} \\]
\\[ -(k + 1) = 7k + 4 \\implies -k - 1 = 7k + 4 \\]
\\[ 8k = -5 \\implies k = -\\frac{5}{8} \\]
<p>The negative ratio signifies <strong>external division</strong> in the ratio \\( 5:8 \\).</p>
<p><strong>Conclusion:</strong> \\( P(-1, -1) \\) divides \\( AB \\) externally in the ratio <strong>5:8</strong>.</p>
</div>"""
        },
        {
            "id": "mf-b12",
            "title": "Geometry Q12: Y-Axis Division Ratio",
            "difficulty": "Foundational",
            "category": "Coordinate Geometry (Part B)",
            "question": "For A(-2, 3) and B(3, 0), find the ratio in which the Y-axis divides AB from A's side.",
            "solution": """<div class="solution-content">
<p>On the Y-axis, \\( x = 0 \\). Let the division ratio from \\( A \\) be \\( k:1 \\):</p>
\\[ 0 = \\frac{k(3) + 1(-2)}{k + 1} \\implies 3k - 2 = 0 \\implies k = \\frac{2}{3} \\]
<p><strong>Result:</strong> The Y-axis divides segment \\( AB \\) internally in the ratio <strong>2:3</strong>.</p>
<p><em>Point of intersection:</em> \\( y = \\frac{2(0) + 3(3)}{2 + 3} = \\frac{9}{5} = 1.8 \\implies (0, 1.8) \\).</p>
</div>"""
        },
        {
            "id": "mf-b13",
            "title": "Geometry Q13: Collinearity Test for Three Points",
            "difficulty": "Foundational",
            "category": "Coordinate Geometry (Part B)",
            "question": "Show that the points (1, 1), (2, 3) and (3, 5) are collinear.",
            "solution": """<div class="solution-content">
<p><strong>Method: Slope Equivalence</strong></p>
<ul>
  <li>Slope \\( m_1 \\) of segment joining \\( (1, 1) \\) and \\( (2, 3) \\):
    \\[ m_1 = \\frac{3 - 1}{2 - 1} = \\frac{2}{1} = 2 \\]
  </li>
  <li>Slope \\( m_2 \\) of segment joining \\( (2, 3) \\) and \\( (3, 5) \\):
    \\[ m_2 = \\frac{5 - 3}{3 - 2} = \\frac{2}{1} = 2 \\]
  </li>
</ul>
<p>Since \\( m_1 = m_2 = 2 \\) and the segments share the common point \\( (2, 3) \\), the three points are <strong>collinear</strong>. <span class="badge badge-success">Proved</span>.</p>
</div>"""
        },
        {
            "id": "mf-b14",
            "title": "Geometry Q14: Right-Angled Triangle via Perpendicular Slopes (Without Pythagoras)",
            "difficulty": "Foundational",
            "category": "Coordinate Geometry (Part B)",
            "question": "Without using the Pythagoras theorem, show that the points A(4, 4), B(3, 5) and C(-1, -1) are the vertices of a right-angled triangle.",
            "solution": """<div class="solution-content">
<p>Calculate slopes of lines \\( AB \\) and \\( AC \\):</p>
<ul>
  <li>Slope of line \\( AB \\): \\[ m_{AB} = \\frac{5 - 4}{3 - 4} = \\frac{1}{-1} = -1 \\]</li>
  <li>Slope of line \\( AC \\): \\[ m_{AC} = \\frac{-1 - 4}{-1 - 4} = \\frac{-5}{-5} = 1 \\]</li>
</ul>
<p>Evaluate the product of slopes:</p>
\\[ m_{AB} \\cdot m_{AC} = (-1) \\cdot (1) = -1 \\]
<p>Since the product of their slopes is \\( -1 \\), line \\( AB \\) is perpendicular to line \\( AC \\) (\\( AB \\perp AC \\)). Hence, angle \\( \\angle BAC = 90^\\circ \\) and \\( \\triangle ABC \\) is a right-angled triangle at \\( A \\). <span class="badge badge-success">Proved</span>.</p>
</div>"""
        },
        {
            "id": "mf-b15",
            "title": "Geometry Q15: Finding Line Slope from Given Angle (π/4)",
            "difficulty": "Intermediate",
            "category": "Coordinate Geometry (Part B)",
            "question": "If the angle between two lines is π/4 and the slope of one of the lines is 1/2, find the slope of the other line.",
            "solution": """<div class="solution-content">
<p>Given \\( \\theta = \\frac{\\pi}{4} \\implies \\tan \\theta = 1 \\), and \\( m_1 = 1/2 \\). Let \\( m_2 = m \\):</p>
\\[ \\tan \\theta = \\left| \\frac{m - m_1}{1 + m m_1} \\right| \\implies 1 = \\left| \\frac{m - 1/2}{1 + m/2} \\right| = \\left| \\frac{2m - 1}{2 + m} \\right| \\]
<p>Two cases:</p>
<ul>
  <li>Case 1: \\( \\frac{2m - 1}{2 + m} = 1 \\implies 2m - 1 = 2 + m \\implies m = 3 \\)</li>
  <li>Case 2: \\( \\frac{2m - 1}{2 + m} = -1 \\implies 2m - 1 = -2 - m \\implies 3m = -1 \\implies m = -\\frac{1}{3} \\)</li>
</ul>
<p><strong>Possible Slopes:</strong> \\[ m = 3 \\quad \\text{or} \\quad m = -\\frac{1}{3} \\]</p>
</div>"""
        },
        {
            "id": "mf-b16",
            "title": "Geometry Q16: Angles Between Three Line Pairs",
            "difficulty": "Intermediate",
            "category": "Coordinate Geometry (Part B)",
            "question": "Obtain the measure of the angle between the following pairs of lines:\\n1. x - y + 3 = 0, y - 2 = 0\\n2. x - y + 4 = 0, 5x - y + 3 = 0\\n3. x + y + 1 = 0, x - y = 0",
            "solution": """<div class="solution-content">
<ol>
  <li><strong>1. \\( x - y + 3 = 0 \\) and \\( y - 2 = 0 \\):</strong><br>
    \\( m_1 = 1 \\), \\( m_2 = 0 \\).<br>
    \\( \\tan \\theta = |(0 - 1)/(1 + 0)| = 1 \\implies \\theta = \\frac{\\pi}{4} = 45^\\circ \\).
  </li>
  <li><strong>2. \\( x - y + 4 = 0 \\) and \\( 5x - y + 3 = 0 \\):</strong><br>
    \\( m_1 = 1 \\), \\( m_2 = 5 \\).<br>
    \\( \\tan \\theta = |(5 - 1)/(1 + 5(1))| = \\frac{4}{6} = \\frac{2}{3} \\implies \\theta = \\arctan(2/3) \\approx 33.69^\\circ \\).
  </li>
  <li><strong>3. \\( x + y + 1 = 0 \\) and \\( x - y = 0 \\):</strong><br>
    \\( m_1 = -1 \\), \\( m_2 = 1 \\).<br>
    \\( m_1 \\cdot m_2 = (-1)(1) = -1 \\implies \\text{Lines are perpendicular, } \\theta = 90^\\circ \\).
  </li>
</ol>
</div>"""
        },
        {
            "id": "mf-b17",
            "title": "Geometry Q17: Equation of Perpendicular Bisector",
            "difficulty": "Intermediate",
            "category": "Coordinate Geometry (Part B)",
            "question": "Find the equation of the perpendicular bisector of the line segment joining the points A(2, 3) and B(6, -5).",
            "solution": """<div class="solution-content">
<ol>
  <li><strong>Midpoint M of AB:</strong>
    \\[ M = \\left(\\frac{2 + 6}{2}, \\frac{3 + (-5)}{2}\\right) = (4, -1) \\]
  </li>
  <li><strong>Slope of AB:</strong>
    \\[ m_{AB} = \\frac{-5 - 3}{6 - 2} = \\frac{-8}{4} = -2 \\]
  </li>
  <li><strong>Slope of perpendicular bisector:</strong>
    \\[ m_\\perp = -\\frac{1}{m_{AB}} = -\\frac{1}{-2} = \\frac{1}{2} \\]
  </li>
  <li><strong>Point-Slope Equation through M(4, -1):</strong>
    \\[ y - (-1) = \\frac{1}{2}(x - 4) \\implies y + 1 = \\frac{1}{2}x - 2 \\]
    \\[ 2y + 2 = x - 4 \\implies x - 2y - 6 = 0 \\]
  </li>
</ol>
<p><strong>Perpendicular Bisector:</strong> \\[ x - 2y - 6 = 0 \\]</p>
</div>"""
        },
        {
            "id": "mf-b18",
            "title": "Geometry Q18: Two-Point Line Equation",
            "difficulty": "Foundational",
            "category": "Coordinate Geometry (Part B)",
            "question": "Find the equation of the line passing through the points (2, 3) and (5, -2).",
            "solution": """<div class="solution-content">
<p>Slope \\( m = \\frac{-2 - 3}{5 - 2} = -\\frac{5}{3} \\).</p>
<p>Using point \\( (2, 3) \\):</p>
\\[ y - 3 = -\\frac{5}{3}(x - 2) \\implies 3(y - 3) = -5(x - 2) \\]
\\[ 3y - 9 = -5x + 10 \\implies 5x + 3y - 19 = 0 \\]
<p><strong>Equation:</strong> \\[ 5x + 3y - 19 = 0 \\]</p>
</div>"""
        },
        {
            "id": "mf-b19",
            "title": "Geometry Q19: Line with Intercept Ratio Divided by Given Point",
            "difficulty": "Intermediate",
            "category": "Coordinate Geometry (Part B)",
            "question": "Find the equation of the line which passes through the point (-5, 4) such that the portion intercepted between the axes is divided by the point in the ratio 1:2.",
            "solution": """<div class="solution-content">
<p>Let intercepts on axes be \\( A(a, 0) \\) and \\( B(0, b) \\). The point \\( P(-5, 4) \\) divides \\( AB \\) in ratio \\( 1:2 \\):</p>
\\[ -5 = \\frac{1(0) + 2(a)}{1 + 2} = \\frac{2a}{3} \\implies 2a = -15 \\implies a = -\\frac{15}{2} \\]
\\[ 4 = \\frac{1(b) + 2(0)}{1 + 2} = \\frac{b}{3} \\implies b = 12 \\]
<p>Using intercept form \\( \\frac{x}{a} + \\frac{y}{b} = 1 \\):</p>
\\[ \\frac{x}{-15/2} + \\frac{y}{12} = 1 \\implies -\\frac{2x}{15} + \\frac{y}{12} = 1 \\]
<p>Multiply through by LCM 60:</p>
\\[ -8x + 5y = 60 \\implies 8x - 5y + 60 = 0 \\]
<p><em>(If ratio is reversed 2:1, \\( a = -15, b = 6 \\implies 2x - 5y + 30 = 0 \\))</em>.</p>
</div>"""
        },
        {
            "id": "mf-b20",
            "title": "Geometry Q20: Family of Lines Passing Through Line Intersections",
            "difficulty": "Intermediate",
            "category": "Coordinate Geometry (Part B)",
            "question": "Find the equation of a line through the intersection of x - y - 1 = 0 and 2x - 3y + 1 = 0 such that it:\\n1. Has slope -2\\n2. Is parallel to x + y + 4 = 0\\n3. Passes through (1, 2)",
            "solution": """<div class="solution-content">
<p><strong>Step 1: Point of Intersection:</strong><br>
From \\( x - y - 1 = 0 \\implies x = y + 1 \\).<br>
Substitute into \\( 2x - 3y + 1 = 0 \\):<br>
\\( 2(y + 1) - 3y + 1 = 0 \\implies -y + 3 = 0 \\implies y = 3 \\).<br>
\\( x = 3 + 1 = 4 \\).<br>
Point of intersection is \\( P(4, 3) \\).</p>
<ol>
  <li><strong>1. Line with slope -2:</strong><br>
    \\( y - 3 = -2(x - 4) \\implies y - 3 = -2x + 8 \\implies 2x + y - 11 = 0 \\).
  </li>
  <li><strong>2. Parallel to \\( x + y + 4 = 0 \\) (slope = -1):</strong><br>
    \\( y - 3 = -1(x - 4) \\implies x + y - 7 = 0 \\).
  </li>
  <li><strong>3. Passes through \\( (1, 2) \\):</strong><br>
    Slope between \\( (4, 3) \\) and \\( (1, 2) \\): \\( m = \\frac{2 - 3}{1 - 4} = \\frac{-1}{-3} = \\frac{1}{3} \\).<br>
    \\( y - 2 = \\frac{1}{3}(x - 1) \\implies 3y - 6 = x - 1 \\implies x - 3y + 5 = 0 \\).
  </li>
</ol>
</div>"""
        },
        {
            "id": "mf-b21",
            "title": "Geometry Q21: Conversion to Slope-Intercept & Intercept Forms",
            "difficulty": "Foundational",
            "category": "Coordinate Geometry (Part B)",
            "question": "Convert the equation 3x - 4y + 12 = 0 into slope-intercept form and intercept form. Hence find its slope, y-intercept, and x-intercept.",
            "solution": """<div class="solution-content">
<ol>
  <li><strong>1. Slope-Intercept Form (\\( y = mx + c \\)):</strong>
    \\[ 4y = 3x + 12 \\implies y = \\frac{3}{4}x + 3 \\]
    <strong>Slope \\( m \\) = 3/4</strong>, <strong>Y-intercept \\( c \\) = 3</strong>.
  </li>
  <li><strong>2. Intercept Form (\\( \\frac{x}{a} + \\frac{y}{b} = 1 \\)):</strong>
    \\[ 3x - 4y = -12 \\]
    Divide by -12:
    \\[ \\frac{3x}{-12} - \\frac{4y}{-12} = 1 \\implies \\frac{x}{-4} + \\frac{y}{3} = 1 \\]
    <strong>X-intercept \\( a \\) = -4</strong>, <strong>Y-intercept \\( b \\) = 3</strong>.
  </li>
</ol>
</div>"""
        },
        {
            "id": "mf-b22",
            "title": "Geometry Q22: Midpoint Verification on Line Segment",
            "difficulty": "Foundational",
            "category": "Coordinate Geometry (Part B)",
            "question": "Find the midpoint of the line segment joining the points A(6, -3) and B(-2, 7). Also verify that this midpoint lies on the line joining A and B.",
            "solution": """<div class="solution-content">
<ol>
  <li><strong>Midpoint M:</strong>
    \\[ M = \\left( \\frac{6 + (-2)}{2}, \\frac{-3 + 7}{2} \\right) = \\left(\\frac{4}{2}, \\frac{4}{2}\\right) = (2, 2) \\]
  </li>
  <li><strong>Equation of line AB:</strong>
    Slope \\( m = \\frac{7 - (-3)}{-2 - 6} = \\frac{10}{-8} = -\\frac{5}{4} \\).<br>
    Line: \\( y - 2 = -\\frac{5}{4}(x - 2) \\implies 4y - 8 = -5x + 10 \\implies 5x + 4y - 18 = 0 \\).
  </li>
  <li><strong>Verification:</strong>
    Substitute \\( M(2, 2) \\) into LHS:
    \\[ 5(2) + 4(2) - 18 = 10 + 8 - 18 = 0 = \\text{RHS} \\]
    Verified!
  </li>
</ol>
</div>"""
        },
        {
            "id": "mf-b23",
            "title": "Geometry Q23: Perpendicular Distance from Point to Line",
            "difficulty": "Foundational",
            "category": "Coordinate Geometry (Part B)",
            "question": "Find the perpendicular distance of the point (3, -5) from the line 3x + 4y - 26 = 0.",
            "solution": """<div class="solution-content">
<p>Distance Formula:</p>
\\[ d = \\frac{|Ax_0 + By_0 + C|}{\\sqrt{A^2 + B^2}} \\]
<p>Substitute \\( A = 3, B = 4, C = -26 \\) and point \\( (3, -5) \\):</p>
\\[ d = \\frac{|3(3) + 4(-5) - 26|}{\\sqrt{3^2 + 4^2}} = \\frac{|9 - 20 - 26|}{\\sqrt{25}} = \\frac{|-37|}{5} = \\frac{37}{5} = 7.4 \\text{ units} \\]
<p><strong>Perpendicular Distance:</strong> 7.4 units.</p>
</div>"""
        },
        {
            "id": "mf-b24",
            "title": "Geometry Q24: Perpendicular Line Construction Through a Given Point",
            "difficulty": "Foundational",
            "category": "Coordinate Geometry (Part B)",
            "question": "Find the equation of the line passing through the point (2, 3) and perpendicular (normal) to the line 4x - 3y + 7 = 0.",
            "solution": """<div class="solution-content">
<p>Any line perpendicular to \\( Ax + By + C = 0 \\) has the form \\( Bx - Ay + k = 0 \\).</p>
<p>Here \\( A = 4, B = -3 \\), so perpendicular line is:</p>
\\[ 3x + 4y + k = 0 \\]
<p>Substitute point \\( (2, 3) \\):</p>
\\[ 3(2) + 4(3) + k = 0 \\implies 6 + 12 + k = 0 \\implies k = -18 \\]
<p><strong>Perpendicular Line Equation:</strong> \\[ 3x + 4y - 18 = 0 \\]</p>
</div>"""
        },
        {
            "id": "mf-b25",
            "title": "Geometry Q25: Least Squares Regression Model (Data Set 1)",
            "difficulty": "Intermediate",
            "category": "Optimization & Regression (Part B)",
            "question": "The following data shows values of x and y: x = [1, 2, 3, 4, 5], y = [2, 4, 5, 4, 5]. Using the Least Square Method, find slope (m) and intercept (c) of the best-fit line y = mx + c. Write the equation of regression line.",
            "solution": """<div class="solution-content">
<p>Number of observations \\( N = 5 \\).</p>
<div class="data-table-wrapper">
  <table class="data-table">
    <thead><tr><th>\\( x_i \\)</th><th>\\( y_i \\)</th><th>\\( x_i^2 \\)</th><th>\\( x_i y_i \\)</th></tr></thead>
    <tbody>
      <tr><td>1</td><td>2</td><td>1</td><td>2</td></tr>
      <tr><td>2</td><td>4</td><td>4</td><td>8</td></tr>
      <tr><td>3</td><td>5</td><td>9</td><td>15</td></tr>
      <tr><td>4</td><td>4</td><td>16</td><td>16</td></tr>
      <tr><td>5</td><td>5</td><td>25</td><td>25</td></tr>
      <tr><td><strong>\\(\\sum x = 15\\)</strong></td><td><strong>\\(\\sum y = 20\\)</strong></td><td><strong>\\(\\sum x^2 = 55\\)</strong></td><td><strong>\\(\\sum xy = 66\\)</strong></td></tr>
    </tbody>
  </table>
</div>
<p>Averages: \\( \\bar{x} = 15/5 = 3 \\), \\( \\bar{y} = 20/5 = 4 \\).</p>
<p><strong>Slope Formula:</strong></p>
\\[ m = \\frac{N \\sum xy - (\\sum x)(\\sum y)}{N \\sum x^2 - (\\sum x)^2} = \\frac{5(66) - (15)(20)}{5(55) - (15)^2} = \\frac{330 - 300}{275 - 225} = \\frac{30}{50} = 0.6 \\]
<p><strong>Intercept Formula:</strong></p>
\\[ c = \\bar{y} - m \\bar{x} = 4 - (0.6)(3) = 4 - 1.8 = 2.2 \\]
<p><strong>Regression Equation:</strong> \\[ y = 0.6x + 2.2 \\]</p>
</div>"""
        },
        {
            "id": "mf-b26",
            "title": "Geometry Q26: 3D Plane Equation from Point and Normal Direction Ratios",
            "difficulty": "Intermediate",
            "category": "3D Geometry & Planes (Part B)",
            "question": "Find the equation of the plane passing through the point (1, 2, 3) and having direction ratios of its normal as (2, -1, 4).",
            "solution": """<div class="solution-content">
<p>Standard plane equation with normal \\( \\langle A, B, C \\rangle \\) through \\( (x_1, y_1, z_1) \\):</p>
\\[ A(x - x_1) + B(y - y_1) + C(z - z_1) = 0 \\]
<p>Substitute \\( A = 2, B = -1, C = 4 \\) and point \\( (1, 2, 3) \\):</p>
\\[ 2(x - 1) - 1(y - 2) + 4(z - 3) = 0 \\]
\\[ 2x - 2 - y + 2 + 4z - 12 = 0 \\]
\\[ 2x - y + 4z - 12 = 0 \\]
<p><strong>Equation of the Plane:</strong> \\[ 2x - y + 4z = 12 \\]</p>
</div>"""
        },
        {
            "id": "mf-b27",
            "title": "Geometry Q27: Radius of Circle from Origin to Point",
            "difficulty": "Foundational",
            "category": "Coordinate Geometry (Part B)",
            "question": "Find the radius of the circle whose centre is at (0, 0) and which passes through the point (-6, 8).",
            "solution": """<div class="solution-content">
<p>The radius \\( r \\) is the Euclidean distance from center \\( (0, 0) \\) to point \\( (-6, 8) \\):</p>
\\[ r = \\sqrt{(-6 - 0)^2 + (8 - 0)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10 \\text{ units} \\]
<p><strong>Radius:</strong> 10 units.</p>
</div>"""
        },
        {
            "id": "mf-b28",
            "title": "Geometry Q28: Finding Other Endpoint Given Midpoint",
            "difficulty": "Foundational",
            "category": "Coordinate Geometry (Part B)",
            "question": "The coordinates of the midpoint of a segment are (2, 3). If coordinates of one endpoint are (6, 5), find the coordinates of the other endpoint.",
            "solution": """<div class="solution-content">
<p>Let endpoint be \\( P(x, y) \\). Using midpoint formula:</p>
\\[ \\frac{x + 6}{2} = 2 \\implies x + 6 = 4 \\implies x = -2 \\]
\\[ \\frac{y + 5}{2} = 3 \\implies y + 5 = 6 \\implies y = 1 \\]
<p><strong>Other Endpoint Coordinates:</strong> \\[ (-2, 1) \\]</p>
</div>"""
        },
        {
            "id": "mf-b29",
            "title": "Geometry Q29: Triangle Centroid Calculation",
            "difficulty": "Foundational",
            "category": "Coordinate Geometry (Part B)",
            "question": "The coordinates of the vertices of a triangle are (3, -1), (10, 7) and (5, 3). Find the coordinates of its centroid.",
            "solution": """<div class="solution-content">
<p>Centroid Formula:</p>
\\[ G = \\left( \\frac{x_1 + x_2 + x_3}{3}, \\frac{y_1 + y_2 + y_3}{3} \\right) \\]
\\[ x_G = \\frac{3 + 10 + 5}{3} = \\frac{18}{3} = 6 \\]
\\[ y_G = \\frac{-1 + 7 + 3}{3} = \\frac{9}{3} = 3 \\]
<p><strong>Centroid Coordinates:</strong> \\[ G(6, 3) \\]</p>
</div>"""
        },
        {
            "id": "mf-b30",
            "title": "Geometry Q30: Distance from P(-6, 4) to Line 5x - 3y + 15 = 0",
            "difficulty": "Foundational",
            "category": "Coordinate Geometry (Part B)",
            "question": "Determine the distance from point P(-6, 4) to the line with equation 5x - 3y + 15 = 0.",
            "solution": """<div class="solution-content">
<p>Perpendicular distance:</p>
\\[ d = \\frac{|5(-6) - 3(4) + 15|}{\\sqrt{5^2 + (-3)^2}} = \\frac{|-30 - 12 + 15|}{\\sqrt{25 + 9}} = \\frac{|-27|}{\\sqrt{34}} = \\frac{27}{\\sqrt{34}} \\approx 4.6308 \\text{ units} \\]
<p><strong>Exact Distance:</strong> \\( \\frac{27}{\\sqrt{34}} \\approx 4.63 \\) units.</p>
</div>"""
        },
        {
            "id": "mf-b31",
            "title": "Geometry Q31: Least Squares Fit for Test Marks vs Final Exam Scores",
            "difficulty": "Intermediate",
            "category": "Optimization & Regression (Part B)",
            "question": "The following data shows marks obtained by students in a class test (x) and final exam (y): x = [2, 4, 6, 8, 10], y = [3, 7, 5, 10, 12]. Using the Least Square Method, find slope (m) and intercept (c) of best-fit line y = mx + c.",
            "solution": """<div class="solution-content">
<p>Number of points \\( N = 5 \\).</p>
<div class="data-table-wrapper">
  <table class="data-table">
    <thead><tr><th>\\( x_i \\)</th><th>\\( y_i \\)</th><th>\\( x_i^2 \\)</th><th>\\( x_i y_i \\)</th></tr></thead>
    <tbody>
      <tr><td>2</td><td>3</td><td>4</td><td>6</td></tr>
      <tr><td>4</td><td>7</td><td>16</td><td>28</td></tr>
      <tr><td>6</td><td>5</td><td>36</td><td>30</td></tr>
      <tr><td>8</td><td>10</td><td>64</td><td>80</td></tr>
      <tr><td>10</td><td>12</td><td>100</td><td>120</td></tr>
      <tr><td><strong>\\(\\sum x = 30\\)</strong></td><td><strong>\\(\\sum y = 37\\)</strong></td><td><strong>\\(\\sum x^2 = 220\\)</strong></td><td><strong>\\(\\sum xy = 264\\)</strong></td></tr>
    </tbody>
  </table>
</div>
<p>Averages: \\( \\bar{x} = 30/5 = 6 \\), \\( \\bar{y} = 37/5 = 7.4 \\).</p>
\\[ m = \\frac{5(264) - (30)(37)}{5(220) - (30)^2} = \\frac{1320 - 1110}{1100 - 900} = \\frac{210}{200} = 1.05 \\]
\\[ c = \\bar{y} - m \\bar{x} = 7.4 - (1.05)(6) = 7.4 - 6.3 = 1.1 \\]
<p><strong>Best-Fit Regression Line:</strong> \\[ y = 1.05x + 1.1 \\]</p>
</div>"""
        }
    ]

def get_mf_paper():
    return [
        {
            "id": "mf-p1",
            "title": "Paper Q1: Distance and Midpoint of AB",
            "difficulty": "Foundational",
            "category": "Exam Paper Problems",
            "question": "Let A be (-3, 5) and B be (5, -10). Find (1) the distance AB, and (2) the midpoint P of AB.",
            "solution": """<div class="solution-content">
<ol>
  <li><strong>1. Distance AB:</strong>
    \\[ AB = \\sqrt{(5 - (-3))^2 + (-10 - 5)^2} = \\sqrt{8^2 + (-15)^2} = \\sqrt{64 + 225} = \\sqrt{289} = 17 \\text{ units} \\]
  </li>
  <li><strong>2. Midpoint P of AB:</strong>
    \\[ P = \\left( \\frac{-3 + 5}{2}, \\frac{5 + (-10)}{2} \\right) = \\left( \\frac{2}{2}, \\frac{-5}{2} \\right) = (1, -2.5) \\]
  </li>
</ol>
</div>"""
        },
        {
            "id": "mf-p2",
            "title": "Paper Q2: External Division in 4:3 Ratio",
            "difficulty": "Intermediate",
            "category": "Exam Paper Problems",
            "question": "Find the coordinates of the point P which divides the interval A(-3, -7), B(-1, -4) externally in the ratio 4:3.",
            "solution": """<div class="solution-content">
<p>External Section Formula with \\( m=4, n=3 \\):</p>
\\[ x = \\frac{m x_2 - n x_1}{m - n} = \\frac{4(-1) - 3(-3)}{4 - 3} = \\frac{-4 + 9}{1} = 5 \\]
\\[ y = \\frac{m y_2 - n y_1}{m - n} = \\frac{4(-4) - 3(-7)}{4 - 3} = \\frac{-16 + 21}{1} = 5 \\]
<p><strong>External Division Point:</strong> \\[ P(5, 5) \\]</p>
</div>"""
        },
        {
            "id": "mf-p3a",
            "title": "Paper Q3: Line Parallel to X-Axis Through Intersection (with OR Alternative)",
            "difficulty": "Intermediate",
            "category": "Exam Paper Problems",
            "question": "Find the equation of the line parallel to the x-axis which passes through the point where the lines 4x + 3y - 6 = 0 and x - 2y - 7 = 0 meet.\\nOR\\nFind the equation of the line which passes through (2, 3) and the point of intersection of 3x + 2y = 2 and 4x + 3y = 7.",
            "solution": """<div class="solution-content">
<h4>Main Question:</h4>
<p>Solve system: \\( x = 2y + 7 \\). Substitute into first equation:</p>
\\[ 4(2y + 7) + 3y - 6 = 0 \\implies 8y + 28 + 3y - 6 = 0 \\implies 11y + 22 = 0 \\implies y = -2 \\]
\\( x = 2(-2) + 7 = 3 \\). Intersection point is \\( (3, -2) \\).<br>
A line parallel to the x-axis has zero slope (\\( y = \\text{constant} \\)):<br>
<strong>Required Line:</strong> \\[ y = -2 \\quad (\\text{or } y + 2 = 0) \\]

<h4>OR Alternative:</h4>
<p>Solve system: \\( 3x + 2y = 2 \\) and \\( 4x + 3y = 7 \\).<br>
Multiply Eq 1 by 3: \\( 9x + 6y = 6 \\).<br>
Multiply Eq 2 by 2: \\( 8x + 6y = 14 \\).<br>
Subtract: \\( x = -8 \\).<br>
Then \\( 3(-8) + 2y = 2 \\implies 2y = 26 \\implies y = 13 \\). Point of intersection is \\( (-8, 13) \\).<br>
Line through \\( (2, 3) \\) and \\( (-8, 13) \\):<br>
Slope \\( m = \\frac{13 - 3}{-8 - 2} = \\frac{10}{-10} = -1 \\).<br>
Equation: \\( y - 3 = -1(x - 2) \\implies x + y - 5 = 0 \\).</p>
</div>"""
        },
        {
            "id": "mf-p4",
            "title": "Paper Q4: Perpendicular and Parallel Line Construction",
            "difficulty": "Intermediate",
            "category": "Exam Paper Problems",
            "question": "Find the equation of the line l through (1, 3) perpendicular to the line 2x + 3y = 12. Find the equation of the line through (4, 5) parallel to l.",
            "solution": """<div class="solution-content">
<ol>
  <li><strong>Line l:</strong><br>
    Perpendicular to \\( 2x + 3y = 12 \\) takes form \\( 3x - 2y + k = 0 \\).<br>
    Passing through \\( (1, 3) \\): \\( 3(1) - 2(3) + k = 0 \\implies -3 + k = 0 \\implies k = 3 \\).<br>
    <strong>Line l:</strong> \\[ 3x - 2y + 3 = 0 \\]
  </li>
  <li><strong>Parallel Line through (4, 5):</strong><br>
    Same slope \\( 3x - 2y + c = 0 \\).<br>
    Passing through \\( (4, 5) \\): \\( 3(4) - 2(5) + c = 0 \\implies 12 - 10 + c = 0 \\implies c = -2 \\).<br>
    <strong>Parallel Line:</strong> \\[ 3x - 2y - 2 = 0 \\]
  </li>
</ol>
</div>"""
        },
        {
            "id": "mf-p5",
            "title": "Paper Q5: Perpendicular Distance from P(-6, -7) to 3x + 4y = 11",
            "difficulty": "Foundational",
            "category": "Exam Paper Problems",
            "question": "What is the distance d of the point P(-6, -7) from the line l with equation 3x + 4y = 11?",
            "solution": """<div class="solution-content">
<p>Rewrite line as \\( 3x + 4y - 11 = 0 \\):</p>
\\[ d = \\frac{|3(-6) + 4(-7) - 11|}{\\sqrt{3^2 + 4^2}} = \\frac{|-18 - 28 - 11|}{5} = \\frac{|-57|}{5} = 11.4 \\text{ units} \\]
<p><strong>Distance d:</strong> 11.4 units.</p>
</div>"""
        },
        {
            "id": "mf-p6",
            "title": "Paper Q6: Triangle Area with Vertices (3, 6), (7, 8), and (5, 2)",
            "difficulty": "Foundational",
            "category": "Exam Paper Problems",
            "question": "Three points A(3, 6), B(7, 8) and C(5, 2) are the vertices of triangle ABC. Find the area of this triangle.",
            "solution": """<div class="solution-content">
\\[ \\Delta = \\frac{1}{2} |3(8 - 2) + 7(2 - 6) + 5(6 - 8)| \\]
\\[ \\Delta = \\frac{1}{2} |3(6) + 7(-4) + 5(-2)| = \\frac{1}{2} |18 - 28 - 10| = \\frac{1}{2} |-20| = 10 \\text{ sq. units} \\]
<p><strong>Area of Triangle ABC:</strong> 10 square units.</p>
</div>"""
        },
        {
            "id": "mf-p7",
            "title": "Paper Q7: Rhombus Proof for (1, 0), (5, 3), (2, 7), (-2, 4)",
            "difficulty": "Intermediate",
            "category": "Exam Paper Problems",
            "question": "Show that the points (1, 0), (5, 3), (2, 7) and (-2, 4) are the vertices of a rhombus.",
            "solution": """<div class="solution-content">
<p>All four side lengths compute to 5:</p>
<ul>
  <li>\\( d_1 = \\sqrt{(5 - 1)^2 + (3 - 0)^2} = \\sqrt{16 + 9} = 5 \\)</li>
  <li>\\( d_2 = \\sqrt{(2 - 5)^2 + (7 - 3)^2} = \\sqrt{9 + 16} = 5 \\)</li>
  <li>\\( d_3 = \\sqrt{(-2 - 2)^2 + (4 - 7)^2} = \\sqrt{16 + 9} = 5 \\)</li>
  <li>\\( d_4 = \\sqrt{(1 - (-2))^2 + (0 - 4)^2} = \\sqrt{9 + 16} = 5 \\)</li>
</ul>
<p>Since all 4 side lengths are equal, it forms a <strong>rhombus</strong>. <span class="badge badge-success">Proved</span>.</p>
</div>"""
        },
        {
            "id": "mf-p8",
            "title": "Paper Q8: Cartesian Equation of 3D Plane from 3 Points",
            "difficulty": "Advanced",
            "category": "Exam Paper Problems",
            "question": "Determine the Cartesian equation of the plane containing the points A(-1, 2, 5), B(3, 2, 4), and C(-2, -3, 6).",
            "solution": """<div class="solution-content">
<ol>
  <li><strong>Displacement vectors:</strong><br>
    \\( \\vec{AB} = \\langle 3 - (-1), 2 - 2, 4 - 5 \\rangle = \\langle 4, 0, -1 \\rangle \\)<br>
    \\( \\vec{AC} = \\langle -2 - (-1), -3 - 2, 6 - 5 \\rangle = \\langle -1, -5, 1 \\rangle \\)
  </li>
  <li><strong>Normal vector via cross product \\( \\mathbf{n} = \\vec{AB} \\times \\vec{AC} \\):</strong>
    \\[ \\mathbf{n} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ 4 & 0 & -1 \\\\ -1 & -5 & 1 \\end{vmatrix} = \\mathbf{i}(0 - 5) - \\mathbf{j}(4 - 1) + \\mathbf{k}(-20 - 0) = \\langle -5, -3, -20 \\rangle \\]
  </li>
  <li><strong>Cartesian Equation through A(-1, 2, 5):</strong>
    \\[ -5(x - (-1)) - 3(y - 2) - 20(z - 5) = 0 \\]
    \\[ -5x - 5 - 3y + 6 - 20z + 100 = 0 \\]
    \\[ -5x - 3y - 20z + 101 = 0 \\implies 5x + 3y + 20z - 101 = 0 \\]
  </li>
</ol>
<p><strong>Cartesian Plane Equation:</strong> \\[ 5x + 3y + 20z - 101 = 0 \\]</p>
</div>"""
        }
    ]

print("make_mf_part_b ready (32 Part B Qs + 8 Paper Qs = 40 Qs).")

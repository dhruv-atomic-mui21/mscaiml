# -*- coding: utf-8 -*-
# build_mf_module.py - Assembles sem1_mf_data.py with all 55 completed questions & topics
import os
import json

def get_mf_topics():
    return [
        {
            "id": "mf-t1",
            "title": "Set Theory Foundations & Notation",
            "tag": "Foundations",
            "content": """
              <p>A <strong>set</strong> is a well-defined collection of distinct objects called elements. Two canonical forms of set specification:</p>
              <ul>
                <li><strong>Roster (Tabular) Form:</strong> Explicit enumeration of elements within curly braces, e.g., \\( A = \\{2, 3, 5, 7, 11\\} \\).</li>
                <li><strong>Set-Builder Form:</strong> Characterization through predicates, e.g., \\( B = \\{x \\in \\mathbb{N} \\mid x \\text{ is prime } \\land x < 15\\} \\).</li>
              </ul>
              <div class="callout callout-info">
                <div class="callout-title">Key Set Cardinalities & Relations</div>
                <p>\\( n(A) \\) denotes cardinality. Subset \\( A \\subseteq B \\iff \\forall x (x \\in A \\implies x \\in B) \\). The empty set \\( \\emptyset \\) satisfies \\( \\emptyset \\subseteq X \\) for every set \\( X \\). The power set \\( \\mathcal{P}(A) \\) contains all subsets and has cardinality \\( 2^{n(A)} \\).</p>
              </div>
            """
        },
        {
            "id": "mf-t2",
            "title": "Set Operations & Venn Diagrams",
            "tag": "Operations",
            "content": """
              <p>Fundamental Boolean operations on sets in universe \\( U \\):</p>
              <ul>
                <li><strong>Union (\\( A \\cup B \\)):</strong> \\( \\{x \\in U \\mid x \\in A \\lor x \\in B\\} \\).</li>
                <li><strong>Intersection (\\( A \\cap B \\)):</strong> \\( \\{x \\in U \\mid x \\in A \\land x \\in B\\} \\).</li>
                <li><strong>Difference (\\( A \\setminus B \\)):</strong> \\( \\{x \\in U \\mid x \\in A \\land x \\notin B\\} \\).</li>
                <li><strong>Complement (\\( A' \\text{ or } A^c \\)):</strong> \\( \\{x \\in U \\mid x \\notin A\\} = U \\setminus A \\).</li>
                <li><strong>Cartesian Product (\\( A \\times B \\)):</strong> \\( \\{(a, b) \\mid a \\in A, b \\in B\\} \\), with \\( n(A \\times B) = n(A) \\cdot n(B) \\).</li>
              </ul>
            """
        },
        {
            "id": "mf-t3",
            "title": "De Morgan's Laws & Inclusion-Exclusion",
            "tag": "Laws & Proofs",
            "content": """
              <div class="callout callout-info">
                <div class="callout-title">De Morgan's Laws</div>
                <ol>
                  <li>\\( (A \\cup B)' = A' \\cap B' \\) (The complement of a union is the intersection of complements)</li>
                  <li>\\( (A \\cap B)' = A' \\cup B' \\) (The complement of an intersection is the union of complements)</li>
                </ol>
              </div>
              <p><strong>Principle of Inclusion-Exclusion (PIE) for 3 Sets:</strong></p>
              <p>\\[ n(A \\cup B \\cup C) = n(A) + n(B) + n(C) - n(A \\cap B) - n(B \\cap C) - n(C \\cap A) + n(A \\cap B \\cap C) \\]</p>
            """
        },
        {
            "id": "mf-t4",
            "title": "Bit Representation of Sets & Power Sets",
            "tag": "Discrete Structures",
            "content": """
              <p>Let universe \\( S = \\{a_1, a_2, \\dots, a_n\\} \\) be ordered. Any subset \\( A \\subseteq S \\) can be uniquely represented by a bit string \\( b_n b_{n-1} \\dots b_1 \\) of length \\( n \\), where:</p>
              <p>\\[ b_i = \\begin{cases} 1 & \\text{if } a_i \\in A \\\\ 0 & \\text{if } a_i \\notin A \\end{cases} \\]</p>
              <p>Bitwise OR computes \\( A \\cup B \\), bitwise AND computes \\( A \\cap B \\), and bitwise NOT computes \\( A' \\) in \\( O(1) \\) machine word instructions.</p>
            """
        },
        {
            "id": "mf-t5",
            "title": "2D & 3D Coordinate Geometry & Section Formula",
            "tag": "Geometry",
            "content": """
              <p>Cartesian Euclidean metrics between points \\( P(x_1, y_1, z_1) \\) and \\( Q(x_2, y_2, z_2) \\):</p>
              <ul>
                <li><strong>Distance Formula:</strong> \\( d(P, Q) = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2} \\).</li>
                <li><strong>Midpoint Formula:</strong> \\( M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}, \\frac{z_1 + z_2}{2}\\right) \\).</li>
                <li><strong>Section Formula (Internal \\( m:n \\)):</strong> \\( P = \\left(\\frac{m x_2 + n x_1}{m + n}, \\frac{m y_2 + n y_1}{m + n}\\right) \\).</li>
                <li><strong>Section Formula (External \\( m:n \\)):</strong> \\( P = \\left(\\frac{m x_2 - n x_1}{m - n}, \\frac{m y_2 - n y_1}{m - n}\\right) \\).</li>
              </ul>
            """
        },
        {
            "id": "mf-t6",
            "title": "Straight Lines, Angles & Perpendicular Distance",
            "tag": "Analytic Geometry",
            "content": """
              <p>Standard algebraic forms for a 2D line:</p>
              <ul>
                <li><strong>Slope-Intercept:</strong> \\( y = mx + c \\), where \\( m = \\tan \\theta \\).</li>
                <li><strong>General Form:</strong> \\( Ax + By + C = 0 \\), slope \\( m = -A/B \\).</li>
                <li><strong>Intercept Form:</strong> \\( \\frac{x}{a} + \\frac{y}{b} = 1 \\).</li>
                <li><strong>Angle Between Lines:</strong> \\( \\tan \\theta = \\left| \\frac{m_2 - m_1}{1 + m_1 m_2} \\right| \\). Parallel if \\( m_1 = m_2 \\); Perpendicular if \\( m_1 m_2 = -1 \\).</li>
                <li><strong>Perpendicular Distance from \\( (x_0, y_0) \\):</strong> \\[ d = \\frac{|Ax_0 + By_0 + C|}{\\sqrt{A^2 + B^2}} \\]</li>
              </ul>
            """
        },
        {
            "id": "mf-t7",
            "title": "Planes & Hyperplanes in Machine Learning",
            "tag": "Linear Algebra",
            "content": """
              <p>A plane in \\( \\mathbb{R}^3 \\) passing through \\( P_0(x_0, y_0, z_0) \\) with normal vector \\( \\mathbf{n} = \\langle A, B, C \\rangle \\) is defined by:</p>
              <p>\\[ A(x - x_0) + B(y - y_0) + C(z - z_0) = 0 \\implies Ax + By + Cz + D = 0 \\]</p>
              <p>In \\( n \\)-dimensional feature space (used in Support Vector Machines and perceptrons), this generalizes to an affine <strong>hyperplane</strong>: \\( \\mathbf{w}^T \\mathbf{x} + b = 0 \\).</p>
            """
        },
        {
            "id": "mf-t8",
            "title": "The Least Squares Regression Method",
            "tag": "Statistical Optimization",
            "content": """
              <p>To fit a straight line \\( y = mx + c \\) minimizing the sum of squared vertical residuals \\( S = \\sum_{i=1}^N (y_i - (mx_i + c))^2 \\), setting partial derivatives \\( \\frac{\\partial S}{\\partial m} = 0 \\) and \\( \\frac{\\partial S}{\\partial c} = 0 \\) yields the <strong>Normal Equations</strong>:</p>
              <ol>
                <li>\\[ \\sum y = m \\sum x + N c \\]</li>
                <li>\\[ \\sum xy = m \\sum x^2 + c \\sum x \\]</li>
              </ol>
              <p>Solving simultaneously yields the closed-form ordinary least squares estimators:</p>
              <p>\\[ m = \\frac{N \\sum xy - (\\sum x)(\\sum y)}{N \\sum x^2 - (\\sum x)^2}, \\quad c = \\bar{y} - m \\bar{x} \\]</p>
            """
        }
    ]

def get_mf_cheatsheet():
    return [
        {
            "title": "Coordinate Geometry & Set Theory Formulas",
            "content": """
              <div class="data-table-wrapper">
                <table class="data-table">
                  <thead><tr><th>Concept</th><th>Formula</th></tr></thead>
                  <tbody>
                    <tr><td>Distance (2D)</td><td>\\( d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} \\)</td></tr>
                    <tr><td>Area of Triangle</td><td>\\( \\frac{1}{2} |x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)| \\)</td></tr>
                    <tr><td>Centroid</td><td>\\( G = \\left(\\frac{x_1 + x_2 + x_3}{3}, \\frac{y_1 + y_2 + y_3}{3}\\right) \\)</td></tr>
                    <tr><td>Perpendicular Distance</td><td>\\( d = \\frac{|Ax_1 + By_1 + C|}{\\sqrt{A^2 + B^2}} \\)</td></tr>
                    <tr><td>Angle Between Lines</td><td>\\( \\tan \\theta = \\left|\\frac{m_2 - m_1}{1 + m_1 m_2}\\right| \\)</td></tr>
                    <tr><td>Inclusion-Exclusion (2 Sets)</td><td>\\( n(A \\cup B) = n(A) + n(B) - n(A \\cap B) \\)</td></tr>
                    <tr><td>De Morgan I</td><td>\\( (A \\cup B)' = A' \\cap B' \\)</td></tr>
                    <tr><td>Least Squares Slope</td><td>\\( m = \\frac{N \\sum xy - \\sum x \\sum y}{N \\sum x^2 - (\\sum x)^2} \\)</td></tr>
                  </tbody>
                </table>
              </div>
            """
        }
    ]

print("get_mf_topics and cheatsheet defined.")

from make_mf_data import get_mf_part_a
from make_mf_part_b import get_mf_part_b, get_mf_paper

def build_mf_data():
    part_a = get_mf_part_a()
    part_b = get_mf_part_b()
    paper = get_mf_paper()
    all_assignments = part_a + part_b + paper
    return {
        "id": "mathematical-foundation",
        "code": "AIML-103",
        "name": "Mathematical Foundation",
        "subtitle": "Set Theory, Analytic Coordinate Geometry & Least Squares",
        "stats": { "topics": 8, "assignments": len(all_assignments), "demos": 2 },
        "overview": "Rigorous treatment of formal Set Theory, Venn diagram combinatorics, bit representation of power sets, Cartesian geometry, distance and section metrics, line and plane equations in R^2 and R^3, and Least Squares regression fitting.",
        "topics": get_mf_topics(),
        "assignments": all_assignments,
        "cheatsheet": get_mf_cheatsheet()
    }

if __name__ == "__main__":
    mf_data = build_mf_data()
    print(f"Total MF assignments compiled: {len(mf_data['assignments'])}")
    with open("sem1_mf_data.py", "w", encoding="utf-8") as f:
        f.write("# -*- coding: utf-8 -*-\n")
        f.write("# sem1_mf_data.py - Complete Mathematical Foundation dataset\n\n")
        f.write("def get_mf_data():\n")
        f.write("    return " + repr(mf_data) + "\n")
    print("sem1_mf_data.py successfully written.")

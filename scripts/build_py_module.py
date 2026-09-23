# -*- coding: utf-8 -*-
# build_py_module.py - Compiles all 45 Python assignments & topics into sem1_py_data.py
import json

def get_py_topics():
    return [
        {
            "id": "py-t1",
            "title": "Python Architecture, Execution Model & Dynamic Typing",
            "tag": "Core Python",
            "content": """
              <p>Python is a high-level, dynamically-typed, interpreted language. Source code (<code>.py</code>) is compiled into bytecode (<code>.pyc</code>) which executes on the <strong>CPython Virtual Machine (PVM)</strong>.</p>
              <div class="callout callout-info">
                <div class="callout-title">The Everything-is-an-Object Model</div>
                <p>Every identifier points to a heap-allocated <code>PyObject</code> containing: a reference count, a type pointer (<code>ob_type</code>), and payload data. Variable names are merely references in a namespace dictionary, enabling polymorphic behavior without static type declarations.</p>
              </div>
            """
        },
        {
            "id": "py-t2",
            "title": "Built-in Data Structures & Big-O Complexities",
            "tag": "Data Structures",
            "content": """
              <div class="data-table-wrapper">
                <table class="data-table">
                  <thead><tr><th>Type</th><th>Mutability</th><th>Ordering</th><th>Index / Key Lookup</th><th>Append / Insert</th></tr></thead>
                  <tbody>
                    <tr><td><code>list</code></td><td>Mutable</td><td>Ordered</td><td>\\( O(1) \\) by index</td><td>\\( O(1) \\) amortized append, \\( O(N) \\) insert</td></tr>
                    <tr><td><code>tuple</code></td><td>Immutable</td><td>Ordered</td><td>\\( O(1) \\) by index</td><td>N/A (Fixed size)</td></tr>
                    <tr><td><code>dict</code></td><td>Mutable</td><td>Insertion-order</td><td>\\( O(1) \\) average hash lookup</td><td>\\( O(1) \\) average insertion</td></tr>
                    <tr><td><code>set</code></td><td>Mutable</td><td>Unordered</td><td>\\( O(1) \\) membership test</td><td>\\( O(1) \\) average addition</td></tr>
                  </tbody>
                </table>
              </div>
            """
        },
        {
            "id": "py-t3",
            "title": "Control Flow, Generators & Iterators",
            "tag": "Language Mechanics",
            "content": """
              <p>Python implements the <strong>Iterator Protocol</strong> via <code>__iter__()</code> and <code>__next__()</code>. Generator functions utilize the <code>yield</code> keyword, suspending execution state across iterations to deliver memory-efficient \\( O(1) \\) streaming over infinite sequences.</p>
            """
        },
        {
            "id": "py-t4",
            "title": "Functions, Closures & Decorators",
            "tag": "Functional",
            "content": """
              <p>Functions are first-class citizens: they can be passed as arguments, returned from other functions, and stored in collections. Decorators leverage closures to wrap functions dynamically, commonly used for logging, timing, and access authentication in production systems.</p>
            """
        },
        {
            "id": "py-t5",
            "title": "Object-Oriented Programming & Dunder Protocols",
            "tag": "OOP",
            "content": """
              <p>Python's data model utilizes <strong>magic (dunder) methods</strong> to integrate user classes with built-in syntax:</p>
              <ul>
                <li><code>__repr__</code>, <code>__str__</code>: String representation.</li>
                <li><code>__len__</code>, <code>__getitem__</code>: Sequence and indexing protocols.</li>
                <li><code>__add__</code>, <code>__mul__</code>: Operator overloading.</li>
                <li><code>__enter__</code>, <code>__exit__</code>: Context managers (<code>with</code> blocks).</li>
              </ul>
            """
        },
        {
            "id": "py-t6",
            "title": "Algorithmic Pattern Generation Mechanics",
            "tag": "Algorithms",
            "content": """
              <p>Pattern printing translates 2D coordinate spaces \\( (i, j) \\) into discrete text visualizations using nested loops. Understanding loop invariant transformations (such as \\( 2i - 1 \\) for odd widths, \\( n - i \\) for inverted spaces, and mirrored coordinate mappings) establishes foundational spatial reasoning for matrix and tensor slicing.</p>
            """
        },
        {
            "id": "py-t7",
            "title": "Computational Number Theory & Arithmetic Algorithms",
            "tag": "Number Theory",
            "content": """
              <p>Core mathematical algorithms implemented in practical ML pre-processing: Euclidean GCD algorithm in \\( O(\\log(\\min(a, b))) \\), Prime factorization tests up to \\( O(\\sqrt{n}) \\), Armstrong/Narcissistic number digit-power aggregations, and Pascal triangle combinatorics (\\( \\binom{n}{k} \\)).</p>
            """
        },
        {
            "id": "py-t8",
            "title": "Vectorization & Scientific Python Foundations",
            "tag": "AIML Stack",
            "content": """
              <p>Transition from naive Python loops to vectorized NumPy operations. SIMD (Single Instruction, Multiple Data) processor extensions execute operations across contiguous C-memory blocks at hardware speeds, avoiding dynamic typing overhead.</p>
            """
        }
    ]

def get_py_cheatsheet():
    return [
        {
            "title": "Python Core & Slicing Reference Sheet",
            "content": """
              <div class="data-table-wrapper">
                <table class="data-table">
                  <thead><tr><th>Operation</th><th>Syntax</th><th>Time Complexity</th></tr></thead>
                  <tbody>
                    <tr><td>List Slice</td><td><code>arr[start:stop:step]</code></td><td>\\( O(k) \\) where k is slice length</td></tr>
                    <tr><td>List In-place Reverse</td><td><code>arr.reverse()</code></td><td>\\( O(n) \\)</td></tr>
                    <tr><td>String Inversion</td><td><code>s[::-1]</code></td><td>\\( O(n) \\)</td></tr>
                    <tr><td>Dictionary Comprehension</td><td><code>{k: v for k, v in pairs}</code></td><td>\\( O(n) \\)</td></tr>
                    <tr><td>Unpacking</td><td><code>first, *middle, last = seq</code></td><td>\\( O(n) \\)</td></tr>
                    <tr><td>Euclidean GCD</td><td><code>math.gcd(a, b)</code></td><td>\\( O(\\log(\\min(a, b))) \\)</td></tr>
                  </tbody>
                </table>
              </div>
            """
        }
    ]

# 45 Solved Python Programs
def get_py_assignments():
    items = []

    # Q1
    items.append({
        "id": "py-p1",
        "title": "Py1: Add Two Numbers",
        "difficulty": "Foundational",
        "category": "Basic Syntax & I/O",
        "question": "Write a python program to add two numbers with user input validation.",
        "solution": """<div class="solution-content">
<div class="code-header"><span>Python Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="py_q1">Copy</button></div>
<pre><code id="py_q1"># Program to add two numbers
def add_two_numbers():
    try:
        num1 = float(input("Enter first number: "))
        num2 = float(input("Enter second number: "))
        result = num1 + num2
        print(f"The sum of {num1} and {num2} is: {result}")
    except ValueError:
        print("Invalid input! Please enter numeric values.")

if __name__ == "__main__":
    add_two_numbers()</code></pre>
</div>"""
    })

    # Q2
    items.append({
        "id": "py-p2",
        "title": "Py2: Quotient and Remainder",
        "difficulty": "Foundational",
        "category": "Basic Syntax & I/O",
        "question": "Write a python program to find quotient and remainder using floor division (//) and modulo (%).",
        "solution": """<div class="solution-content">
<div class="code-header"><span>Python Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="py_q2">Copy</button></div>
<pre><code id="py_q2">def find_quotient_remainder():
    try:
        dividend = int(input("Enter dividend: "))
        divisor = int(input("Enter divisor: "))
        if divisor == 0:
            print("Error: Division by zero is undefined.")
            return
        quotient = dividend // divisor
        remainder = dividend % divisor
        print(f"Dividend: {dividend} | Divisor: {divisor}")
        print(f"Quotient: {quotient} | Remainder: {remainder}")
    except ValueError:
        print("Please enter valid integers.")

if __name__ == "__main__":
    find_quotient_remainder()</code></pre>
</div>"""
    })

    # Q3
    items.append({
        "id": "py-p3",
        "title": "Py3: Object Types & System Inspection",
        "difficulty": "Foundational",
        "category": "System & Types",
        "question": "Write a python program to find the type of objects in your system.",
        "solution": """<div class="solution-content">
<div class="code-header"><span>Python Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="py_q3">Copy</button></div>
<pre><code id="py_q3">def inspect_object_types():
    samples = [
        42,
        3.14159,
        "MSc AIML",
        [1, 2, 3],
        (10, 20),
        {"a": 1, "b": 2},
        {1, 2, 3},
        True,
        None,
        lambda x: x * 2
    ]
    print(f"{'Object Representation':<25} | {'Type Name':<20} | {'Memory ID'}")
    print("-" * 65)
    for obj in samples:
        print(f"{str(obj):<25} | {type(obj).__name__:<20} | {id(obj)}")

if __name__ == "__main__":
    inspect_object_types()</code></pre>
</div>"""
    })

    # Q4
    items.append({
        "id": "py-p4",
        "title": "Py4: Greatest of Two Numbers",
        "difficulty": "Foundational",
        "category": "Conditionals",
        "question": "Write a python program to read two numbers and display the greatest number.",
        "solution": """<div class="solution-content">
<div class="code-header"><span>Python Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="py_q4">Copy</button></div>
<pre><code id="py_q4">def find_greatest():
    a = float(input("Enter first number: "))
    b = float(input("Enter second number: "))
    if a > b:
        print(f"{a} is greater than {b}")
    elif b > a:
        print(f"{b} is greater than {a}")
    else:
        print(f"Both numbers are equal: {a} == {b}")

if __name__ == "__main__":
    find_greatest()</code></pre>
</div>"""
    })

    # Q5
    items.append({
        "id": "py-p5",
        "title": "Py5: Check Even or Odd",
        "difficulty": "Foundational",
        "category": "Conditionals",
        "question": "Write a python program to check whether a number is even or odd.",
        "solution": """<div class="solution-content">
<div class="code-header"><span>Python Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="py_q5">Copy</button></div>
<pre><code id="py_q5">def check_even_odd():
    n = int(input("Enter an integer: "))
    if n % 2 == 0:
        print(f"{n} is an EVEN number.")
    else:
        print(f"{n} is an ODD number.")

if __name__ == "__main__":
    check_even_odd()</code></pre>
</div>"""
    })

    # Q6
    items.append({
        "id": "py-p6",
        "title": "Py6: Vowel or Consonant Checker",
        "difficulty": "Foundational",
        "category": "Conditionals",
        "question": "Write a python program to check whether a character is vowel or consonant.",
        "solution": """<div class="solution-content">
<div class="code-header"><span>Python Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="py_q6">Copy</button></div>
<pre><code id="py_q6">def check_vowel_consonant():
    ch = input("Enter a single alphabet character: ").strip().lower()
    if len(ch) != 1 or not ch.isalpha():
        print("Please enter exactly one alphabetic character.")
        return
    if ch in 'aeiou':
        print(f"'{ch}' is a VOWEL.")
    else:
        print(f"'{ch}' is a CONSONANT.")

if __name__ == "__main__":
    check_vowel_consonant()</code></pre>
</div>"""
    })

    # Q7
    items.append({
        "id": "py-p7",
        "title": "Py7: Largest Among Three Numbers",
        "difficulty": "Foundational",
        "category": "Conditionals",
        "question": "Write a python program to find the largest number among three numbers.",
        "solution": """<div class="solution-content">
<div class="code-header"><span>Python Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="py_q7">Copy</button></div>
<pre><code id="py_q7">def find_largest_of_three():
    a = float(input("Enter first number: "))
    b = float(input("Enter second number: "))
    c = float(input("Enter third number: "))
    if a >= b and a >= c:
        largest = a
    elif b >= a and b >= c:
        largest = b
    else:
        largest = c
    print(f"The largest number among ({a}, {b}, {c}) is: {largest}")

if __name__ == "__main__":
    find_largest_of_three()</code></pre>
</div>"""
    })

    # Q8
    items.append({
        "id": "py-p8",
        "title": "Py8: All Roots of a Quadratic Equation",
        "difficulty": "Intermediate",
        "category": "Math & Algebra",
        "question": "Write a python program to find all roots of a quadratic equation (real, equal, and complex).",
        "solution": """<div class="solution-content">
<div class="code-header"><span>Python Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="py_q8">Copy</button></div>
<pre><code id="py_q8">import cmath

def solve_quadratic():
    a = float(input("Enter coefficient a (a != 0): "))
    b = float(input("Enter coefficient b: "))
    c = float(input("Enter coefficient c: "))
    if a == 0:
        print("Coefficient 'a' cannot be zero in a quadratic equation.")
        return
    discriminant = b**2 - 4*a*c
    if discriminant > 0:
        root1 = (-b + discriminant**0.5) / (2*a)
        root2 = (-b - discriminant**0.5) / (2*a)
        print(f"Two Real & Distinct Roots: {root1:.4f} and {root2:.4f}")
    elif discriminant == 0:
        root = -b / (2*a)
        print(f"Two Real & Equal Roots: {root:.4f}")
    else:
        r1 = (-b + cmath.sqrt(discriminant)) / (2*a)
        r2 = (-b - cmath.sqrt(discriminant)) / (2*a)
        print(f"Complex Roots: {r1} and {r2}")

if __name__ == "__main__":
    solve_quadratic()</code></pre>
</div>"""
    })

    # Q9
    items.append({
        "id": "py-p9",
        "title": "Py9: Sum of First N Natural Numbers",
        "difficulty": "Foundational",
        "category": "Loops & Iterations",
        "question": "Write a python program to calculate sum of natural numbers.",
        "solution": """<div class="solution-content">
<div class="code-header"><span>Python Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="py_q9">Copy</button></div>
<pre><code id="py_q9">def sum_natural_numbers():
    n = int(input("Enter positive integer n: "))
    if n <= 0:
        print("Please enter a positive integer.")
        return
    # Formula O(1): n*(n+1)//2
    total = n * (n + 1) // 2
    print(f"Sum of first {n} natural numbers is: {total}")

if __name__ == "__main__":
    sum_natural_numbers()</code></pre>
</div>"""
    })

    # Q10
    items.append({
        "id": "py-p10",
        "title": "Py10: Leap Year Verification",
        "difficulty": "Foundational",
        "category": "Conditionals",
        "question": "Write a python program to check leap year using Gregorian calendar logic.",
        "solution": """<div class="solution-content">
<div class="code-header"><span>Python Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="py_q10">Copy</button></div>
<pre><code id="py_q10">def is_leap_year(year):
    return (year % 400 == 0) or (year % 4 == 0 and year % 100 != 0)

if __name__ == "__main__":
    y = int(input("Enter year (e.g. 2024): "))
    if is_leap_year(y):
        print(f"{y} is a LEAP YEAR (366 days).")
    else:
        print(f"{y} is NOT a leap year (365 days).")</code></pre>
</div>"""
    })

    # Q11
    items.append({
        "id": "py-p11",
        "title": "Py11: Factorial Calculation (Iterative & Recursive)",
        "difficulty": "Foundational",
        "category": "Loops & Recursion",
        "question": "Write a python program to find the factorial of a number.",
        "solution": """<div class="solution-content">
<div class="code-header"><span>Python Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="py_q11">Copy</button></div>
<pre><code id="py_q11">def factorial(n):
    if n < 0:
        return None
    fact = 1
    for i in range(1, n + 1):
        fact *= i
    return fact

if __name__ == "__main__":
    num = int(input("Enter non-negative integer: "))
    res = factorial(num)
    if res is not None:
        print(f"{num}! = {res}")
    else:
        print("Factorial is not defined for negative numbers.")</code></pre>
</div>"""
    })

    # Q12
    items.append({
        "id": "py-p12",
        "title": "Py12: Multiplication Table Generator",
        "difficulty": "Foundational",
        "category": "Loops & Iterations",
        "question": "Write a python program to generate multiplication table.",
        "solution": """<div class="solution-content">
<div class="code-header"><span>Python Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="py_q12">Copy</button></div>
<pre><code id="py_q12">def multiplication_table():
    num = int(input("Enter table base number: "))
    limit = int(input("Enter table limit (e.g. 10): "))
    print(f"--- Multiplication Table for {num} ---")
    for i in range(1, limit + 1):
        print(f"{num:2d} x {i:2d} = {num * i:4d}")

if __name__ == "__main__":
    multiplication_table()</code></pre>
</div>"""
    })

    # Q13
    items.append({
        "id": "py-p13",
        "title": "Py13: Fibonacci Series (0, 1, 1, 2, 3, 5, 8, ...)",
        "difficulty": "Foundational",
        "category": "Loops & Iterations",
        "question": "Write a python program to display Fibonacci series up to n terms.",
        "solution": """<div class="solution-content">
<div class="code-header"><span>Python Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="py_q13">Copy</button></div>
<pre><code id="py_q13">def fibonacci_series(n):
    if n <= 0:
        return []
    series = [0]
    if n > 1:
        series.append(1)
    for _ in range(2, n):
        series.append(series[-1] + series[-2])
    return series

if __name__ == "__main__":
    terms = int(input("Enter number of terms: "))
    result = fibonacci_series(terms)
    print("Fibonacci Series:", ", ".join(map(str, result)))</code></pre>
</div>"""
    })

    # Q14
    items.append({
        "id": "py-p14",
        "title": "Py14: Greatest Common Divisor (GCD / HCF)",
        "difficulty": "Foundational",
        "category": "Number Theory",
        "question": "Write a python program to find GCD using the Euclidean algorithm.",
        "solution": """<div class="solution-content">
<div class="code-header"><span>Python Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="py_q14">Copy</button></div>
<pre><code id="py_q14">def gcd_euclidean(a, b):
    while b != 0:
        a, b = b, a % b
    return abs(a)

if __name__ == "__main__":
    x = int(input("Enter first integer: "))
    y = int(input("Enter second integer: "))
    print(f"GCD({x}, {y}) = {gcd_euclidean(x, y)}")</code></pre>
</div>"""
    })

    # Q15
    items.append({
        "id": "py-p15",
        "title": "Py15: Least Common Multiple (LCM)",
        "difficulty": "Foundational",
        "category": "Number Theory",
        "question": "Write a python program to find LCM using the relationship LCM(a, b) = |a * b| / GCD(a, b).",
        "solution": """<div class="solution-content">
<div class="code-header"><span>Python Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="py_q15">Copy</button></div>
<pre><code id="py_q15">def gcd(a, b):
    while b:
        a, b = b, a % b
    return abs(a)

def lcm(a, b):
    if a == 0 or b == 0:
        return 0
    return abs(a * b) // gcd(a, b)

if __name__ == "__main__":
    x = int(input("Enter first integer: "))
    y = int(input("Enter second integer: "))
    print(f"LCM({x}, {y}) = {lcm(x, y)}")</code></pre>
</div>"""
    })

    # Q16
    items.append({
        "id": "py-p16",
        "title": "Py16: Reverse an Integer",
        "difficulty": "Foundational",
        "category": "Loops & Math",
        "question": "Write a python program to reverse a number mathematically.",
        "solution": """<div class="solution-content">
<div class="code-header"><span>Python Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="py_q16">Copy</button></div>
<pre><code id="py_q16">def reverse_number(n):
    sign = -1 if n < 0 else 1
    n = abs(n)
    rev = 0
    while n > 0:
        digit = n % 10
        rev = rev * 10 + digit
        n //= 10
    return sign * rev

if __name__ == "__main__":
    num = int(input("Enter an integer to reverse: "))
    print(f"Reversed number: {reverse_number(num)}")</code></pre>
</div>"""
    })

    # Q17
    items.append({
        "id": "py-p17",
        "title": "Py17: Calculate Power of a Number",
        "difficulty": "Foundational",
        "category": "Math & Algebra",
        "question": "Write a python program to calculate the power of a number (both base ** exp and binary exponentiation).",
        "solution": """<div class="solution-content">
<div class="code-header"><span>Python Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="py_q17">Copy</button></div>
<pre><code id="py_q17">def fast_power(base, exp):
    # Binary exponentiation O(log exp)
    if exp < 0:
        return 1.0 / fast_power(base, -exp)
    res = 1.0
    curr = float(base)
    while exp > 0:
        if exp % 2 == 1:
            res *= curr
        curr *= curr
        exp //= 2
    return res

if __name__ == "__main__":
    b = float(input("Enter base: "))
    e = int(input("Enter exponent: "))
    print(f"{b}^{e} = {fast_power(b, e)}")</code></pre>
</div>"""
    })

    # Q18
    items.append({
        "id": "py-p18",
        "title": "Py18: Binary Value of a Character",
        "difficulty": "Foundational",
        "category": "Bitwise & Strings",
        "question": "Write a python program to find the binary value of a character.",
        "solution": """<div class="solution-content">
<div class="code-header"><span>Python Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="py_q18">Copy</button></div>
<pre><code id="py_q18">def char_to_binary():
    ch = input("Enter a single character: ")
    if len(ch) != 1:
        print("Please enter exactly one character.")
        return
    ascii_val = ord(ch)
    bin_str = bin(ascii_val)[2:].zfill(8)
    print(f"Character: '{ch}' | ASCII Code: {ascii_val} | 8-Bit Binary: {bin_str}")

if __name__ == "__main__":
    char_to_binary()</code></pre>
</div>"""
    })

    # Q19
    items.append({
        "id": "py-p19",
        "title": "Py19: Display Two Strings Continuously on Single Line",
        "difficulty": "Foundational",
        "category": "Basic Syntax & I/O",
        "question": "Write a python program to display two separate strings in single line continuously using print end parameter.",
        "solution": """<div class="solution-content">
<div class="code-header"><span>Python Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="py_q19">Copy</button></div>
<pre><code id="py_q19">def continuous_print():
    str1 = input("Enter first string: ")
    str2 = input("Enter second string: ")
    # Suppressing newline with end='' parameter
    print(str1, end=" ")
    print(str2)

if __name__ == "__main__":
    continuous_print()</code></pre>
</div>"""
    })

    # Q20
    items.append({
        "id": "py-p20",
        "title": "Py20: Number Palindrome Checker",
        "difficulty": "Foundational",
        "category": "Loops & Math",
        "question": "Write a python program to check whether a number is palindrome or not.",
        "solution": """<div class="solution-content">
<div class="code-header"><span>Python Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="py_q20">Copy</button></div>
<pre><code id="py_q20">def is_palindrome(n):
    if n < 0:
        return False
    original = n
    rev = 0
    while n > 0:
        rev = rev * 10 + (n % 10)
        n //= 10
    return rev == original

if __name__ == "__main__":
    num = int(input("Enter number: "))
    if is_palindrome(num):
        print(f"{num} is a PALINDROME.")
    else:
        print(f"{num} is NOT a palindrome.")</code></pre>
</div>"""
    })

    # Q21
    items.append({
        "id": "py-p21",
        "title": "Py21: Prime Number Checker",
        "difficulty": "Foundational",
        "category": "Number Theory",
        "question": "Write a python program to check whether a number is prime or not using O(sqrt(N)) primality test.",
        "solution": """<div class="solution-content">
<div class="code-header"><span>Python Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="py_q21">Copy</button></div>
<pre><code id="py_q21">def is_prime(n):
    if n <= 1:
        return False
    if n <= 3:
        return True
    if n % 2 == 0 or n % 3 == 0:
        return False
    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return False
        i += 6
    return True

if __name__ == "__main__":
    val = int(input("Enter integer: "))
    if is_prime(val):
        print(f"{val} is a PRIME number.")
    else:
        print(f"{val} is COMPOSITE / NOT prime.")</code></pre>
</div>"""
    })

    # Q22
    items.append({
        "id": "py-p22",
        "title": "Py22: Prime Numbers Between Two Intervals",
        "difficulty": "Foundational",
        "category": "Number Theory",
        "question": "Write a python program to display all prime numbers between two intervals [low, high].",
        "solution": """<div class="solution-content">
<div class="code-header"><span>Python Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="py_q22">Copy</button></div>
<pre><code id="py_q22">def primes_in_interval(low, high):
    primes = []
    for num in range(max(2, low), high + 1):
        for i in range(2, int(num**0.5) + 1):
            if num % i == 0:
                break
        else:
            primes.append(num)
    return primes

if __name__ == "__main__":
    l = int(input("Enter lower bound: "))
    h = int(input("Enter upper bound: "))
    res = primes_in_interval(l, h)
    print(f"Primes in [{l}, {h}] ({len(res)} found):")
    print(res)</code></pre>
</div>"""
    })

    # Q23
    items.append({
        "id": "py-p23",
        "title": "Py23: Check Armstrong (Narcissistic) Number",
        "difficulty": "Foundational",
        "category": "Number Theory",
        "question": "Write a python program to check armstrong number. (e.g., 1^3 + 5^3 + 3^3 = 153).",
        "solution": """<div class="solution-content">
<div class="code-header"><span>Python Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="py_q23">Copy</button></div>
<pre><code id="py_q23">def is_armstrong(n):
    s = str(abs(n))
    power = len(s)
    sum_digits = sum(int(digit)**power for digit in s)
    return sum_digits == abs(n)

if __name__ == "__main__":
    val = int(input("Enter number: "))
    if is_armstrong(val):
        print(f"{val} is an ARMSTRONG number.")
    else:
        print(f"{val} is NOT an Armstrong number.")</code></pre>
</div>"""
    })

    # Q24
    items.append({
        "id": "py-p24",
        "title": "Py24: Armstrong Numbers in an Interval",
        "difficulty": "Foundational",
        "category": "Number Theory",
        "question": "Write a python program to display armstrong numbers between two intervals.",
        "solution": """<div class="solution-content">
<div class="code-header"><span>Python Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="py_q24">Copy</button></div>
<pre><code id="py_q24">def armstrong_in_range(low, high):
    results = []
    for num in range(low, high + 1):
        s = str(num)
        p = len(s)
        if sum(int(d)**p for d in s) == num:
            results.append(num)
    return results

if __name__ == "__main__":
    l = int(input("Enter start: "))
    h = int(input("Enter end: "))
    print(f"Armstrong numbers in [{l}, {h}]:", armstrong_in_range(l, h))</code></pre>
</div>"""
    })

    # Q25
    items.append({
        "id": "py-p25",
        "title": "Py25: Factors of a Number",
        "difficulty": "Foundational",
        "category": "Number Theory",
        "question": "Write a python program to display all factors of a number.",
        "solution": """<div class="solution-content">
<div class="code-header"><span>Python Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="py_q25">Copy</button></div>
<pre><code id="py_q25">def get_factors(n):
    factors = []
    for i in range(1, int(n**0.5) + 1):
        if n % i == 0:
            factors.append(i)
            if i*i != n:
                factors.append(n // i)
    factors.sort()
    return factors

if __name__ == "__main__":
    val = int(input("Enter positive integer: "))
    print(f"Factors of {val}:", get_factors(val))</code></pre>
</div>"""
    })

    # Q26
    items.append({
        "id": "py-p26",
        "title": "Py26: Simple Interest Calculation",
        "difficulty": "Foundational",
        "category": "Math & Finance",
        "question": "Write a python program to calculate simple interest of the principal read by user.",
        "solution": """<div class="solution-content">
<div class="code-header"><span>Python Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="py_q26">Copy</button></div>
<pre><code id="py_q26">def simple_interest():
    p = float(input("Enter Principal amount (P): "))
    r = float(input("Enter Annual Interest Rate in % (R): "))
    t = float(input("Enter Time period in years (T): "))
    si = (p * r * t) / 100.0
    total = p + si
    print(f"Simple Interest: {si:.2f} | Total Maturity Amount: {total:.2f}")

if __name__ == "__main__":
    simple_interest()</code></pre>
</div>"""
    })

    # Q27
    items.append({
        "id": "py-p27",
        "title": "Py27: Basic Star Pyramid and Triangle Patterns",
        "difficulty": "Intermediate",
        "category": "Patterns",
        "question": "Write a python program to create basic pyramid and pattern.",
        "solution": """<div class="solution-content">
<div class="code-header"><span>Python Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="py_q27">Copy</button></div>
<pre><code id="py_q27">def pyramid_and_pattern(n=5):
    print("--- Left Triangle ---")
    for i in range(1, n + 1):
        print("* " * i)

    print("\\n--- Centered Pyramid ---")
    for i in range(1, n + 1):
        print(" " * (n - i) + "* " * i)

if __name__ == "__main__":
    pyramid_and_pattern()</code></pre>
</div>"""
    })

    # Q28
    items.append({
        "id": "py-p28",
        "title": "Py28: Simple Arithmetic Calculator",
        "difficulty": "Foundational",
        "category": "Conditionals",
        "question": "Write a python program to make a simple calculator to add, subtract, multiply or divide.",
        "solution": """<div class="solution-content">
<div class="code-header"><span>Python Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="py_q28">Copy</button></div>
<pre><code id="py_q28">def calculator():
    num1 = float(input("Enter first number: "))
    op = input("Enter operator (+, -, *, /): ").strip()
    num2 = float(input("Enter second number: "))

    if op == '+': res = num1 + num2
    elif op == '-': res = num1 - num2
    elif op == '*': res = num1 * num2
    elif op == '/':
        if num2 == 0:
            print("Division by zero error!")
            return
        res = num1 / num2
    else:
        print("Invalid operator!")
        return
    print(f"{num1} {op} {num2} = {res}")

if __name__ == "__main__":
    calculator()</code></pre>
</div>"""
    })

    # Q29
    items.append({
        "id": "py-p29",
        "title": "Py29: Simple Number Triangle Pattern",
        "difficulty": "Intermediate",
        "category": "Patterns",
        "question": "Write a python program to display Simple Number Triangle Pattern (1, 1 2, 1 2 3...).",
        "solution": """<div class="solution-content">
<div class="code-header"><span>Python Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="py_q29">Copy</button></div>
<pre><code id="py_q29">def number_triangle(n=5):
    for i in range(1, n + 1):
        for j in range(1, i + 1):
            print(j, end=" ")
        print()

if __name__ == "__main__":
    number_triangle()</code></pre>
</div>"""
    })

    # Q30
    items.append({
        "id": "py-p30",
        "title": "Py30: Inverted Pyramid of Numbers",
        "difficulty": "Intermediate",
        "category": "Patterns",
        "question": "Write a python program to display inverted pyramid of numbers.",
        "solution": """<div class="solution-content">
<div class="code-header"><span>Python Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="py_q30">Copy</button></div>
<pre><code id="py_q30">def inverted_pyramid_numbers(n=5):
    for i in range(n, 0, -1):
        print(" " * (n - i), end="")
        for j in range(1, i + 1):
            print(j, end=" ")
        print()

if __name__ == "__main__":
    inverted_pyramid_numbers()</code></pre>
</div>"""
    })

    # Q31
    items.append({
        "id": "py-p31",
        "title": "Py31: Inverted Pyramid of Descending Numbers",
        "difficulty": "Intermediate",
        "category": "Patterns",
        "question": "Write a python program to display inverted pyramid of descending numbers.",
        "solution": """<div class="solution-content">
<div class="code-header"><span>Python Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="py_q31">Copy</button></div>
<pre><code id="py_q31">def inverted_descending_pyramid(n=5):
    for i in range(n, 0, -1):
        for j in range(i, 0, -1):
            print(j, end=" ")
        print()

if __name__ == "__main__":
    inverted_descending_pyramid()</code></pre>
</div>"""
    })

    # Q32
    items.append({
        "id": "py-p32",
        "title": "Py32: Inverted Pyramid of the Same Digit",
        "difficulty": "Intermediate",
        "category": "Patterns",
        "question": "Write a python program to display inverted pyramid of the same digit (5 5 5 5 5, 4 4 4 4...).",
        "solution": """<div class="solution-content">
<div class="code-header"><span>Python Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="py_q32">Copy</button></div>
<pre><code id="py_q32">def inverted_same_digit_pyramid(n=5):
    for i in range(n, 0, -1):
        print((str(i) + " ") * i)

if __name__ == "__main__":
    inverted_same_digit_pyramid()</code></pre>
</div>"""
    })

    # Q33
    items.append({
        "id": "py-p33",
        "title": "Py33: Reverse Pyramid of Numbers",
        "difficulty": "Intermediate",
        "category": "Patterns",
        "question": "Write a python program to display reverse pyramid of numbers.",
        "solution": """<div class="solution-content">
<div class="code-header"><span>Python Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="py_q33">Copy</button></div>
<pre><code id="py_q33">def reverse_pyramid_numbers(n=5):
    for i in range(1, n + 1):
        print(" " * (n - i), end="")
        for j in range(i, 0, -1):
            print(j, end=" ")
        print()

if __name__ == "__main__":
    reverse_pyramid_numbers()</code></pre>
</div>"""
    })

    # Q34
    items.append({
        "id": "py-p34",
        "title": "Py34: Inverted Half Pyramid Number Pattern",
        "difficulty": "Intermediate",
        "category": "Patterns",
        "question": "Write a python program to display inverted half pyramid number pattern.",
        "solution": """<div class="solution-content">
<div class="code-header"><span>Python Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="py_q34">Copy</button></div>
<pre><code id="py_q34">def inverted_half_pyramid(n=5):
    for i in range(n, 0, -1):
        for j in range(1, i + 1):
            print(j, end=" ")
        print()

if __name__ == "__main__":
    inverted_half_pyramid()</code></pre>
</div>"""
    })

    # Q35
    items.append({
        "id": "py-p35",
        "title": "Py35: Pyramid of Natural Numbers Less Than 10",
        "difficulty": "Intermediate",
        "category": "Patterns",
        "question": "Write a python program to display pyramid of natural numbers less than 10 (Floyd's triangle style).",
        "solution": """<div class="solution-content">
<div class="code-header"><span>Python Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="py_q35">Copy</button></div>
<pre><code id="py_q35">def natural_numbers_pyramid():
    curr = 1
    for row in range(1, 5):
        for _ in range(row):
            if curr < 10:
                print(curr, end=" ")
                curr += 1
        print()

if __name__ == "__main__":
    natural_numbers_pyramid()</code></pre>
</div>"""
    })

    # Q36
    items.append({
        "id": "py-p36",
        "title": "Py36: Reverse Pattern of Digits from 10",
        "difficulty": "Intermediate",
        "category": "Patterns",
        "question": "Write a python program to display reverse pattern of digits from 10.",
        "solution": """<div class="solution-content">
<div class="code-header"><span>Python Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="py_q36">Copy</button></div>
<pre><code id="py_q36">def reverse_digits_from_10():
    curr = 10
    for row in range(1, 5):
        for _ in range(row):
            if curr > 0:
                print(f"{curr:2d}", end=" ")
                curr -= 1
        print()

if __name__ == "__main__":
    reverse_digits_from_10()</code></pre>
</div>"""
    })

    # Q37
    items.append({
        "id": "py-p37",
        "title": "Py37: Connected Inverted Pyramid Pattern of Numbers",
        "difficulty": "Intermediate",
        "category": "Patterns",
        "question": "Write a python program to display connected inverted pyramid pattern of numbers.",
        "solution": """<div class="solution-content">
<div class="code-header"><span>Python Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="py_q37">Copy</button></div>
<pre><code id="py_q37">def connected_inverted_pyramid(n=4):
    for i in range(n, 0, -1):
        for j in range(1, i + 1):
            print(j, end=" ")
        spaces = 2 * (n - i)
        print("  " * spaces, end="")
        for j in range(i, 0, -1):
            print(j, end=" ")
        print()

if __name__ == "__main__":
    connected_inverted_pyramid()</code></pre>
</div>"""
    })

    # Q38
    items.append({
        "id": "py-p38",
        "title": "Py38: Even Number Pyramid Pattern",
        "difficulty": "Intermediate",
        "category": "Patterns",
        "question": "Write a python program to display even number pyramid pattern (2, 4 6, 8 10 12...).",
        "solution": """<div class="solution-content">
<div class="code-header"><span>Python Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="py_q38">Copy</button></div>
<pre><code id="py_q38">def even_number_pyramid(rows=4):
    val = 2
    for i in range(1, rows + 1):
        print(" " * (rows - i) * 2, end="")
        for _ in range(i):
            print(f"{val:2d}", end="  ")
            val += 2
        print()

if __name__ == "__main__":
    even_number_pyramid()</code></pre>
</div>"""
    })

    # Q39
    items.append({
        "id": "py-p39",
        "title": "Py39: Pyramid of Horizontal Tables",
        "difficulty": "Intermediate",
        "category": "Patterns",
        "question": "Write a python program to display pyramid of horizontal tables (multiples of row numbers).",
        "solution": """<div class="solution-content">
<div class="code-header"><span>Python Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="py_q39">Copy</button></div>
<pre><code id="py_q39">def horizontal_tables_pyramid(rows=5):
    for i in range(1, rows + 1):
        for j in range(1, i + 1):
            print(f"{i * j:3d}", end=" ")
        print()

if __name__ == "__main__":
    horizontal_tables_pyramid()</code></pre>
</div>"""
    })

    # Q40
    items.append({
        "id": "py-p40",
        "title": "Py40: Pyramid Pattern of Alternate Numbers",
        "difficulty": "Intermediate",
        "category": "Patterns",
        "question": "Write a python program to display pyramid pattern of alternate numbers (odd/even alternating).",
        "solution": """<div class="solution-content">
<div class="code-header"><span>Python Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="py_q40">Copy</button></div>
<pre><code id="py_q40">def alternate_number_pyramid(n=5):
    val = 1
    for i in range(1, n + 1):
        for _ in range(i):
            print(val, end=" ")
        print()
        val += 2 # Alternate odd numbers

if __name__ == "__main__":
    alternate_number_pyramid()</code></pre>
</div>"""
    })

    # Q41
    items.append({
        "id": "py-p41",
        "title": "Py41: Mirrored Pyramid (Right-Angled Triangle) of Numbers",
        "difficulty": "Intermediate",
        "category": "Patterns",
        "question": "Write a python program to display mirrored pyramid (right-angled triangle) pattern of numbers.",
        "solution": """<div class="solution-content">
<div class="code-header"><span>Python Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="py_q41">Copy</button></div>
<pre><code id="py_q41">def mirrored_pyramid(n=5):
    for i in range(1, n + 1):
        print("  " * (n - i), end="")
        for j in range(1, i + 1):
            print(j, end=" ")
        print()

if __name__ == "__main__":
    mirrored_pyramid()</code></pre>
</div>"""
    })

    # Q42
    items.append({
        "id": "py-p42",
        "title": "Py42: Equilateral Triangle with Stars",
        "difficulty": "Intermediate",
        "category": "Patterns",
        "question": "Write a python program to display equilateral triangle with stars (asterisk symbol).",
        "solution": """<div class="solution-content">
<div class="code-header"><span>Python Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="py_q42">Copy</button></div>
<pre><code id="py_q42">def equilateral_star_triangle(n=5):
    for i in range(1, n + 1):
        print(" " * (n - i) + "* " * i)

if __name__ == "__main__":
    equilateral_star_triangle()</code></pre>
</div>"""
    })

    # Q43
    items.append({
        "id": "py-p43",
        "title": "Py43: Pyramid Pattern of Stars (2*i - 1 Width)",
        "difficulty": "Intermediate",
        "category": "Patterns",
        "question": "Write a python program to display pyramid pattern of stars with odd character span.",
        "solution": """<div class="solution-content">
<div class="code-header"><span>Python Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="py_q43">Copy</button></div>
<pre><code id="py_q43">def odd_star_pyramid(n=5):
    for i in range(1, n + 1):
        print(" " * (n - i) + "*" * (2 * i - 1))

if __name__ == "__main__":
    odd_star_pyramid()</code></pre>
</div>"""
    })

    # Q44
    items.append({
        "id": "py-p44",
        "title": "Py44: Hourglass Pattern Program",
        "difficulty": "Advanced",
        "category": "Patterns",
        "question": "Write a python program to display hourglass pattern program using stars.",
        "solution": """<div class="solution-content">
<div class="code-header"><span>Python Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="py_q44">Copy</button></div>
<pre><code id="py_q44">def hourglass_pattern(n=5):
    # Upper inverted pyramid
    for i in range(n, 0, -1):
        print(" " * (n - i) + "* " * i)
    # Lower upright pyramid
    for i in range(2, n + 1):
        print(" " * (n - i) + "* " * i)

if __name__ == "__main__":
    hourglass_pattern()</code></pre>
</div>"""
    })

    # Q45
    items.append({
        "id": "py-p45",
        "title": "Py45: Pascal's Triangle Program",
        "difficulty": "Advanced",
        "category": "Combinatorics & Patterns",
        "question": "Write a python program to display Pascal's triangle program using binomial coefficients.",
        "solution": """<div class="solution-content">
<div class="code-header"><span>Python Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="py_q45">Copy</button></div>
<pre><code id="py_q45">def generate_pascals_triangle(num_rows=6):
    triangle = []
    for i in range(num_rows):
        row = [1] * (i + 1)
        for j in range(1, i):
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j]
        triangle.append(row)
        
    # Pretty print centered
    for i, row in enumerate(triangle):
        print(" " * (num_rows - i) * 2, end="")
        for val in row:
            print(f"{val:4d}", end="")
        print()

if __name__ == "__main__":
    generate_pascals_triangle()</code></pre>
</div>"""
    })

    return items

def build_py_data():
    assignments = get_py_assignments()
    return {
        "id": "python",
        "code": "AIML-104",
        "name": "Python Programming",
        "subtitle": "Language Fundamentals, Pattern Algorithms & Scientific Structures",
        "stats": { "topics": 8, "assignments": len(assignments), "demos": 2 },
        "overview": "Comprehensive curriculum covering the CPython execution model, built-in dynamic data structures, control flow, functions, OOP protocols, pattern printing algorithms, number theory, and scientific computing foundations.",
        "topics": get_py_topics(),
        "assignments": assignments,
        "cheatsheet": get_py_cheatsheet()
    }

if __name__ == "__main__":
    py_data = build_py_data()
    print(f"Total Python assignments compiled: {len(py_data['assignments'])}")
    with open("sem1_py_data.py", "w", encoding="utf-8") as f:
        f.write("# -*- coding: utf-8 -*-\n")
        f.write("# sem1_py_data.py - Complete Python Programming dataset\n\n")
        f.write("def get_py_data():\n")
        f.write("    return " + repr(py_data) + "\n")
    print("sem1_py_data.py successfully written.")

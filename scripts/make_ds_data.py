# -*- coding: utf-8 -*-
# make_ds_data.py - Generator for sem1_ds_data.py
import json

def get_c_assignment():
    return [
        {
            "id": "c-pr1",
            "title": "C1: Maximum of Three Numbers",
            "difficulty": "Foundational",
            "category": "C Language Basics",
            "question": "Write a C program to determine the maximum of 3 numbers using conditional constructs.",
            "solution": """<div class="solution-content">
<p><strong>Logic & Approach:</strong> Read three integers from standard input. Use nested <code>if-else</code> or ternary expressions to evaluate the maximum with \(O(1)\) operations.</p>
<div class="code-header"><span>C Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="c_max3">Copy</button></div>
<pre><code id="c_max3">#include &lt;stdio.h&gt;

int main() {
    int a, b, c, max;
    printf("Enter three integers: ");
    if (scanf("%d %d %d", &a, &b, &c) != 3) {
        printf("Invalid input. Please enter three valid integers.\\n");
        return 1;
    }
    
    if (a >= b && a >= c) {
        max = a;
    } else if (b >= a && b >= c) {
        max = b;
    } else {
        max = c;
    }
    
    printf("Maximum number among (%d, %d, %d) is: %d\\n", a, b, c, max);
    return 0;
}</code></pre>
<p><strong>Sample Input / Output:</strong></p>
<pre><code>Enter three integers: 45 92 18
Maximum number among (45, 92, 18) is: 92</code></pre>
</div>"""
        },
        {
            "id": "c-pr2",
            "title": "C2: Convert Days to Years, Months, and Remaining Days",
            "difficulty": "Foundational",
            "category": "C Language Basics",
            "question": "Write a program to accept number of days and print year, month and remaining days.",
            "solution": """<div class="solution-content">
<p><strong>Logic:</strong> Standard conversion using integer division and modulo: 1 year = 365 days, 1 month = 30 days.</p>
<div class="code-header"><span>C Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="c_days">Copy</button></div>
<pre><code id="c_days">#include &lt;stdio.h&gt;

int main() {
    int total_days;
    printf("Enter total number of days: ");
    if (scanf("%d", &total_days) != 1 || total_days < 0) {
        printf("Invalid input. Total days must be non-negative.\\n");
        return 1;
    }
    
    int years = total_days / 365;
    int rem_after_years = total_days % 365;
    int months = rem_after_years / 30;
    int days = rem_after_years % 30;
    
    printf("%d Days = %d Year(s), %d Month(s), and %d Day(s)\\n", 
           total_days, years, months, days);
    return 0;
}</code></pre>
<p><strong>Sample Input / Output:</strong></p>
<pre><code>Enter total number of days: 800
800 Days = 2 Year(s), 2 Month(s), and 10 Day(s)</code></pre>
</div>"""
        },
        {
            "id": "c-pr3",
            "title": "C3: Swap Values of Two Variables",
            "difficulty": "Foundational",
            "category": "C Language Basics",
            "question": "Write a program to swap the values of two variables (demonstrating both temporary variable and bitwise XOR arithmetic approaches).",
            "solution": """<div class="solution-content">
<p><strong>Approaches:</strong> (1) Auxiliary variable, (2) Arithmetic addition/subtraction, (3) Bitwise XOR without overflow risk.</p>
<div class="code-header"><span>C Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="c_swap">Copy</button></div>
<pre><code id="c_swap">#include &lt;stdio.h&gt;

int main() {
    int x, y, temp;
    printf("Enter two numbers (x and y): ");
    scanf("%d %d", &x, &y);
    printf("Original: x = %d, y = %d\\n", x, y);

    // Method 1: Using temporary variable
    temp = x;
    x = y;
    y = temp;
    printf("After swap (using temp): x = %d, y = %d\\n", x, y);

    // Method 2: In-place using bitwise XOR
    x = x ^ y;
    y = x ^ y;
    x = x ^ y;
    printf("Swapped back (using XOR): x = %d, y = %d\\n", x, y);

    return 0;
}</code></pre>
</div>"""
        },
        {
            "id": "c-pr4",
            "title": "C4: Student Grading and Class Determination",
            "difficulty": "Foundational",
            "category": "Conditional Logic",
            "question": "Write a program that reads the percentage obtained by the students and determines and prints the class obtained by the student as per the following rules: 0-39: Fail, 40-59: Second class, 60-79: First class, 80-100: Distinction.",
            "solution": """<div class="solution-content">
<div class="code-header"><span>C Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="c_grade">Copy</button></div>
<pre><code id="c_grade">#include &lt;stdio.h&gt;

int main() {
    float percentage;
    printf("Enter student percentage (0 - 100): ");
    if (scanf("%f", &percentage) != 1 || percentage < 0.0 || percentage > 100.0) {
        printf("Validation Error: Percentage must lie between 0.0 and 100.0\\n");
        return 1;
    }

    printf("Percentage: %.2f%% -> Result: ", percentage);
    if (percentage >= 80.0) {
        printf("Distinction\\n");
    } else if (percentage >= 60.0) {
        printf("First Class\\n");
    } else if (percentage >= 40.0) {
        printf("Second Class\\n");
    } else {
        printf("Fail\\n");
    }
    return 0;
}</code></pre>
</div>"""
        },
        {
            "id": "c-pr5",
            "title": "C5: Area of Shapes using Symbolic Constants and Switch",
            "difficulty": "Foundational",
            "category": "C Language Basics",
            "question": "Write a program to calculate the area of circle/rectangle/triangle. 'C' indicates circle, 'R' indicates rectangle, 'T' indicates triangle. Use symbolic constant to define the value of PI.",
            "solution": """<div class="solution-content">
<p>Uses <code>#define PI 3.141592653589793</code> and <code>switch(toupper(choice))</code>.</p>
<div class="code-header"><span>C Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="c_area">Copy</button></div>
<pre><code id="c_area">#include &lt;stdio.h&gt;
#include &lt;ctype.h&gt;

#define PI 3.141592653589793

int main() {
    char choice;
    printf("Select Shape [C: Circle, R: Rectangle, T: Triangle]: ");
    scanf(" %c", &choice);
    choice = toupper(choice);

    switch(choice) {
        case 'C': {
            double r;
            printf("Enter radius of circle: ");
            scanf("%lf", &r);
            if (r < 0) { printf("Error: Radius cannot be negative.\\n"); return 1; }
            printf("Area of Circle = %.4lf\\n", PI * r * r);
            break;
        }
        case 'R': {
            double l, b;
            printf("Enter length and breadth: ");
            scanf("%lf %lf", &l, &b);
            if (l < 0 || b < 0) { printf("Error: Dimensions must be non-negative.\\n"); return 1; }
            printf("Area of Rectangle = %.4lf\\n", l * b);
            break;
        }
        case 'T': {
            double b, h;
            printf("Enter base and height: ");
            scanf("%lf %lf", &b, &h);
            if (b < 0 || h < 0) { printf("Error: Dimensions must be non-negative.\\n"); return 1; }
            printf("Area of Triangle = %.4lf\\n", 0.5 * b * h);
            break;
        }
        default:
            printf("Invalid selection! Use C, R, or T.\\n");
            return 1;
    }
    return 0;
}</code></pre>
</div>"""
        },
        {
            "id": "c-pr6",
            "title": "C6: Total Salary Calculation (Basic, HRA, DA)",
            "difficulty": "Foundational",
            "category": "C Language Basics",
            "question": "Write a program that accepts basic, HRA, and DA from the user and calculates total salary.",
            "solution": """<div class="solution-content">
<div class="code-header"><span>C Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="c_salary">Copy</button></div>
<pre><code id="c_salary">#include &lt;stdio.h&gt;

int main() {
    double basic, hra, da, total_salary;
    printf("Enter Basic Salary: ");
    if (scanf("%lf", &basic) != 1 || basic < 0) {
        printf("Error: Basic salary must be non-negative.\\n");
        return 1;
    }
    printf("Enter HRA and DA: ");
    scanf("%lf %lf", &hra, &da);

    total_salary = basic + hra + da;
    printf("--- Salary Breakdown ---\\n");
    printf("Basic: %.2lf | HRA: %.2lf | DA: %.2lf\\n", basic, hra, da);
    printf("Total Gross Salary = %.2lf\\n", total_salary);
    return 0;
}</code></pre>
</div>"""
        },
        {
            "id": "c-pr7",
            "title": "C7: Print 1 to 10 Using While, Do-While, and For Loops",
            "difficulty": "Foundational",
            "category": "Loops & Iterations",
            "question": "Using While, do..while and for loop print 1 2 3 4 5 ... 10.",
            "solution": """<div class="solution-content">
<div class="code-header"><span>C Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="c_loops1">Copy</button></div>
<pre><code id="c_loops1">#include &lt;stdio.h&gt;

int main() {
    int i;

    // 1. For loop
    printf("Using FOR loop:     ");
    for (i = 1; i <= 10; i++) {
        printf("%d ", i);
    }
    printf("\\n");

    // 2. While loop
    printf("Using WHILE loop:   ");
    i = 1;
    while (i <= 10) {
        printf("%d ", i);
        i++;
    }
    printf("\\n");

    // 3. Do-While loop
    printf("Using DO-WHILE loop:");
    i = 1;
    do {
        printf("%d ", i);
        i++;
    } while (i <= 10);
    printf("\\n");

    return 0;
}</code></pre>
</div>"""
        },
        {
            "id": "c-pr8",
            "title": "C8: Even Series 2, 4, 6, 8, ... n",
            "difficulty": "Foundational",
            "category": "Loops & Iterations",
            "question": "Print series 2, 4, 6, 8, ... n using While, do..while and for loop.",
            "solution": """<div class="solution-content">
<div class="code-header"><span>C Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="c_even_series">Copy</button></div>
<pre><code id="c_even_series">#include &lt;stdio.h&gt;

int main() {
    int n, i;
    printf("Enter upper bound n: ");
    if (scanf("%d", &n) != 1 || n < 2) {
        printf("Please enter an integer >= 2.\\n");
        return 1;
    }

    printf("For loop:      ");
    for (i = 2; i <= n; i += 2) printf("%d ", i);
    printf("\\n");

    printf("While loop:    ");
    i = 2;
    while (i <= n) { printf("%d ", i); i += 2; }
    printf("\\n");

    printf("Do-While loop: ");
    i = 2;
    do { printf("%d ", i); i += 2; } while (i <= n);
    printf("\\n");

    return 0;
}</code></pre>
</div>"""
        },
        {
            "id": "c-pr9",
            "title": "C9: Power Series 2, 4, 16, ... n*n",
            "difficulty": "Foundational",
            "category": "Loops & Iterations",
            "question": "Print series 2, 4, 16, ... n*n (Using While, do..while and for loop).",
            "solution": """<div class="solution-content">
<div class="code-header"><span>C Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="c_sq_series">Copy</button></div>
<pre><code id="c_sq_series">#include &lt;stdio.h&gt;

int main() {
    long long limit;
    printf("Enter limit value: ");
    if (scanf("%lld", &limit) != 1 || limit < 2) {
        printf("Limit must be >= 2.\\n");
        return 1;
    }

    printf("For loop:      ");
    for (long long val = 2; val <= limit; val = val * val) {
        printf("%lld ", val);
    }
    printf("\\n");

    printf("While loop:    ");
    long long w = 2;
    while (w <= limit) {
        printf("%lld ", w);
        w = w * w;
    }
    printf("\\n");

    printf("Do-While loop: ");
    long long d = 2;
    do {
        printf("%lld ", d);
        d = d * d;
    } while (d <= limit);
    printf("\\n");

    return 0;
}</code></pre>
</div>"""
        },
        {
            "id": "c-pr10",
            "title": "C10: Average of a Set of n Given Numbers",
            "difficulty": "Foundational",
            "category": "Loops & Iterations",
            "question": "Write a program to calculate the average of a set of n given numbers.",
            "solution": """<div class="solution-content">
<div class="code-header"><span>C Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="c_avg">Copy</button></div>
<pre><code id="c_avg">#include &lt;stdio.h&gt;

int main() {
    int n;
    double sum = 0.0, num;
    printf("Enter count of numbers (n): ");
    if (scanf("%d", &n) != 1 || n <= 0) {
        printf("Error: n must be a positive integer.\\n");
        return 1;
    }

    printf("Enter %d numbers:\\n", n);
    for (int i = 0; i < n; i++) {
        scanf("%lf", &num);
        sum += num;
    }

    printf("Sum = %.4lf, Average = %.4lf\\n", sum, sum / n);
    return 0;
}</code></pre>
</div>"""
        },
        {
            "id": "c-pr11",
            "title": "C11: Fibonacci Series Generation",
            "difficulty": "Foundational",
            "category": "Loops & Iterations",
            "question": "Write a program to generate Fibonacci series up to n terms.",
            "solution": """<div class="solution-content">
<div class="code-header"><span>C Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="c_fibo">Copy</button></div>
<pre><code id="c_fibo">#include &lt;stdio.h&gt;

int main() {
    int n;
    printf("Enter number of terms: ");
    if (scanf("%d", &n) != 1 || n <= 0) {
        printf("Enter positive number of terms.\\n");
        return 1;
    }

    long long first = 0, second = 1, next;
    printf("Fibonacci Series (%d terms):\\n", n);
    for (int i = 1; i <= n; i++) {
        if (i == 1) {
            printf("%lld ", first);
        } else if (i == 2) {
            printf("%lld ", second);
        } else {
            next = first + second;
            first = second;
            second = next;
            printf("%lld ", next);
        }
    }
    printf("\\n");
    return 0;
}</code></pre>
</div>"""
        },
        {
            "id": "c-pr12",
            "title": "C12: Multiplication Table",
            "difficulty": "Foundational",
            "category": "Loops & Iterations",
            "question": "Write a program to print the multiplication table of a given number.",
            "solution": """<div class="solution-content">
<div class="code-header"><span>C Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="c_table">Copy</button></div>
<pre><code id="c_table">#include &lt;stdio.h&gt;

int main() {
    int num, range;
    printf("Enter integer for multiplication table: ");
    scanf("%d", &num);
    printf("Enter range (e.g. 10): ");
    scanf("%d", &range);

    printf("Multiplication Table for %d:\\n", num);
    for (int i = 1; i <= range; i++) {
        printf("%d x %2d = %d\\n", num, i, num * i);
    }
    return 0;
}</code></pre>
</div>"""
        },
        {
            "id": "c-pr13",
            "title": "C13: Factorial of an Entered Number",
            "difficulty": "Foundational",
            "category": "Loops & Iterations",
            "question": "Write a program to find the factorial of the entered number with input validation.",
            "solution": """<div class="solution-content">
<div class="code-header"><span>C Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="c_fact">Copy</button></div>
<pre><code id="c_fact">#include &lt;stdio.h&gt;

unsigned long long factorial(int n) {
    if (n == 0 || n == 1) return 1ULL;
    return n * factorial(n - 1);
}

int main() {
    int n;
    printf("Enter non-negative integer (0-20): ");
    if (scanf("%d", &n) != 1 || n < 0 || n > 20) {
        printf("Error: Input must be between 0 and 20 (to avoid 64-bit integer overflow).\\n");
        return 1;
    }

    printf("%d! = %llu\\n", n, factorial(n));
    return 0;
}</code></pre>
</div>"""
        },
        {
            "id": "c-pr14",
            "title": "C14: Integers Divisible by 7 Between 100 and 200",
            "difficulty": "Foundational",
            "category": "Loops & Iterations",
            "question": "Write a program to print all the numbers and sum of all the integers that are greater than 100 and less than 200 and are divisible by 7.",
            "solution": """<div class="solution-content">
<div class="code-header"><span>C Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="c_div7">Copy</button></div>
<pre><code id="c_div7">#include &lt;stdio.h&gt;

int main() {
    int sum = 0, count = 0;
    printf("Integers between 100 and 200 divisible by 7:\\n");
    for (int i = 101; i < 200; i++) {
        if (i % 7 == 0) {
            printf("%d ", i);
            sum += i;
            count++;
        }
    }
    printf("\\nTotal Count: %d | Sum: %d\\n", count, sum);
    return 0;
}</code></pre>
</div>"""
        },
        {
            "id": "c-pr15",
            "title": "C15: Basic Calculator Using Switch-Case",
            "difficulty": "Foundational",
            "category": "Conditional Logic",
            "question": "Write a program to accept two numbers and perform basic operations of calculator (+, -, *, /) using switch-case.",
            "solution": """<div class="solution-content">
<div class="code-header"><span>C Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="c_calc">Copy</button></div>
<pre><code id="c_calc">#include &lt;stdio.h&gt;

int main() {
    double n1, n2, result;
    char op;
    printf("Enter expression (e.g. 15.5 + 4.2): ");
    if (scanf("%lf %c %lf", &n1, &op, &n2) != 3) {
        printf("Invalid format! Use: number operator number\\n");
        return 1;
    }

    switch(op) {
        case '+': result = n1 + n2; break;
        case '-': result = n1 - n2; break;
        case '*': result = n1 * n2; break;
        case '/':
            if (n2 == 0.0) {
                printf("Error: Division by zero is undefined!\\n");
                return 1;
            }
            result = n1 / n2;
            break;
        default:
            printf("Unsupported operator '%c'!\\n", op);
            return 1;
    }
    printf("%.4lf %c %.4lf = %.4lf\\n", n1, op, n2, result);
    return 0;
}</code></pre>
</div>"""
        },
        {
            "id": "c-pr16",
            "title": "C16: Star Patterns (Square, Triangle, Inverted, Hollow Square, Right-Aligned)",
            "difficulty": "Intermediate",
            "category": "Pattern Generation",
            "question": "Generate the 5 assignment patterns: (1) 5x5 Solid Square, (2) Left-aligned Triangle, (3) Inverted Left-aligned Triangle, (4) Hollow 5x5 Square, (5) Inverted Right-aligned Triangle.",
            "solution": """<div class="solution-content">
<div class="code-header"><span>C Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="c_patterns">Copy</button></div>
<pre><code id="c_patterns">#include &lt;stdio.h&gt;

void pattern1(int n) { // Solid Square
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) printf("* ");
        printf("\\n");
    }
}

void pattern2(int n) { // Left-aligned Triangle
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) printf("* ");
        printf("\\n");
    }
}

void pattern3(int n) { // Inverted Left Triangle
    for (int i = n; i >= 1; i--) {
        for (int j = 1; j <= i; j++) printf("* ");
        printf("\\n");
    }
}

void pattern4(int n) { // Hollow Square
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n; j++) {
            if (i == 1 || i == n || j == 1 || j == n) printf("* ");
            else printf("  ");
        }
        printf("\\n");
    }
}

void pattern5(int n) { // Inverted Right-aligned
    for (int i = 0; i < n; i++) {
        for (int s = 0; s < i; s++) printf("   ");
        for (int j = 0; j < n - i; j++) printf("*  ");
        printf("\\n");
    }
}

int main() {
    int n = 5;
    printf("Pattern 1:\\n"); pattern1(n);
    printf("\\nPattern 2:\\n"); pattern2(n);
    printf("\\nPattern 3:\\n"); pattern3(n);
    printf("\\nPattern 4:\\n"); pattern4(n);
    printf("\\nPattern 5:\\n"); pattern5(n);
    return 0;
}</code></pre>
</div>"""
        },
        {
            "id": "c-pr17",
            "title": "C17: Maximum Element in 1-D Array",
            "difficulty": "Foundational",
            "category": "Arrays & Pointers",
            "question": "Write a program to find maximum element from 1-Dimensional array.",
            "solution": """<div class="solution-content">
<div class="code-header"><span>C Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="c_arr_max">Copy</button></div>
<pre><code id="c_arr_max">#include &lt;stdio.h&gt;

int main() {
    int n;
    printf("Enter number of elements: ");
    if (scanf("%d", &n) != 1 || n <= 0) return 1;

    int arr[n];
    printf("Enter %d integers:\\n", n);
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);

    int max_val = arr[0];
    int max_idx = 0;
    for (int i = 1; i < n; i++) {
        if (arr[i] > max_val) {
            max_val = arr[i];
            max_idx = i;
        }
    }
    printf("Maximum value is %d at index %d (position %d)\\n", max_val, max_idx, max_idx + 1);
    return 0;
}</code></pre>
</div>"""
        },
        {
            "id": "c-pr18",
            "title": "C18: Sort Array in Ascending Order",
            "difficulty": "Foundational",
            "category": "Arrays & Pointers",
            "question": "Write a program to sort given array in ascending order.",
            "solution": """<div class="solution-content">
<div class="code-header"><span>C Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="c_arr_sort">Copy</button></div>
<pre><code id="c_arr_sort">#include &lt;stdio.h&gt;

void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int swapped = 0;
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = 1;
            }
        }
        if (!swapped) break;
    }
}

int main() {
    int n;
    printf("Enter size of array: ");
    scanf("%d", &n);
    int arr[n];
    printf("Enter elements: ");
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);

    bubbleSort(arr, n);
    printf("Sorted Array in Ascending Order:\\n");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
    return 0;
}</code></pre>
</div>"""
        },
        {
            "id": "c-pr19",
            "title": "C19: Merge Two Sorted 1-D Arrays",
            "difficulty": "Intermediate",
            "category": "Arrays & Pointers",
            "question": "Given two 1-D arrays A and B, which are sorted in ascending order. Write a program to merge them into a single sorted array C that contains every item from arrays A and B in ascending order (Linear O(N+M) two-pointer merge).",
            "solution": """<div class="solution-content">
<div class="code-header"><span>C Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="c_merge">Copy</button></div>
<pre><code id="c_merge">#include &lt;stdio.h&gt;

void mergeArrays(int A[], int n, int B[], int m, int C[]) {
    int i = 0, j = 0, k = 0;
    while (i < n && j < m) {
        if (A[i] <= B[j]) {
            C[k++] = A[i++];
        } else {
            C[k++] = B[j++];
        }
    }
    while (i < n) C[k++] = A[i++];
    while (j < m) C[k++] = B[j++];
}

int main() {
    int n, m;
    printf("Enter size of array A: ");
    scanf("%d", &n);
    int A[n];
    printf("Enter %d sorted elements for A: ", n);
    for (int i = 0; i < n; i++) scanf("%d", &A[i]);

    printf("Enter size of array B: ");
    scanf("%d", &m);
    int B[m];
    printf("Enter %d sorted elements for B: ", m);
    for (int j = 0; j < m; j++) scanf("%d", &B[j]);

    int C[n + m];
    mergeArrays(A, n, B, m, C);

    printf("Merged Sorted Array C (Size %d):\\n", n + m);
    for (int k = 0; k < n + m; k++) printf("%d ", C[k]);
    printf("\\n");
    return 0;
}</code></pre>
</div>"""
        },
        {
            "id": "c-pr20",
            "title": "C20: Matrix Addition",
            "difficulty": "Foundational",
            "category": "Multidimensional Arrays",
            "question": "Write a program to add two matrices of order r x c.",
            "solution": """<div class="solution-content">
<div class="code-header"><span>C Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="c_mat_add">Copy</button></div>
<pre><code id="c_mat_add">#include &lt;stdio.h&gt;

int main() {
    int r, c;
    printf("Enter matrix rows and columns: ");
    scanf("%d %d", &r, &c);

    int A[r][c], B[r][c], Sum[r][c];
    printf("Enter elements of Matrix A:\\n");
    for (int i = 0; i < r; i++)
        for (int j = 0; j < c; j++)
            scanf("%d", &A[i][j]);

    printf("Enter elements of Matrix B:\\n");
    for (int i = 0; i < r; i++)
        for (int j = 0; j < c; j++)
            scanf("%d", &B[i][j]);

    for (int i = 0; i < r; i++)
        for (int j = 0; j < c; j++)
            Sum[i][j] = A[i][j] + B[i][j];

    printf("Resultant Matrix A + B:\\n");
    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++)
            printf("%4d ", Sum[i][j]);
        printf("\\n");
    }
    return 0;
}</code></pre>
</div>"""
        },
        {
            "id": "c-pr21",
            "title": "C21: Matrix Multiplication",
            "difficulty": "Intermediate",
            "category": "Multidimensional Arrays",
            "question": "Write a 'C' program that reads in two matrices and multiplies them. Display the resultant matrix with dimension verification (r1 x c1) * (r2 x c2).",
            "solution": """<div class="solution-content">
<div class="code-header"><span>C Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="c_mat_mul">Copy</button></div>
<pre><code id="c_mat_mul">#include &lt;stdio.h&gt;

int main() {
    int r1, c1, r2, c2;
    printf("Enter rows & cols of Matrix A: ");
    scanf("%d %d", &r1, &c1);
    printf("Enter rows & cols of Matrix B: ");
    scanf("%d %d", &r2, &c2);

    if (c1 != r2) {
        printf("Error: Matrix multiplication impossible! Col of A (%d) != Row of B (%d).\\n", c1, r2);
        return 1;
    }

    int A[r1][c1], B[r2][c2], C[r1][c2];

    printf("Enter Matrix A (%dx%d):\\n", r1, c1);
    for (int i = 0; i < r1; i++)
        for (int j = 0; j < c1; j++)
            scanf("%d", &A[i][j]);

    printf("Enter Matrix B (%dx%d):\\n", r2, c2);
    for (int i = 0; i < r2; i++)
        for (int j = 0; j < c2; j++)
            scanf("%d", &B[i][j]);

    // Multiply
    for (int i = 0; i < r1; i++) {
        for (int j = 0; j < c2; j++) {
            C[i][j] = 0;
            for (int k = 0; k < c1; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    printf("Resultant Matrix C (%dx%d):\\n", r1, c2);
    for (int i = 0; i < r1; i++) {
        for (int j = 0; j < c2; j++)
            printf("%6d ", C[i][j]);
        printf("\\n");
    }
    return 0;
}</code></pre>
</div>"""
        },
        {
            "id": "c-pr22",
            "title": "C22: Find Element at Given Position in 2-D Array",
            "difficulty": "Foundational",
            "category": "Multidimensional Arrays",
            "question": "Write a program to find element at given position from 2-Dimensional array.",
            "solution": """<div class="solution-content">
<div class="code-header"><span>C Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="c_2d_pos">Copy</button></div>
<pre><code id="c_2d_pos">#include &lt;stdio.h&gt;

int main() {
    int r, c;
    printf("Enter rows and columns: ");
    scanf("%d %d", &r, &c);
    int mat[r][c];

    printf("Enter elements of matrix (%dx%d):\\n", r, c);
    for (int i = 0; i < r; i++)
        for (int j = 0; j < c; j++)
            scanf("%d", &mat[i][j]);

    int target_r, target_c;
    printf("Enter target position (1-based row and col): ");
    scanf("%d %d", &target_r, &target_c);

    if (target_r < 1 || target_r > r || target_c < 1 || target_c > c) {
        printf("Index Out of Bounds! Range is [1..%d, 1..%d]\\n", r, c);
        return 1;
    }

    printf("Element at row %d, col %d is: %d\\n", target_r, target_c, mat[target_r - 1][target_c - 1]);
    return 0;
}</code></pre>
</div>"""
        },
        {
            "id": "c-pr23",
            "title": "C23: String Length Without strlen()",
            "difficulty": "Foundational",
            "category": "Strings & Pointers",
            "question": "Write a program to find string length without using built-in string functions.",
            "solution": """<div class="solution-content">
<div class="code-header"><span>C Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="c_strlen">Copy</button></div>
<pre><code id="c_strlen">#include &lt;stdio.h&gt;

int custom_strlen(const char *str) {
    int len = 0;
    while (*(str + len) != '\\0') {
        len++;
    }
    return len;
}

int main() {
    char str[1000];
    printf("Enter string: ");
    if (fgets(str, sizeof(str), stdin) != NULL) {
        // Strip trailing newline
        int len = custom_strlen(str);
        if (len > 0 && str[len - 1] == '\\n') {
            str[len - 1] = '\\0';
            len--;
        }
        printf("String: \\"%s\\" | Length: %d characters\\n", str, len);
    }
    return 0;
}</code></pre>
</div>"""
        },
        {
            "id": "c-pr24",
            "title": "C24: Count Word Occurrences in a String",
            "difficulty": "Intermediate",
            "category": "Strings & Pointers",
            "question": "Write a program that will input a string and count all occurrences of a particular word.",
            "solution": """<div class="solution-content">
<div class="code-header"><span>C Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="c_word_count">Copy</button></div>
<pre><code id="c_word_count">#include &lt;stdio.h&gt;
#include &lt;string.h&gt;
#include &lt;ctype.h&gt;

int countWordOccurrences(const char *text, const char *word) {
    int count = 0;
    int wordLen = strlen(word);
    const char *ptr = text;

    while ((ptr = strstr(ptr, word)) != NULL) {
        // Verify whole word boundaries
        int left_boundary = (ptr == text || !isalnum(*(ptr - 1)));
        int right_boundary = (!isalnum(*(ptr + wordLen)));

        if (left_boundary && right_boundary) {
            count++;
        }
        ptr += wordLen;
    }
    return count;
}

int main() {
    char text[1000], word[100];
    printf("Enter text: ");
    fgets(text, sizeof(text), stdin);
    printf("Enter word to search: ");
    scanf("%s", word);

    int count = countWordOccurrences(text, word);
    printf("Word \\"%s\\" occurs %d time(s) as an independent token.\\n", word, count);
    return 0;
}</code></pre>
</div>"""
        },
        {
            "id": "c-pr25",
            "title": "C25: Sort String in Alphabetical Order",
            "difficulty": "Intermediate",
            "category": "Strings & Pointers",
            "question": "Write a program that will read a string and rewrite it in alphabetical order.",
            "solution": """<div class="solution-content">
<div class="code-header"><span>C Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="c_sort_str">Copy</button></div>
<pre><code id="c_sort_str">#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

void sortStringAlphabetical(char *str) {
    int n = strlen(str);
    for (int i = 0; i < n - 1; i++) {
        for (int j = i + 1; j < n; j++) {
            if (str[i] > str[j]) {
                char temp = str[i];
                str[i] = str[j];
                str[j] = temp;
            }
        }
    }
}

int main() {
    char str[200];
    printf("Enter a word or string: ");
    scanf("%199s", str);

    sortStringAlphabetical(str);
    printf("Alphabetically Ordered String: %s\\n", str);
    return 0;
}</code></pre>
</div>"""
        },
        {
            "id": "c-pr26",
            "title": "C26: Reverse String In-Place",
            "difficulty": "Foundational",
            "category": "Strings & Pointers",
            "question": "Write a program to reverse a string in-place without using library reverse functions.",
            "solution": """<div class="solution-content">
<div class="code-header"><span>C Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="c_rev_str">Copy</button></div>
<pre><code id="c_rev_str">#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

void reverseString(char *str) {
    int left = 0;
    int right = strlen(str) - 1;
    while (left < right) {
        char temp = str[left];
        str[left] = str[right];
        str[right] = temp;
        left++;
        right--;
    }
}

int main() {
    char str[500];
    printf("Enter string to reverse: ");
    if (fgets(str, sizeof(str), stdin)) {
        int len = strlen(str);
        if (len > 0 && str[len - 1] == '\\n') str[len - 1] = '\\0';
        reverseString(str);
        printf("Reversed: \\"%s\\"\\n", str);
    }
    return 0;
}</code></pre>
</div>"""
        }
    ]

print("C assignment generator defined.")

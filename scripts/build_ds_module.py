# -*- coding: utf-8 -*-
# build_ds_module.py - Assembles sem1_ds_data.py with all 49 completed questions & topics
import os
import json

from make_ds_data import get_c_assignment

# --- DS Practical 1 (12 Qs) ---
def get_ds1_assignment():
    return [
        {
            "id": "ds1-q1",
            "title": "DS1-1: Student Ranking System with Tie-Breaking",
            "difficulty": "Intermediate",
            "category": "Classes & Objects",
            "question": "Write a C++ program to create class Student with student's rollno, name and marks of three subjects (OOCP, AI and MF) and display the details of student with total marks of all subjects along with the percentage in proper format. Output should be in descending order of percentage. If students have the same percentage, higher marks in MF should be displayed first.",
            "solution": """<div class="solution-content">
<p><strong>Design:</strong> Encapsulates student credentials and utilizes custom comparator sorting with strict secondary tie-breaker on Mathematical Foundations (MF) score.</p>
<div class="code-header"><span>C++ Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="cpp_stu1">Copy</button></div>
<pre><code id="cpp_stu1">#include &lt;iostream&gt;
#include &lt;string&gt;
#include &lt;algorithm&gt;
#include &lt;iomanip&gt;
using namespace std;

class Student {
public:
    int rollNo;
    string name;
    float oocp, ai, mf;
    float total, percentage;

    void input() {
        cout << "Enter Roll No: ";
        cin >> rollNo;
        cin.ignore();
        cout << "Enter Name: ";
        getline(cin, name);
        do {
            cout << "Enter Marks for OOCP, AI, MF (0-100 each): ";
            cin >> oocp >> ai >> mf;
        } while (oocp < 0 || oocp > 100 || ai < 0 || ai > 100 || mf < 0 || mf > 100);
        calculate();
    }

    void calculate() {
        total = oocp + ai + mf;
        percentage = (total / 300.0f) * 100.0f;
    }

    void display() const {
        cout << left << setw(8) << rollNo 
             << setw(20) << name 
             << setw(8) << oocp 
             << setw(8) << ai 
             << setw(8) << mf 
             << setw(10) << total 
             << fixed << setprecision(2) << setw(10) << percentage << "%\\n";
    }
};

bool compareStudents(const Student& a, const Student& b) {
    if (abs(a.percentage - b.percentage) > 0.001f) {
        return a.percentage > b.percentage; // Descending percentage
    }
    return a.mf > b.mf; // Secondary tie-breaker: higher MF marks first
}

int main() {
    int n;
    cout << "Enter number of students: ";
    cin >> n;
    Student students[n];

    for (int i = 0; i < n; i++) {
        cout << "\\n--- Entering Student " << (i + 1) << " ---\\n";
        students[i].input();
    }

    sort(students, students + n, compareStudents);

    cout << "\\n========================= MERIT RANK LIST =========================\\n";
    cout << left << setw(8) << "Roll" << setw(20) << "Name" 
         << setw(8) << "OOCP" << setw(8) << "AI" << setw(8) << "MF" 
         << setw(10) << "Total" << setw(10) << "Percentage" << "\\n";
    cout << "-------------------------------------------------------------------\\n";
    for (int i = 0; i < n; i++) {
        students[i].display();
    }
    return 0;
}</code></pre>
</div>"""
        },
        {
            "id": "ds1-q2",
            "title": "DS1-2: Class Num (Total & Average)",
            "difficulty": "Foundational",
            "category": "Classes & Objects",
            "question": "Write a program to create class Num (int n1, int n2, int n3, int n4). Display total and average of n1, n2, n3 and n4.",
            "solution": """<div class="solution-content">
<div class="code-header"><span>C++ Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="cpp_num">Copy</button></div>
<pre><code id="cpp_num">#include &lt;iostream&gt;
using namespace std;

class Num {
private:
    int n1, n2, n3, n4;
public:
    Num(int a, int b, int c, int d) : n1(a), n2(b), n3(c), n4(d) {}
    
    int getTotal() const { return n1 + n2 + n3 + n4; }
    double getAverage() const { return getTotal() / 4.0; }
    
    void display() const {
        cout << "Numbers: [" << n1 << ", " << n2 << ", " << n3 << ", " << n4 << "]\\n";
        cout << "Sum: " << getTotal() << " | Average: " << getAverage() << "\\n";
    }
};

int main() {
    int a, b, c, d;
    cout << "Enter 4 integers: ";
    cin >> a >> b >> c >> d;
    Num obj(a, b, c, d);
    obj.display();
    return 0;
}</code></pre>
</div>"""
        },
        {
            "id": "ds1-q3",
            "title": "DS1-3: Class Time with Minute Addition & 24hr Rollover",
            "difficulty": "Foundational",
            "category": "Classes & Objects",
            "question": "Write a program to create class Time (int h, int m). Read a value as minutes from user to display new time after adding the value to minutes in Time.",
            "solution": """<div class="solution-content">
<div class="code-header"><span>C++ Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="cpp_time">Copy</button></div>
<pre><code id="cpp_time">#include &lt;iostream&gt;
#include &lt;iomanip&gt;
using namespace std;

class Time {
private:
    int hours;
    int minutes;
public:
    Time(int h = 0, int m = 0) {
        hours = (h + (m / 60)) % 24;
        minutes = m % 60;
    }

    void addMinutes(int mins) {
        int totalMinutes = hours * 60 + minutes + mins;
        if (totalMinutes < 0) totalMinutes = (totalMinutes % 1440 + 1440) % 1440;
        hours = (totalMinutes / 60) % 24;
        minutes = totalMinutes % 60;
    }

    void display() const {
        cout << setfill('0') << setw(2) << hours << ":" 
             << setfill('0') << setw(2) << minutes << "\\n";
    }
};

int main() {
    int h, m, add_m;
    cout << "Enter initial time (hours 0-23 and minutes 0-59): ";
    cin >> h >> m;
    Time t(h, m);
    cout << "Current Time: "; t.display();

    cout << "Enter minutes to add: ";
    cin >> add_m;
    t.addMinutes(add_m);

    cout << "Updated Time: "; t.display();
    return 0;
}</code></pre>
</div>"""
        },
        {
            "id": "ds1-q4",
            "title": "DS1-4: Class Date with Day Addition & Calendar Leap Handling",
            "difficulty": "Intermediate",
            "category": "Classes & Objects",
            "question": "Write a program to create class Date (int day, int month, int year). Read a value as day from user to display new date after adding the value to day in Date.",
            "solution": """<div class="solution-content">
<div class="code-header"><span>C++ Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="cpp_date">Copy</button></div>
<pre><code id="cpp_date">#include &lt;iostream&gt;
#include &lt;iomanip&gt;
using namespace std;

class Date {
private:
    int day, month, year;

    bool isLeapYear(int y) const {
        return (y % 400 == 0) || (y % 4 == 0 && y % 100 != 0);
    }

    int daysInMonth(int m, int y) const {
        int days[] = { 0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };
        if (m == 2 && isLeapYear(y)) return 29;
        return days[m];
    }

public:
    Date(int d = 1, int m = 1, int y = 2026) : day(d), month(m), year(y) {}

    void addDays(int n) {
        day += n;
        while (day > daysInMonth(month, year)) {
            day -= daysInMonth(month, year);
            month++;
            if (month > 12) {
                month = 1;
                year++;
            }
        }
    }

    void display() const {
        cout << setfill('0') << setw(2) << day << "/" 
             << setfill('0') << setw(2) << month << "/" << year << "\\n";
    }
};

int main() {
    int d, m, y, add;
    cout << "Enter date (day month year): ";
    cin >> d >> m >> y;
    Date dt(d, m, y);
    cout << "Initial Date: "; dt.display();

    cout << "Enter days to add: ";
    cin >> add;
    dt.addDays(add);
    cout << "New Date:     "; dt.display();
    return 0;
}</code></pre>
</div>"""
        },
        {
            "id": "ds1-q5",
            "title": "DS1-5: Class Employee with Static Record Tracker & Salary Breakdown",
            "difficulty": "Foundational",
            "category": "Static Members",
            "question": "Write a program to create class employee with employee's id, name and basic salary. Calculate gross salary for each employee (HRA 20%, DA 30%, OA 10%). Also count total number of employee records that are entered using static member variables.",
            "solution": """<div class="solution-content">
<div class="code-header"><span>C++ Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="cpp_emp">Copy</button></div>
<pre><code id="cpp_emp">#include &lt;iostream&gt;
#include &lt;string&gt;
#include &lt;iomanip&gt;
using namespace std;

class Employee {
private:
    int empId;
    string name;
    double basicSalary;
    double grossSalary;
    static int recordCount;

public:
    Employee() { recordCount++; }

    void input() {
        cout << "Enter Employee ID: "; cin >> empId;
        cin.ignore();
        cout << "Enter Name: "; getline(cin, name);
        do {
            cout << "Enter Basic Salary (>= 0): ";
            cin >> basicSalary;
        } while (basicSalary < 0);
        calculateGross();
    }

    void calculateGross() {
        double hra = 0.20 * basicSalary;
        double da  = 0.30 * basicSalary;
        double oa  = 0.10 * basicSalary;
        grossSalary = basicSalary + hra + da + oa;
    }

    void display() const {
        cout << left << setw(8) << empId << setw(18) << name 
             << fixed << setprecision(2) << setw(12) << basicSalary 
             << setw(12) << grossSalary << "\\n";
    }

    static int getTotalRecords() { return recordCount; }
};

int Employee::recordCount = 0;

int main() {
    int n;
    cout << "Enter count of employees: ";
    cin >> n;
    Employee emp[n];

    for (int i = 0; i < n; i++) {
        cout << "\\n[Employee " << (i + 1) << "]\\n";
        emp[i].input();
    }

    cout << "\\n================== EMPLOYEE PAYROLL ==================\\n";
    cout << left << setw(8) << "ID" << setw(18) << "Name" 
         << setw(12) << "Basic" << setw(12) << "Gross" << "\\n";
    cout << "------------------------------------------------------\\n";
    for (int i = 0; i < n; i++) emp[i].display();
    cout << "------------------------------------------------------\\n";
    cout << "Total Employee Records Processed: " << Employee::getTotalRecords() << "\\n";
    return 0;
}</code></pre>
</div>"""
        },
        {
            "id": "ds1-q6",
            "title": "DS1-6: Class Book with Price-Ascending Sort (10 Books)",
            "difficulty": "Intermediate",
            "category": "Classes & Objects",
            "question": "Write a program to define a class called book. Write a program to read information about 10 books and display books details in ascending order of price in proper format.",
            "solution": """<div class="solution-content">
<div class="code-header"><span>C++ Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="cpp_book">Copy</button></div>
<pre><code id="cpp_book">#include &lt;iostream&gt;
#include &lt;string&gt;
#include &lt;algorithm&gt;
#include &lt;iomanip&gt;
using namespace std;

class Book {
public:
    int bookId;
    string title;
    string author;
    double price;

    void input() {
        cout << "Book ID: "; cin >> bookId;
        cin.ignore();
        cout << "Title: "; getline(cin, title);
        cout << "Author: "; getline(cin, author);
        cout << "Price: "; cin >> price;
    }

    void display() const {
        cout << left << setw(8) << bookId << setw(25) << title 
             << setw(20) << author << "$" << fixed << setprecision(2) << price << "\\n";
    }
};

bool comparePrice(const Book& a, const Book& b) {
    return a.price < b.price; // Ascending price
}

int main() {
    const int N = 10;
    Book books[N];
    cout << "Enter details for " << N << " books:\\n";
    for (int i = 0; i < N; i++) {
        cout << "\\n[Book #" << (i + 1) << "]\\n";
        books[i].input();
    }

    sort(books, books + N, comparePrice);

    cout << "\\n================== BOOKS (SORTED BY PRICE ASCENDING) ==================\\n";
    cout << left << setw(8) << "ID" << setw(25) << "Title" 
         << setw(20) << "Author" << "Price" << "\\n";
    cout << "------------------------------------------------------------------------\\n";
    for (int i = 0; i < N; i++) books[i].display();
    return 0;
}</code></pre>
</div>"""
        },
        {
            "id": "ds1-q7",
            "title": "DS1-7: Class STUDENT with Minimum Passing Marks & Specific Roll Modification",
            "difficulty": "Intermediate",
            "category": "Classes & Objects",
            "question": "Create class STUDENT having rollno, name and age as data members, also take subject with three subjects and initialize their value with minimum passing marks. Using member function, modify marks of student with specific rollno which is given by user.",
            "solution": """<div class="solution-content">
<div class="code-header"><span>C++ Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="cpp_stu_mod">Copy</button></div>
<pre><code id="cpp_stu_mod">#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;

class STUDENT {
private:
    int rollno;
    string name;
    int age;
    float marks[3]; // 3 subjects initialized to passing 40

public:
    STUDENT(int r = 0, string n = "", int a = 18) {
        rollno = r;
        name = n;
        age = a;
        marks[0] = 40.0f; // Minimum passing mark
        marks[1] = 40.0f;
        marks[2] = 40.0f;
    }

    int getRollNo() const { return rollno; }

    void updateMarks(float m1, float m2, float m3) {
        marks[0] = m1;
        marks[1] = m2;
        marks[2] = m3;
        cout << "Marks updated successfully for Roll No: " << rollno << "\\n";
    }

    void display() const {
        cout << "Roll: " << rollno << " | Name: " << name << " | Age: " << age
             << " | Marks: [" << marks[0] << ", " << marks[1] << ", " << marks[2] << "]\\n";
    }
};

int main() {
    STUDENT cohort[3] = {
        STUDENT(101, "Alice", 21),
        STUDENT(102, "Bob", 22),
        STUDENT(103, "Charlie", 21)
    };

    cout << "Default Initialized Cohort (Default min marks = 40):\\n";
    for (int i = 0; i < 3; i++) cohort[i].display();

    int targetRoll;
    cout << "\\nEnter Roll Number to modify marks: ";
    cin >> targetRoll;

    bool found = false;
    for (int i = 0; i < 3; i++) {
        if (cohort[i].getRollNo() == targetRoll) {
            float m1, m2, m3;
            cout << "Enter new marks for 3 subjects: ";
            cin >> m1 >> m2 >> m3;
            cohort[i].updateMarks(m1, m2, m3);
            cohort[i].display();
            found = true;
            break;
        }
    }
    if (!found) cout << "Student with Roll No " << targetRoll << " not found.\\n";
    return 0;
}</code></pre>
</div>"""
        },
        {
            "id": "ds1-q8",
            "title": "DS1-8: Bank Account Class Handling 10 Customers",
            "difficulty": "Intermediate",
            "category": "Classes & Objects",
            "question": "Define a class to represent a bank account. Include: Name of depositor, Account Number, Type of Account, Balance amount. Member functions: (1) Assign initial values, (2) Deposit amount, (3) Withdraw amount after checking balance, (4) Display name and balance. Write C++ program to handle 10 customers.",
            "solution": """<div class="solution-content">
<div class="code-header"><span>C++ Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="cpp_bank">Copy</button></div>
<pre><code id="cpp_bank">#include &lt;iostream&gt;
#include &lt;string&gt;
#include &lt;iomanip&gt;
using namespace std;

class BankAccount {
private:
    string depositorName;
    long long accountNumber;
    string accountType;
    double balance;

public:
    void init(string name, long long accNo, string type, double initialBal) {
        depositorName = name;
        accountNumber = accNo;
        accountType = type;
        balance = (initialBal >= 0) ? initialBal : 0.0;
    }

    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            cout << "Deposited $" << amount << ". New Balance: $" << balance << "\\n";
        } else {
            cout << "Invalid deposit amount!\\n";
        }
    }

    void withdraw(double amount) {
        if (amount <= 0) {
            cout << "Invalid withdrawal amount!\\n";
        } else if (amount > balance) {
            cout << "Insufficient balance! Current: $" << balance << "\\n";
        } else {
            balance -= amount;
            cout << "Withdrew $" << amount << ". Remaining Balance: $" << balance << "\\n";
        }
    }

    void display() const {
        cout << "Acc: " << accountNumber << " | Holder: " << left << setw(15) 
             << depositorName << " | Type: " << setw(10) << accountType 
             << " | Balance: $" << fixed << setprecision(2) << balance << "\\n";
    }

    long long getAccNo() const { return accountNumber; }
};

int main() {
    const int N = 10;
    BankAccount accounts[N];

    // Seed 10 sample customers
    for (int i = 0; i < N; i++) {
        accounts[i].init("Client_" + to_string(i + 1), 1000100 + i, (i % 2 == 0 ? "Savings" : "Current"), 5000.0 * (i + 1));
    }

    cout << "=== INITIAL BANK REPOSITORY (10 CUSTOMERS) ===\\n";
    for (int i = 0; i < N; i++) accounts[i].display();

    // Example transaction
    cout << "\\nExecuting operations on Account 1000102:\\n";
    accounts[2].deposit(1250.0);
    accounts[2].withdraw(3000.0);
    accounts[2].display();
    return 0;
}</code></pre>
</div>"""
        },
        {
            "id": "ds1-q9",
            "title": "DS1-9: Class Search with Static Call Counter",
            "difficulty": "Intermediate",
            "category": "Static Members",
            "question": "Write a program to create class 'Search' having data members (int a[], x) and define member functions as void input(), void output(), void search(int position), void add(int value) to display result. Also display how many times search method is called using static count.",
            "solution": """<div class="solution-content">
<div class="code-header"><span>C++ Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="cpp_search">Copy</button></div>
<pre><code id="cpp_search">#include &lt;iostream&gt;
using namespace std;

class Search {
private:
    int a[100];
    int size;
    static int searchInvocationCount;

public:
    Search() : size(0) {}

    void input() {
        cout << "Enter number of elements: ";
        cin >> size;
        cout << "Enter " << size << " integers: ";
        for (int i = 0; i < size; i++) cin >> a[i];
    }

    void output() const {
        cout << "Array: [";
        for (int i = 0; i < size; i++) cout << a[i] << (i < size - 1 ? ", " : "");
        cout << "]\\n";
    }

    void add(int value) {
        if (size < 100) {
            a[size++] = value;
            cout << "Appended " << value << " at index " << (size - 1) << "\\n";
        } else {
            cout << "Array overflow!\\n";
        }
    }

    void search(int position) {
        searchInvocationCount++;
        if (position >= 0 && position < size) {
            cout << "Element at index " << position << " is: " << a[position] << "\\n";
        } else {
            cout << "Invalid index " << position << "! Bounds are [0.." << size - 1 << "]\\n";
        }
    }

    static int getSearchCount() { return searchInvocationCount; }
};

int Search::searchInvocationCount = 0;

int main() {
    Search s;
    s.input();
    s.output();

    s.search(1);
    s.search(3);
    s.add(99);
    s.search(s.getSearchCount());

    cout << "\\nTotal times search() was invoked: " << Search::getSearchCount() << "\\n";
    return 0;
}</code></pre>
</div>"""
        },
        {
            "id": "ds1-q10",
            "title": "DS1-10: Class Wallet with High-Balance & High-Transaction Tracking",
            "difficulty": "Advanced",
            "category": "Classes & Objects",
            "question": "Write a C++ program to create a class Wallet to manage the details and transactions of digital wallets. Data members: Wallet ID, Owner Name, Balance, Transaction Count. Conditions: Initial balance >= Rs 500, Deposit >= Rs 100, Withdrawal allowed only if balance remains >= Rs 500. Display: highest balance wallet, highest transaction wallet, and static total transactions.",
            "solution": """<div class="solution-content">
<div class="code-header"><span>C++ Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="cpp_wallet">Copy</button></div>
<pre><code id="cpp_wallet">#include &lt;iostream&gt;
#include &lt;string&gt;
#include &lt;vector&gt;
using namespace std;

class Wallet {
private:
    int walletId;
    string ownerName;
    double balance;
    int transactionCount;
    static int totalGlobalTransactions;

public:
    Wallet(int id, string name, double initBal) {
        walletId = id;
        ownerName = name;
        balance = (initBal >= 500.0) ? initBal : 500.0;
        transactionCount = 0;
    }

    bool deposit(double amount) {
        if (amount < 100.0) {
            cout << "Error: Deposit must be at least Rs 100.\\n";
            return false;
        }
        balance += amount;
        transactionCount++;
        totalGlobalTransactions++;
        return true;
    }

    bool withdraw(double amount) {
        if (amount <= 0) return false;
        if (balance - amount < 500.0) {
            cout << "Error: Withdrawal denied! Balance must remain at least Rs 500.\\n";
            return false;
        }
        balance -= amount;
        transactionCount++;
        totalGlobalTransactions++;
        return true;
    }

    double getBalance() const { return balance; }
    int getTxCount() const { return transactionCount; }

    void display() const {
        cout << "Wallet ID: " << walletId << " | Owner: " << ownerName 
             << " | Balance: Rs " << balance << " | Txns: " << transactionCount << "\\n";
    }

    static int getGlobalTxCount() { return totalGlobalTransactions; }
};

int Wallet::totalGlobalTransactions = 0;

int main() {
    vector&lt;Wallet&gt; wallets = {
        Wallet(101, "Alice", 1200.0),
        Wallet(102, "Bob", 600.0),
        Wallet(103, "Charlie", 2500.0)
    };

    wallets[0].deposit(500);
    wallets[0].withdraw(300);
    wallets[1].deposit(200);
    wallets[1].withdraw(400); // Should fail minimum balance test
    wallets[2].deposit(1000);
    wallets[2].deposit(500);

    cout << "\\n=== ALL WALLETS ===\\n";
    int highestBalIdx = 0, highestTxIdx = 0;
    for (size_t i = 0; i < wallets.size(); i++) {
        wallets[i].display();
        if (wallets[i].getBalance() > wallets[highestBalIdx].getBalance()) highestBalIdx = i;
        if (wallets[i].getTxCount() > wallets[highestTxIdx].getTxCount()) highestTxIdx = i;
    }

    cout << "\\nWallet with Highest Balance:\\n  "; wallets[highestBalIdx].display();
    cout << "Wallet with Highest Transactions:\\n  "; wallets[highestTxIdx].display();
    cout << "Global Transactions across all wallets: " << Wallet::getGlobalTxCount() << "\\n";
    return 0;
}</code></pre>
</div>"""
        },
        {
            "id": "ds1-q11",
            "title": "DS1-11: Product Inventory Management (10 Products)",
            "difficulty": "Intermediate",
            "category": "Classes & Objects",
            "question": "Write a program to create a class Product having: Product ID, Product Name, Price, Quantity. Create records for 10 products and perform: (1) Display all, (2) Calculate total inventory value, (3) Display highest priced product, (4) Display products whose quantity is less than 10, (5) Search product using Product ID.",
            "solution": """<div class="solution-content">
<div class="code-header"><span>C++ Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="cpp_prod">Copy</button></div>
<pre><code id="cpp_prod">#include &lt;iostream&gt;
#include &lt;string&gt;
#include &lt;iomanip&gt;
using namespace std;

class Product {
private:
    int productId;
    string productName;
    double price;
    int quantity;

public:
    void init(int id, string name, double p, int q) {
        productId = id;
        productName = name;
        price = (p > 0) ? p : 1.0;
        quantity = (q >= 0) ? q : 0;
    }

    int getId() const { return productId; }
    double getPrice() const { return price; }
    int getQty() const { return quantity; }
    double getValue() const { return price * quantity; }

    void display() const {
        cout << left << setw(6) << productId << setw(20) << productName 
             << "$" << fixed << setprecision(2) << setw(10) << price 
             << setw(8) << quantity 
             << "$" << setw(12) << getValue() << "\\n";
    }
};

int main() {
    const int N = 10;
    Product catalog[N];

    // Seed 10 products
    catalog[0].init(101, "Laptop Core i7", 1100.0, 5);
    catalog[1].init(102, "Wireless Mouse", 25.0, 50);
    catalog[2].init(103, "Mechanical Keyboard", 85.0, 8);
    catalog[3].init(104, "4K IPS Monitor", 450.0, 12);
    catalog[4].init(105, "USB-C Hub", 35.0, 4);
    catalog[5].init(106, "Webcam 1080p", 60.0, 15);
    catalog[6].init(107, "External SSD 1TB", 120.0, 30);
    catalog[7].init(108, "Noise-Cancel Headset", 199.0, 7);
    catalog[8].init(109, "Desk Pad XL", 18.0, 40);
    catalog[9].init(110, "Smart Light Bar", 55.0, 9);

    cout << "=== PRODUCT INVENTORY CATALOG ===\\n";
    cout << left << setw(6) << "ID" << setw(20) << "Name" << setw(11) << "Price" 
         << setw(8) << "Qty" << "Total Value\\n";
    cout << "------------------------------------------------------------\\n";
    double totalInventoryValue = 0.0;
    int maxPriceIdx = 0;

    for (int i = 0; i < N; i++) {
        catalog[i].display();
        totalInventoryValue += catalog[i].getValue();
        if (catalog[i].getPrice() > catalog[maxPriceIdx].getPrice()) maxPriceIdx = i;
    }
    cout << "------------------------------------------------------------\\n";
    cout << "Total Inventory Worth: $" << totalInventoryValue << "\\n";

    cout << "\\nProduct with Highest Price:\\n  "; catalog[maxPriceIdx].display();

    cout << "\\nLow Stock Products (Quantity < 10):\\n";
    for (int i = 0; i < N; i++) {
        if (catalog[i].getQty() < 10) catalog[i].display();
    }

    // Search by ID
    int searchId = 105;
    cout << "\\nSearching for Product ID " << searchId << ":\\n";
    bool found = false;
    for (int i = 0; i < N; i++) {
        if (catalog[i].getId() == searchId) {
            catalog[i].display();
            found = true;
            break;
        }
    }
    if (!found) cout << "Not found.\\n";
    return 0;
}</code></pre>
</div>"""
        },
        {
            "id": "ds1-q12",
            "title": "DS1-12: Electricity Bill Calculation (Slab Pricing for 10 Consumers)",
            "difficulty": "Intermediate",
            "category": "Classes & Objects",
            "question": "Create a class Electricity Bill having: Consumer Number, Consumer Name, Previous Meter Reading, Current Meter Reading. Calculate bill according to slabs: First 100 units @ Rs 2/unit, 101-200 @ Rs 3/unit, 201-300 @ Rs 5/unit, Above 300 @ Rs 7/unit. Display consumer details, units, bill amount for 10 consumers, and find consumer with highest bill.",
            "solution": """<div class="solution-content">
<div class="code-header"><span>C++ Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="cpp_elec">Copy</button></div>
<pre><code id="cpp_elec">#include &lt;iostream&gt;
#include &lt;string&gt;
#include &lt;iomanip&gt;
using namespace std;

class ElectricityBill {
private:
    int consumerNo;
    string consumerName;
    int prevReading;
    int currReading;
    int unitsConsumed;
    double billAmount;

public:
    void init(int no, string name, int prev, int curr) {
        consumerNo = no;
        consumerName = name;
        prevReading = (prev >= 0) ? prev : 0;
        currReading = (curr >= prevReading) ? curr : prevReading;
        calculate();
    }

    void calculate() {
        unitsConsumed = currReading - prevReading;
        int u = unitsConsumed;
        billAmount = 0.0;

        if (u <= 100) {
            billAmount = u * 2.0;
        } else if (u <= 200) {
            billAmount = (100 * 2.0) + (u - 100) * 3.0;
        } else if (u <= 300) {
            billAmount = (100 * 2.0) + (100 * 3.0) + (u - 200) * 5.0;
        } else {
            billAmount = (100 * 2.0) + (100 * 3.0) + (100 * 5.0) + (u - 300) * 7.0;
        }
    }

    double getBill() const { return billAmount; }

    void display() const {
        cout << left << setw(8) << consumerNo << setw(18) << consumerName 
             << setw(10) << prevReading << setw(10) << currReading 
             << setw(10) << unitsConsumed << "Rs " << fixed << setprecision(2) << billAmount << "\\n";
    }
};

int main() {
    const int N = 10;
    ElectricityBill bills[N];

    int prevs[] = { 1000, 2400, 1500, 3100, 4000, 1200, 5000, 6200, 1100, 800 };
    int currs[] = { 1080, 2550, 1750, 3450, 4420, 1230, 5210, 6590, 1310, 990 };

    for (int i = 0; i < N; i++) {
        bills[i].init(1001 + i, "Consumer_" + to_string(i + 1), prevs[i], currs[i]);
    }

    cout << "======================== ELECTRICITY BILL STATEMENTS ========================\\n";
    cout << left << setw(8) << "Cons No" << setw(18) << "Name" 
         << setw(10) << "Prev Rdg" << setw(10) << "Curr Rdg" 
         << setw(10) << "Units" << "Bill Amount\\n";
    cout << "-----------------------------------------------------------------------------\\n";

    int maxIdx = 0;
    for (int i = 0; i < N; i++) {
        bills[i].display();
        if (bills[i].getBill() > bills[maxIdx].getBill()) maxIdx = i;
    }
    cout << "-----------------------------------------------------------------------------\\n";
    cout << "\\nConsumer with Highest Bill:\\n  "; bills[maxIdx].display();
    return 0;
}</code></pre>
</div>"""
        }
    ]

# --- DS Practical 2: Operator Overloading & Templates (11 Qs) ---
def get_ds2_assignment():
    return [
        {
            "id": "ds2-q1",
            "title": "DS2-1: Overloading Binary + Operator for Class Numbers",
            "difficulty": "Intermediate",
            "category": "Operator Overloading",
            "question": "WAP to use binary operator + to add two objects of class Numbers having num1 and num2 as its data members and display result.",
            "solution": """<div class="solution-content">
<div class="code-header"><span>C++ Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="cpp_oo_add">Copy</button></div>
<pre><code id="cpp_oo_add">#include &lt;iostream&gt;
using namespace std;

class Numbers {
private:
    int num1, num2;
public:
    Numbers(int n1 = 0, int n2 = 0) : num1(n1), num2(n2) {}

    // Overloaded binary + operator
    Numbers operator+(const Numbers& other) const {
        return Numbers(num1 + other.num1, num2 + other.num2);
    }

    void display() const {
        cout << "(num1 = " << num1 << ", num2 = " << num2 << ")\\n";
    }
};

int main() {
    Numbers n1(10, 20);
    Numbers n2(5, 15);
    Numbers n3 = n1 + n2;

    cout << "n1: "; n1.display();
    cout << "n2: "; n2.display();
    cout << "Result n1 + n2: "; n3.display();
    return 0;
}</code></pre>
</div>"""
        },
        {
            "id": "ds2-q2",
            "title": "DS2-2: Overload Operator * to Scale Class arrayContainer",
            "difficulty": "Intermediate",
            "category": "Operator Overloading",
            "question": "WAP to overload operator * which multiplies a scalar number to each element of an array within a class arrayContainer and displays the result.",
            "solution": """<div class="solution-content">
<div class="code-header"><span>C++ Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="cpp_arr_scale">Copy</button></div>
<pre><code id="cpp_arr_scale">#include &lt;iostream&gt;
using namespace std;

class ArrayContainer {
private:
    int arr[10];
    int size;

public:
    ArrayContainer(int s = 5) : size(s) {
        for (int i = 0; i < size; i++) arr[i] = (i + 1) * 2;
    }

    // Overload operator * for scalar multiplication (container * scalar)
    ArrayContainer operator*(int scalar) const {
        ArrayContainer result(size);
        for (int i = 0; i < size; i++) {
            result.arr[i] = this->arr[i] * scalar;
        }
        return result;
    }

    void display() const {
        cout << "[ ";
        for (int i = 0; i < size; i++) cout << arr[i] << " ";
        cout << "]\\n";
    }
};

int main() {
    ArrayContainer ac(5);
    cout << "Original Array: "; ac.display();

    ArrayContainer scaled = ac * 3;
    cout << "Scaled by 3:    "; scaled.display();
    return 0;
}</code></pre>
</div>"""
        },
        {
            "id": "ds2-q3",
            "title": "DS2-3: Complex Number Class Overloading (*, +, -, ==, !=, =)",
            "difficulty": "Advanced",
            "category": "Operator Overloading",
            "question": "WAP to overload the *, +, -, ==, != and = operators for the Complex class.",
            "solution": """<div class="solution-content">
<div class="code-header"><span>C++ Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="cpp_complex">Copy</button></div>
<pre><code id="cpp_complex">#include &lt;iostream&gt;
using namespace std;

class Complex {
private:
    double real, imag;

public:
    Complex(double r = 0.0, double i = 0.0) : real(r), imag(i) {}

    // Copy assignment
    Complex& operator=(const Complex& other) {
        if (this != &other) {
            real = other.real;
            imag = other.imag;
        }
        return *this;
    }

    // Binary +
    Complex operator+(const Complex& o) const {
        return Complex(real + o.real, imag + o.imag);
    }

    // Binary -
    Complex operator-(const Complex& o) const {
        return Complex(real - o.real, imag - o.imag);
    }

    // Binary *
    Complex operator*(const Complex& o) const {
        return Complex(real * o.real - imag * o.imag, real * o.imag + imag * o.real);
    }

    // Equality
    bool operator==(const Complex& o) const {
        return (real == o.real && imag == o.imag);
    }

    // Inequality
    bool operator!=(const Complex& o) const {
        return !(*this == o);
    }

    void display() const {
        cout << real << (imag >= 0 ? " + " : " - ") << abs(imag) << "i\\n";
    }
};

int main() {
    Complex c1(3, 4), c2(1, -2);
    cout << "c1 = "; c1.display();
    cout << "c2 = "; c2.display();

    Complex sum = c1 + c2;
    Complex diff = c1 - c2;
    Complex prod = c1 * c2;

    cout << "c1 + c2 = "; sum.display();
    cout << "c1 - c2 = "; diff.display();
    cout << "c1 * c2 = "; prod.display();
    cout << "c1 == c2: " << (c1 == c2 ? "true" : "false") << "\\n";
    cout << "c1 != c2: " << (c1 != c2 ? "true" : "false") << "\\n";
    return 0;
}</code></pre>
</div>"""
        },
        {
            "id": "ds2-q4",
            "title": "DS2-4: Matrix Class with Stream Output Overloading (m1 << cout)",
            "difficulty": "Intermediate",
            "category": "Operator Overloading",
            "question": "WAP to define an object m1 of matrix class, use m1 << cout (and standard stream insertion cout << m1).",
            "solution": """<div class="solution-content">
<div class="code-header"><span>C++ Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="cpp_mat_stream">Copy</button></div>
<pre><code id="cpp_mat_stream">#include &lt;iostream&gt;
using namespace std;

class Matrix {
private:
    int mat[2][2];

public:
    Matrix() {
        mat[0][0] = 1; mat[0][1] = 2;
        mat[1][0] = 3; mat[1][1] = 4;
    }

    // Member function overloading << for syntax: m1 << cout;
    void operator<<(ostream& os) const {
        os << "[" << mat[0][0] << ", " << mat[0][1] << "]\\n"
           << "[" << mat[1][0] << ", " << mat[1][1] << "]\\n";
    }

    // Standard friend function for idiomatic: cout << m1;
    friend ostream& operator<<(ostream& os, const Matrix& m) {
        m << os;
        return os;
    }
};

int main() {
    Matrix m1;
    cout << "Output via m1 << cout syntax:\\n";
    m1 << cout;

    cout << "\\nOutput via standard cout << m1 syntax:\\n";
    cout << m1;
    return 0;
}</code></pre>
</div>"""
        },
        {
            "id": "ds2-q5",
            "title": "DS2-5: Matrix Scalar Multiplication with Commutative Friend (5 * Matrix)",
            "difficulty": "Intermediate",
            "category": "Operator Overloading",
            "question": "WAP to define a matrix class and overload the * operator to multiply a number with matrix (Example: 5 * Matrix should be possible using friend function).",
            "solution": """<div class="solution-content">
<div class="code-header"><span>C++ Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="cpp_scalar_mat">Copy</button></div>
<pre><code id="cpp_scalar_mat">#include &lt;iostream&gt;
using namespace std;

class Matrix {
private:
    int data[2][2];

public:
    Matrix(int a=1, int b=2, int c=3, int d=4) {
        data[0][0]=a; data[0][1]=b;
        data[1][0]=c; data[1][1]=d;
    }

    // Member function for: Matrix * scalar
    Matrix operator*(int scalar) const {
        return Matrix(data[0][0]*scalar, data[0][1]*scalar,
                      data[1][0]*scalar, data[1][1]*scalar);
    }

    // Friend function for: scalar * Matrix (e.g. 5 * m1)
    friend Matrix operator*(int scalar, const Matrix& m) {
        return m * scalar;
    }

    void display() const {
        cout << "[" << data[0][0] << "  " << data[0][1] << "]\\n"
             << "[" << data[1][0] << "  " << data[1][1] << "]\\n";
    }
};

int main() {
    Matrix m(2, 3, 4, 5);
    cout << "Original Matrix:\\n"; m.display();

    Matrix res1 = 5 * m; // 5 * Matrix enabled via friend function
    cout << "\\nResult of 5 * Matrix:\\n"; res1.display();

    Matrix res2 = m * 2;
    cout << "\\nResult of Matrix * 2:\\n"; res2.display();
    return 0;
}</code></pre>
</div>"""
        },
        {
            "id": "ds2-q6",
            "title": "DS2-6: Class Date Operator Overloading (+, -, =, <, <=, >, >=, ++, --)",
            "difficulty": "Advanced",
            "category": "Operator Overloading",
            "question": "WAP to define a class Date with properties int month, day, year. Overload operators assuming 360-day year and 30-day month: (1) Date + int, (2) Date - int, (3) =, (4) Relational (<, <=, >, >=), (5) Pre/Post ++ and --.",
            "solution": """<div class="solution-content">
<div class="code-header"><span>C++ Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="cpp_date_ops">Copy</button></div>
<pre><code id="cpp_date_ops">#include &lt;iostream&gt;
#include &lt;iomanip&gt;
using namespace std;

class Date {
private:
    int day, month, year;

    long toDays() const {
        return (long)year * 360 + (month - 1) * 30 + day;
    }

    void fromDays(long totalDays) {
        year = totalDays / 360;
        long rem = totalDays % 360;
        month = (rem / 30) + 1;
        day = (rem % 30);
        if (day == 0) { day = 30; month--; }
    }

public:
    Date(int d=1, int m=1, int y=2026) : day(d), month(m), year(y) {}

    // Date + int
    Date operator+(int days) const {
        Date temp;
        temp.fromDays(this->toDays() + days);
        return temp;
    }

    // Date - int
    Date operator-(int days) const {
        Date temp;
        temp.fromDays(this->toDays() - days);
        return temp;
    }

    // Relational
    bool operator<(const Date& o) const { return toDays() < o.toDays(); }
    bool operator<=(const Date& o) const { return toDays() <= o.toDays(); }
    bool operator>(const Date& o) const { return toDays() > o.toDays(); }
    bool operator>=(const Date& o) const { return toDays() >= o.toDays(); }

    // Pre-increment
    Date& operator++() {
        *this = *this + 1;
        return *this;
    }

    // Post-increment
    Date operator++(int) {
        Date copy = *this;
        *this = *this + 1;
        return copy;
    }

    // Pre-decrement
    Date& operator--() {
        *this = *this - 1;
        return *this;
    }

    // Post-decrement
    Date operator--(int) {
        Date copy = *this;
        *this = *this - 1;
        return copy;
    }

    void display() const {
        cout << setfill('0') << setw(2) << day << "/"
             << setfill('0') << setw(2) << month << "/" << year << "\\n";
    }
};

int main() {
    Date d(28, 5, 2026);
    cout << "Start: "; d.display();
    Date d2 = d + 5;
    cout << "d + 5: "; d2.display();
    ++d;
    cout << "++d:   "; d.display();
    cout << "d < d2: " << (d < d2 ? "true" : "false") << "\\n";
    return 0;
}</code></pre>
</div>"""
        },
        {
            "id": "ds2-q7",
            "title": "DS2-7: Class Time Operator Overloading (+, -, =, <, <=, >, >=, ++, --)",
            "difficulty": "Advanced",
            "category": "Operator Overloading",
            "question": "WAP to define a class Time with properties int hour, minute, second. Overload +, -, =, relational, and pre/post ++, -- operators.",
            "solution": """<div class="solution-content">
<div class="code-header"><span>C++ Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="cpp_time_ops">Copy</button></div>
<pre><code id="cpp_time_ops">#include &lt;iostream&gt;
#include &lt;iomanip&gt;
using namespace std;

class Time {
private:
    int h, m, s;

    long toSeconds() const { return h * 3600L + m * 60L + s; }
    void fromSeconds(long sec) {
        sec = (sec % 86400L + 86400L) % 86400L;
        h = sec / 3600;
        sec %= 3600;
        m = sec / 60;
        s = sec % 60;
    }

public:
    Time(int hr=0, int min=0, int sec=0) : h(hr), m(min), s(sec) {}

    Time operator+(int sec) const {
        Time res; res.fromSeconds(this->toSeconds() + sec); return res;
    }
    Time operator-(int sec) const {
        Time res; res.fromSeconds(this->toSeconds() - sec); return res;
    }

    bool operator<(const Time& o) const { return toSeconds() < o.toSeconds(); }
    bool operator<=(const Time& o) const { return toSeconds() <= o.toSeconds(); }
    bool operator>(const Time& o) const { return toSeconds() > o.toSeconds(); }
    bool operator>=(const Time& o) const { return toSeconds() >= o.toSeconds(); }

    Time& operator++() { *this = *this + 1; return *this; }
    Time operator++(int) { Time old = *this; *this = *this + 1; return old; }
    Time& operator--() { *this = *this - 1; return *this; }
    Time operator--(int) { Time old = *this; *this = *this - 1; return old; }

    void display() const {
        cout << setfill('0') << setw(2) << h << ":" 
             << setfill('0') << setw(2) << m << ":" 
             << setfill('0') << setw(2) << s << "\\n";
    }
};

int main() {
    Time t1(10, 59, 58);
    cout << "Initial: "; t1.display();
    ++t1;
    cout << "++t1:    "; t1.display();
    ++t1;
    cout << "++t1:    "; t1.display();
    return 0;
}</code></pre>
</div>"""
        },
        {
            "id": "ds2-q8",
            "title": "DS2-8: Menu-Driven Custom String Class with Overloaded Operators",
            "difficulty": "Advanced",
            "category": "Operator Overloading",
            "question": "Write a menu driven program that can perform the following functions on strings using overloaded operators where possible (without using predefined string library): (1) Equality (==), (2) Comparison (<=), (3) Copy string, (4) Subscript character extraction ([]), (5) Reverse string, (6) Concatenation (+).",
            "solution": """<div class="solution-content">
<div class="code-header"><span>C++ Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="cpp_custom_str">Copy</button></div>
<pre><code id="cpp_custom_str">#include &lt;iostream&gt;
using namespace std;

class MyString {
private:
    char* str;
    int len;

    int computeLength(const char* s) const {
        int l = 0; while (s && s[l] != '\\0') l++; return l;
    }

public:
    MyString(const char* s = "") {
        len = computeLength(s);
        str = new char[len + 1];
        for (int i = 0; i < len; i++) str[i] = s[i];
        str[len] = '\\0';
    }

    MyString(const MyString& other) {
        len = other.len;
        str = new char[len + 1];
        for (int i = 0; i <= len; i++) str[i] = other.str[i];
    }

    ~MyString() { delete[] str; }

    // Copy assignment
    MyString& operator=(const MyString& other) {
        if (this != &other) {
            delete[] str;
            len = other.len;
            str = new char[len + 1];
            for (int i = 0; i <= len; i++) str[i] = other.str[i];
        }
        return *this;
    }

    // Equality ==
    bool operator==(const MyString& other) const {
        if (len != other.len) return false;
        for (int i = 0; i < len; i++) {
            if (str[i] != other.str[i]) return false;
        }
        return true;
    }

    // Lexicographical <=
    bool operator<=(const MyString& other) const {
        int minL = (len < other.len) ? len : other.len;
        for (int i = 0; i < minL; i++) {
            if (str[i] < other.str[i]) return true;
            if (str[i] > other.str[i]) return false;
        }
        return len <= other.len;
    }

    // Subscript []
    char operator[](int idx) const {
        if (idx >= 0 && idx < len) return str[idx];
        return '\\0';
    }

    // Concatenate +
    MyString operator+(const MyString& other) const {
        char* buf = new char[len + other.len + 1];
        for (int i = 0; i < len; i++) buf[i] = str[i];
        for (int j = 0; j < other.len; j++) buf[len + j] = other.str[j];
        buf[len + other.len] = '\\0';
        MyString res(buf);
        delete[] buf;
        return res;
    }

    void reverse() {
        int l = 0, r = len - 1;
        while (l < r) {
            char t = str[l]; str[l] = str[r]; str[r] = t;
            l++; r--;
        }
    }

    void display() const { cout << str; }
};

int main() {
    MyString s1("Data");
    MyString s2("Structures");

    cout << "s1: "; s1.display(); cout << "\\n";
    cout << "s2: "; s2.display(); cout << "\\n";

    MyString s3 = s1 + s2;
    cout << "Concatenation (+): "; s3.display(); cout << "\\n";

    cout << "Char at index 2 of s1: " << s1[2] << "\\n";
    cout << "s1 == s2: " << (s1 == s2 ? "true" : "false") << "\\n";
    cout << "s1 <= s2: " << (s1 <= s2 ? "true" : "false") << "\\n";

    s3.reverse();
    cout << "Reversed concatenation: "; s3.display(); cout << "\\n";
    return 0;
}</code></pre>
</div>"""
        },
        {
            "id": "ds2-q9",
            "title": "DS2-9: Generic Number Class Template for Arithmetic (+, -, *, /)",
            "difficulty": "Intermediate",
            "category": "Templates & Generics",
            "question": "Write an object-oriented program to implement a generic Number Class using templates that can accept either int or float data type and perform basic calculation like +, -, / and *.",
            "solution": """<div class="solution-content">
<div class="code-header"><span>C++ Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="cpp_gen_num">Copy</button></div>
<pre><code id="cpp_gen_num">#include &lt;iostream&gt;
using namespace std;

template &lt;typename T&gt;
class GenericNumber {
private:
    T val;

public:
    GenericNumber(T v = 0) : val(v) {}

    T add(T other) const { return val + other; }
    T subtract(T other) const { return val - other; }
    T multiply(T other) const { return val * other; }
    T divide(T other) const {
        if (other == 0) {
            cout << "Division by zero error! ";
            return 0;
        }
        return val / other;
    }

    void display() const { cout << val; }
};

int main() {
    cout << "--- Integer Mode ---\\n";
    GenericNumber&lt;int&gt; intNum(40);
    cout << "40 + 12 = " << intNum.add(12) << "\\n";
    cout << "40 - 15 = " << intNum.subtract(15) << "\\n";
    cout << "40 * 3  = " << intNum.multiply(3) << "\\n";
    cout << "40 / 5  = " << intNum.divide(5) << "\\n";

    cout << "\\n--- Float Mode ---\\n";
    GenericNumber&lt;float&gt; floatNum(17.5f);
    cout << "17.5 + 2.5 = " << floatNum.add(2.5f) << "\\n";
    cout << "17.5 / 2.0 = " << floatNum.divide(2.0f) << "\\n";
    return 0;
}</code></pre>
</div>"""
        },
        {
            "id": "ds2-q10",
            "title": "DS2-10: Generic Sorting Template Function for Strings, Integers, and Floats",
            "difficulty": "Intermediate",
            "category": "Templates & Generics",
            "question": "Write a generic template function that will sort a character string, integer array, and float array. Create a menu with appropriate options and accept the values from the user.",
            "solution": """<div class="solution-content">
<div class="code-header"><span>C++ Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="cpp_gen_sort">Copy</button></div>
<pre><code id="cpp_gen_sort">#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;

template &lt;typename T&gt;
void genericBubbleSort(T arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                T temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

template &lt;typename T&gt;
void printArray(T arr[], int n) {
    for (int i = 0; i < n; i++) cout << arr[i] << " ";
    cout << "\\n";
}

int main() {
    int intArr[] = { 64, 34, 25, 12, 22, 11, 90 };
    int nInt = sizeof(intArr)/sizeof(intArr[0]);
    cout << "Original Ints: "; printArray(intArr, nInt);
    genericBubbleSort(intArr, nInt);
    cout << "Sorted Ints:   "; printArray(intArr, nInt);

    float floatArr[] = { 3.14f, 1.41f, 2.71f, 0.58f };
    int nFloat = sizeof(floatArr)/sizeof(floatArr[0]);
    cout << "\\nOriginal Floats: "; printArray(floatArr, nFloat);
    genericBubbleSort(floatArr, nFloat);
    cout << "Sorted Floats:   "; printArray(floatArr, nFloat);

    char charArr[] = { 'z', 'a', 'm', 'c', 'k' };
    int nChar = sizeof(charArr)/sizeof(charArr[0]);
    cout << "\\nOriginal Chars: "; printArray(charArr, nChar);
    genericBubbleSort(charArr, nChar);
    cout << "Sorted Chars:   "; printArray(charArr, nChar);
    return 0;
}</code></pre>
</div>"""
        },
        {
            "id": "ds2-q11",
            "title": "DS2-11: Template Function find() for Generic Array Lookup",
            "difficulty": "Intermediate",
            "category": "Templates & Generics",
            "question": "Write a template function called find(). This function searches an array for an object. It returns either the index of the matching object (if one is found) or -1 if no match is found.",
            "solution": """<div class="solution-content">
<div class="code-header"><span>C++ Source Code</span><button class="btn btn-sm btn-ghost copy-btn" data-copy="cpp_template_find">Copy</button></div>
<pre><code id="cpp_template_find">#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;

template &lt;typename T&gt;
int find(const T arr[], int size, const T& target) {
    for (int i = 0; i < size; i++) {
        if (arr[i] == target) {
            return i; // Found at index i
        }
    }
    return -1; // Not found
}

int main() {
    int intArr[] = { 10, 20, 30, 40, 50 };
    int idx1 = find(intArr, 5, 30);
    cout << "find(intArr, 30): Index " << idx1 << "\\n";

    string strArr[] = { "Alpha", "Beta", "Gamma", "Delta" };
    int idx2 = find(strArr, 4, string("Gamma"));
    cout << "find(strArr, 'Gamma'): Index " << idx2 << "\\n";

    int idx3 = find(strArr, 4, string("Omega"));
    cout << "find(strArr, 'Omega'): Index " << idx3 << " (Not found)\\n";
    return 0;
}</code></pre>
</div>"""
        }
    ]

# --- DS Topics ---
def get_ds_topics():
    return [
        {
            "id": "ds-t1",
            "title": "C Pointers, Memory Model & DMA",
            "tag": "C Core",
            "content": """
              <p>Pointers store physical memory addresses. In C, dynamic memory allocation occurs in the <strong>Heap</strong> segment via four standard runtime functions:</p>
              <ul>
                <li><code>malloc(size_t size)</code>: Allocates uninitialized memory chunk of specified byte size.</li>
                <li><code>calloc(size_t num, size_t size)</code>: Allocates contiguous block zero-initializing all bytes.</li>
                <li><code>realloc(void *ptr, size_t new_size)</code>: Resizes existing allocated block, migrating contents if memory expansion requires relocation.</li>
                <li><code>free(void *ptr)</code>: Deallocates heap memory back to the OS runtime pool, preventing memory leaks.</li>
              </ul>
              <div class="callout callout-warning">
                <div class="callout-title">Dangling Pointers & Memory Leaks</div>
                <p>Always set deallocated pointers to <code>NULL</code> immediately after <code>free(ptr)</code> to prevent accessing freed heap memory.</p>
              </div>
            """
        },
        {
            "id": "ds-t2",
            "title": "Storage Classes & Preprocessor Directives",
            "tag": "Architecture",
            "content": """
              <p>Storage classes define variable scope, lifetime, and storage location:</p>
              <div class="data-table-wrapper">
                <table class="data-table">
                  <thead><tr><th>Storage Class</th><th>Keyword</th><th>Location</th><th>Default Value</th><th>Scope</th><th>Lifetime</th></tr></thead>
                  <tbody>
                    <tr><td>Automatic</td><td><code>auto</code></td><td>Stack</td><td>Garbage</td><td>Block</td><td>End of block</td></tr>
                    <tr><td>Register</td><td><code>register</code></td><td>CPU Register</td><td>Garbage</td><td>Block</td><td>End of block</td></tr>
                    <tr><td>Static</td><td><code>static</code></td><td>Data Segment</td><td>Zero</td><td>File / Block</td><td>Entire Program</td></tr>
                    <tr><td>External</td><td><code>extern</code></td><td>Data Segment</td><td>Zero</td><td>Global across files</td><td>Entire Program</td></tr>
                  </tbody>
                </table>
              </div>
            """
        },
        {
            "id": "ds-t3",
            "title": "C++ OOP Principles & Encapsulation",
            "tag": "OOP Core",
            "content": """
              <p>C++ introduces class-based Object-Oriented Programming (OOP) enforcing four pillars:</p>
              <ol>
                <li><strong>Encapsulation:</strong> Bundling data members and member functions into classes with access specifiers (<code>private</code>, <code>protected</code>, <code>public</code>).</li>
                <li><strong>Abstraction:</strong> Exposing essential interface contracts while concealing internal algorithmic and memory management mechanisms.</li>
                <li><strong>Inheritance:</strong> Reusing code and establishing hierarchical polymorphism.</li>
                <li><strong>Polymorphism:</strong> Compile-time (function overloading, operator overloading, templates) and Run-time (virtual functions, dynamic dispatch via vtable).</li>
              </ol>
            """
        },
        {
            "id": "ds-t4",
            "title": "Operator Overloading Mechanics",
            "tag": "Polymorphism",
            "content": """
              <p>Operator overloading allows user-defined types to exhibit natural mathematical syntax. Syntax:</p>
              <pre><code>ReturnType operator Symbol(ParameterList) { /* body */ }</code></pre>
              <div class="callout callout-info">
                <div class="callout-title">Operators That CANNOT Be Overloaded</div>
                <p>For safety and compiler integrity, C++ forbids overloading: <code>.</code> (member access), <code>.*</code> (pointer-to-member), <code>::</code> (scope resolution), <code>?:</code> (ternary conditional), and <code>sizeof</code>.</p>
              </div>
            """
        },
        {
            "id": "ds-t5",
            "title": "Friend Functions & Friend Classes",
            "tag": "OOP Mechanics",
            "content": """
              <p>A <code>friend</code> function is a non-member function granted explicit access to <code>private</code> and <code>protected</code> members of a class. Commonly utilized for:</p>
              <ul>
                <li>Commutative operator overloading (e.g. <code>5 * matrix</code> where the left operand is a primitive).</li>
                <li>Stream extraction and insertion operators: <code>friend ostream& operator<<(ostream&, const T&);</code>.</li>
                <li>Bridging tight algorithmic dependencies between two separate classes without exposing full public mutators.</li>
              </ul>
            """
        },
        {
            "id": "ds-t6",
            "title": "Templates & Generic Programming",
            "tag": "Generics",
            "content": """
              <p>Templates implement compile-time parametric polymorphism, generating specialized machine code on demand for specific data types:</p>
              <pre><code>template &lt;typename T&gt;
T findMax(T a, T b) {
    return (a > b) ? a : b;
}</code></pre>
              <p>Class templates instantiate container classes (such as vectors, stacks, queues) that operate uniformly across primitives and complex objects.</p>
            """
        },
        {
            "id": "ds-t7",
            "title": "Inheritance Models & Virtual Base Classes",
            "tag": "Inheritance",
            "content": """
              <p>Inheritance enables code reuse across single, multilevel, multiple, and hierarchical topologies. The <strong>Diamond Problem</strong> occurs in multiple inheritance when a class inherits from two classes that share a common ancestor.</p>
              <div class="callout callout-warning">
                <div class="callout-title">Resolving the Diamond Problem with Virtual Base Classes</div>
                <p>Declare the common ancestor as <code>virtual</code>: <code>class B : virtual public A { ... };</code>. This instructs the compiler to retain only a single instance of class A in the leaf object.</p>
              </div>
            """
        },
        {
            "id": "ds-t8",
            "title": "Linear & Non-Linear Data Structures Overview",
            "tag": "Data Structures",
            "content": """
              <p>Data structure foundations utilized throughout machine learning engineering:</p>
              <ul>
                <li><strong>Arrays & Vectors:</strong> Contiguous memory, \(O(1)\) indexing, \(O(N)\) insertion/deletion.</li>
                <li><strong>Singly & Doubly Linked Lists:</strong> Dynamic pointer nodes, \(O(1)\) head/tail modification, \(O(N)\) traversal.</li>
                <li><strong>Stacks (LIFO) & Queues (FIFO):</strong> Essential for recursion backtracking, parsing, and BFS traversal.</li>
                <li><strong>Binary Search Trees & Heaps:</strong> Priority queues, \(O(\log N)\) search and insertion, Min/Max extraction.</li>
              </ul>
            """
        }
    ]

def get_ds_cheatsheet():
    return [
        {
            "title": "Data Structures Time & Space Complexity Reference",
            "content": """
              <div class="data-table-wrapper">
                <table class="data-table">
                  <thead><tr><th>Data Structure</th><th>Access</th><th>Search</th><th>Insertion</th><th>Deletion</th><th>Space</th></tr></thead>
                  <tbody>
                    <tr><td>Array</td><td>O(1)</td><td>O(n)</td><td>O(n)</td><td>O(n)</td><td>O(n)</td></tr>
                    <tr><td>Singly Linked List</td><td>O(n)</td><td>O(n)</td><td>O(1)</td><td>O(1)</td><td>O(n)</td></tr>
                    <tr><td>Stack</td><td>O(n)</td><td>O(n)</td><td>O(1)</td><td>O(1)</td><td>O(n)</td></tr>
                    <tr><td>Queue</td><td>O(n)</td><td>O(n)</td><td>O(1)</td><td>O(1)</td><td>O(n)</td></tr>
                    <tr><td>Binary Search Tree</td><td>O(log n)</td><td>O(log n)</td><td>O(log n)</td><td>O(log n)</td><td>O(n)</td></tr>
                    <tr><td>Hash Table</td><td>N/A</td><td>O(1)</td><td>O(1)</td><td>O(1)</td><td>O(n)</td></tr>
                  </tbody>
                </table>
              </div>
            """
        }
    ]

def build_ds_data():
    all_assignments = get_c_assignment() + get_ds1_assignment() + get_ds2_assignment()
    return {
        "id": "data-structures",
        "code": "AIML-102",
        "name": "Data Structures using C++",
        "subtitle": "Pointers, OOP, Operator Overloading & Generic Templates",
        "stats": { "topics": 8, "assignments": len(all_assignments), "demos": 1 },
        "overview": "Rigorous treatment of memory architecture, pointers, dynamic allocation, C++ OOP design patterns, operator overloading, stream manipulation, templates, and fundamental algorithmic data structures.",
        "topics": get_ds_topics(),
        "assignments": all_assignments,
        "cheatsheet": get_ds_cheatsheet()
    }

if __name__ == "__main__":
    ds_data = build_ds_data()
    print(f"Total DS assignments compiled: {len(ds_data['assignments'])}")
    with open("sem1_ds_data.py", "w", encoding="utf-8") as f:
        f.write("# -*- coding: utf-8 -*-\n")
        f.write("# sem1_ds_data.py - Complete Data Structures using C++ dataset\n\n")
        f.write("def get_ds_data():\n")
        f.write("    return " + repr(ds_data) + "\n")
    print("sem1_ds_data.py successfully written.")

# -*- coding: utf-8 -*-
# compile_full_database.py - Compiles all subjects and outputs site/js/data.js
import json
import os
import sys

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
if SCRIPT_DIR not in sys.path:
    sys.path.insert(0, SCRIPT_DIR)

from sem1_ai_data import get_ai_data
from sem1_ds_data import get_ds_data
from sem1_mf_data import get_mf_data
from sem1_py_data import get_py_data
from sem1_scm_data import get_scm_data, get_cv_data

def build_complete_academic_data():
    ai = get_ai_data()
    ds = get_ds_data()
    mf = get_mf_data()
    py = get_py_data()
    scm = get_scm_data()
    cv = get_cv_data()

    total_assignments = (
        len(ai['assignments']) + 
        len(ds['assignments']) + 
        len(mf['assignments']) + 
        len(py['assignments']) + 
        len(scm['assignments']) + 
        len(cv['assignments'])
    )

    print(f"Summary of Assignments:")
    print(f"  AI: {len(ai['assignments'])}")
    print(f"  Data Structures: {len(ds['assignments'])}")
    print(f"  Mathematical Foundation: {len(mf['assignments'])}")
    print(f"  Python Programming: {len(py['assignments'])}")
    print(f"  Scientific Computing: {len(scm['assignments'])}")
    print(f"  Computer Vision: {len(cv['assignments'])}")
    print(f"  TOTAL SOLVED ASSIGNMENTS: {total_assignments}")

    semesters = [
        {
            "id": "sem-1",
            "number": "1",
            "title": "Semester 1",
            "subtitle": "Active Curriculum",
            "status": "active",
            "subjectsCount": 6,
            "topicsCount": "80+ Topics",
            "assignmentsCount": f"{total_assignments} Solved Problems",
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
    ]

    academic_data = {
        "semesters": semesters,
        "subjects": {
            "sem-1": [ai, ds, mf, py, scm, cv]
        }
    }

    # Serialize to JSON and assign to JavaScript constant
    json_str = json.dumps(academic_data, indent=2, ensure_ascii=False)
    js_content = f"// MSc AIML Academic Database - For the students, by the students\n// Offline Academic Repository containing all notes, worked examples, and verified assignments\n\nconst academicData = {json_str};\n"

    out_file = os.path.join(SCRIPT_DIR, "..", "site", "js", "data.js")
    with open(out_file, "w", encoding="utf-8") as f:
        f.write(js_content)
    
    print(f"site/js/data.js written successfully ({len(js_content)} bytes).")

if __name__ == "__main__":
    build_complete_academic_data()

# -*- coding: utf-8 -*-
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

def export_ts():
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

    out_dir = os.path.join(SCRIPT_DIR, "..", "src", "data")
    os.makedirs(out_dir, exist_ok=True)
    out_file = os.path.join(out_dir, "academicData.ts")

    json_str = json.dumps(academic_data, indent=2, ensure_ascii=False)

    ts_content = f"""// MSc AIML Academic Database - For the students, by the students
// Offline Academic Repository containing all notes, worked examples, and 180 verified assignments

export interface Topic {{
  id: string;
  title: string;
  tag?: string;
  content: string;
}}

export interface Assignment {{
  id: string;
  title: string;
  difficulty?: string;
  category: string;
  question: string;
  solution: string;
}}

export interface CheatsheetItem {{
  title: string;
  content: string;
}}

export interface SubjectStats {{
  topics: number;
  assignments: number;
  demos?: number;
}}

export interface Subject {{
  id: string;
  code: string;
  name: string;
  subtitle: string;
  overview: string;
  stats?: SubjectStats;
  topics: Topic[];
  assignments: Assignment[];
  cheatsheet: CheatsheetItem[];
}}

export interface Semester {{
  id: string;
  number: string;
  title: string;
  subtitle: string;
  status: 'active' | 'upcoming';
  subjectsCount: number;
  topicsCount: string;
  assignmentsCount: string;
  description: string;
}}

export interface AcademicData {{
  semesters: Semester[];
  subjects: Record<string, Subject[]>;
}}

export const academicData: AcademicData = {json_str};

export function getSemester(semId: string): Semester | undefined {{
  return academicData.semesters.find(s => s.id === semId);
}}

export function getSubjects(semId: string): Subject[] {{
  return academicData.subjects[semId] || [];
}}

export function getSubject(semId: string, subjId: string): Subject | undefined {{
  const list = getSubjects(semId);
  const normalized = subjId.toLowerCase();
  return list.find(s => 
    s.id === normalized ||
    s.code.toLowerCase() === normalized ||
    (normalized === 'ds' && s.id === 'data-structures') ||
    (normalized === 'data-structures' && s.id === 'data-structures') ||
    (normalized === 'mf' && s.id === 'mathematical-foundation') ||
    (normalized === 'mathematical-foundation' && s.id === 'mathematical-foundation') ||
    (normalized === 'scm' && s.id === 'scientific-computing') ||
    (normalized === 'scientific-computing' && s.id === 'scientific-computing') ||
    (normalized === 'cv' && s.id === 'computer-vision') ||
    (normalized === 'computer-vision' && s.id === 'computer-vision')
  );
}}

export function getAllAssignments(): {{ semId: string; subject: Subject; assignment: Assignment }}[] {{
  const results: {{ semId: string; subject: Subject; assignment: Assignment }}[] = [];
  for (const sem of academicData.semesters) {{
    const subjects = academicData.subjects[sem.id] || [];
    for (const subj of subjects) {{
      for (const asgn of subj.assignments) {{
        results.push({{ semId: sem.id, subject: subj, assignment: asgn }});
      }}
    }}
  }}
  return results;
}}
"""

    with open(out_file, "w", encoding="utf-8") as f:
        f.write(ts_content)

    print(f"Exported TypeScript database to {out_file} ({len(ts_content)} bytes).")

if __name__ == "__main__":
    export_ts()

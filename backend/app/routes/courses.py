from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database import get_db
from ..models import Course
from ..schemas import CourseCreate

router = APIRouter()

@router.get("/courses")
def read_courses(db: Session = Depends(get_db)):
    return db.query(Course).all()

@router.post("/courses")
def create_course(course: CourseCreate, db: Session = Depends(get_db)):
    db_course = Course(title=course.title, description=course.description)
    db.add(db_course)
    db.commit()
    db.refresh(db_course)
    return db_course

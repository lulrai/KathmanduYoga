from pydantic import BaseModel
from typing import Optional

class UserCreate(BaseModel):
    username: str
    password: str
    is_admin: Optional[bool] = False

class CourseCreate(BaseModel):
    title: str
    description: str

class TestimonialCreate(BaseModel):
    name: str
    content: str

class ContactCreate(BaseModel):
    name: str
    email: str
    message: str

from fastapi import FastAPI
from .routes import auth, courses, testimonials, contact
from .database import Base, engine

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(auth.router, prefix="/auth", tags=["Auth"])
app.include_router(courses.router, prefix="/courses", tags=["Courses"])
app.include_router(testimonials.router, prefix="/testimonials", tags=["Testimonials"])
app.include_router(contact.router, prefix="/contact", tags=["Contact"])

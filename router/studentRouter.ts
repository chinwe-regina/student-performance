import { Router } from "express";
import {
    createStudent,
    deleteStudent,
    readStudentByLevel,
    readStudentByID,
    readStudent,
  updateStudent,
} from "../Controller/studentController";

const router: Router = Router();

router.route("/create-Student").post(createStudent);
router.route("/read-Student").get(readStudent);
router.route("/read-Student-id/:bookID").get(readStudentByID);
router.route("/read-studen-ByLevel").get(readStudentByLevel);
router.route("/update-Student/:studdentID").patch(updateStudent);
router.route("/delete-student/:studentID").delete(deleteStudent);

export default router;

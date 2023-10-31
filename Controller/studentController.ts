import { Request, Response } from "express";
import { statusCode } from "../utils/statusCode";
import { client, db } from "../utils/bConfig";
import { studentModel } from "../Model/studentModel";
import { ObjectId } from "mongob";

export const createStudent = async (req: Request, res: Response) => {
  try {
    await client.connect();
    const { name, school, level, performance, promoted, } =
      req.body;

    const student = new studentModel(
      name,
      school,
      level,
      performance,
      promoted
      );

    await db.insertOne(student);

    return res.status(statusCode.CREATED).json({
      message: "student admitted",
      data: student,
    });
  } catch (error) {
    return res.status(statusCode.BAD_REQUEST).json({
      message: "Error",
    });
  }
};

export const readStudent = async (req: Request, res: Response) => {
  try {
    await client.connect();

    const book = await db.find().toArray();

    return res.status(statusCode.Ok).json({
      message: "Student found",
      data: book,
    });
  } catch (error) {
    return res.status(statusCode.BAD_REQUEST).json({
      message: "Error",
    });
  }
};

export const readStudentByID = async (req: Request, res: Response) => {
  try {
    await client.connect();
    const { bookID } = req.params;

    const book = await db.findOne({ _id: new ObjectId(bookID) });

    return res.status(statusCode.Ok).json({
      message: "student found by ID",
      data: book,
    });
  } catch (error) {
    return res.status(statusCode.BAD_REQUEST).json({
      message: "Error",
    });
  }
};

export const readStudentByLevel = async (req: Request, res: Response) => {
  try {
    await client.connect();
    const { category } = req.body;

    const book = await db.find({ category }).toArray();

    return res.status(statusCode.Ok).json({
      message: "student found by level",
      data: book,
    });
  } catch (error) {
    return res.status(statusCode.BAD_REQUEST).json({
      message: "Error",
    });
  }
};

export const updateStudent = async (req: Request, res: Response) => {
  try {
    await client.connect();
    const { bookID } = req.params;
    const { title } = req.body;

    const book = await db.updateOne(
      { _id: new ObjectId(bookID) },
      { $set: { title } }
    );

    return res.status(statusCode.CREATED).json({
      message: "student updated",
      data: book,
    });
  } catch (error) {
    return res.status(statusCode.BAD_REQUEST).json({
      message: "Error",
    });
  }
};

export const deleteStudent = async (req: Request, res: Response) => {
  try {
    await client.connect();
    const { bookID } = req.params;

    await db.deleteOne({ _id: new ObjectId(bookID) });

    return res.status(statusCode.CREATED).json({
      message: "student delete",
    });
  } catch (error) {
    return res.status(statusCode.BAD_REQUEST).json({
      message: "Error",
    });
  }
};

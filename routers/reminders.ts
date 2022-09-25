import { Router } from "express";
import Reminder from "../models/reminder";
import CreateReminderDto from "./../dtos/create-reminders";

const router = Router();

const reminders: Reminder[] = [];

router.get("/", (req, res) => {
  res.status(200).json(reminders);
});

router.post("/", (req, res) => {
  const { title } = req.body as CreateReminderDto;
  const reminder = new Reminder(title);
  reminders.push(reminder); // storing. In real-world we use a database for this.
  res.status(201).json(reminder);
});

export default router;

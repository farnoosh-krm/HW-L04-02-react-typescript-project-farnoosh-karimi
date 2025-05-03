// ReminderAlert.tsx
import React from "react";
import { useReminder } from "./ReminderContext";

const ReminderAlert: React.FC = () => {
  const { reminders, clearReminders } = useReminder();

  if (reminders.length === 0) return null;

  return (
    <div className="relative bg-yellow-300 text-gray-800 font-semibold w-[95%] p-4 rounded-xl shadow-lg my-4 text-center animate-bounce">
      <button
        onClick={clearReminders}
        className="absolute top-1 right-3 text-xl font-bold text-gray-700 hover:text-red-600"
      >
        ×
      </button>
      {reminders.map((msg, index) => (
        <div key={index} className="my-2">{msg}</div>
      ))}
    </div>
  );
};

export default ReminderAlert;

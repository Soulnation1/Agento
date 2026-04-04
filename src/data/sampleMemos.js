export const mockInboxMemos = [
  {
    _id: "inbox-1",
    sender: "Amy Johnson",
    title: "Team sync moved to 11 AM",
    content:
      "We need to reschedule today's standup to 11 AM due to the client meeting.",
    createdAt: "2026-03-31T09:10:00.000Z",
    unread : true,
  },
  {
    _id: "inbox-2",
    sender: "HR Team",
    title: "Benefits enrollment reminder",
    content:
      "Don't forget to complete your benefits enrollment by the end of the week.",
    createdAt: "2026-03-30T14:45:00.000Z",
  },
  {
    _id: "inbox-3",
    sender: "Design Ops",
    title: "UI review for the dashboard",
    content:
      "Please review the new dashboard mockups and provide feedback by tomorrow.",
    createdAt: "2026-03-29T17:30:00.000Z",
  },
];

export const mockSentMemos = [
  {
    _id: "sent-1",
    title: "Q2 launch prep",
    content:
      "The launch plan is ready. Please review the attached timeline and next steps.",
    createdAt: "2026-03-30T10:05:00.000Z",
  },
  {
    _id: "sent-2",
    title: "Weekly status update",
    content:
      "The engineering team completed the API integration for the new dashboard.",
    createdAt: "2026-03-28T18:20:00.000Z",
  },
];

export const mockDraftMemos = [
  {
    _id: "draft-1",
    title: "Customer feedback summary",
    content: "Draft of the feedback summary for the product review meeting.",
    createdAt: "2026-03-27T13:50:00.000Z",
    updatedAt: "2026-03-30T08:15:00.000Z",
  },
  {
    _id: "draft-2",
    title: "Budget planning notes",
    content: "Unsent notes covering the proposed budget adjustments for Q3.",
    createdAt: "2026-03-26T16:30:00.000Z",
  },
];

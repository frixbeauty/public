import type { RequestDoc } from "./models";

export const templates = {
  intake: (req: RequestDoc) =>
    `Hi! We received your request for ${req.guest.serviceType} in ${req.guest.district} on ${req.guest.date}. We’re reviewing availability now and will confirm the best option shortly. You don’t need to do anything else at this moment.`,
  optionsSent: (req: RequestDoc) =>
    `Your booking options are ready. We have confirmed one main option and prepared two backups. Please review your request link and let us know if you have any last-minute notes.`,
  confirmed: (req: RequestDoc) =>
    `All set! Your booking is confirmed for ${req.guest.date}. We’ll share final details and the payment step next. If anything changes, we will handle it and keep you updated.`
};

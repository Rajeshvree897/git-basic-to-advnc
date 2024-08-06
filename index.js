import express from "express";
import { getUsers, users } from "./getUsers";
import config from "./config";

import ConversationModel from "./db/mongoose-models/conversations";
import NotificationService from "./services/notification-service";
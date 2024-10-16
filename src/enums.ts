export enum MessageCommand {
  PUSH_STATUS = "push_status",
  PROJECT_FILE = "project_file"
}

export enum PrintState {
  UNKNOWN = "UNKNOWN",
  PREPARE = "PREPARE",
  RUNNING = "RUNNING",
  PAUSE = "PAUSE",
  FAILED = "FAILED",
  FINISH = "FINISH",
  IDLE = "IDLE"
}

export enum ContentType {
  IMAGE_PNG = "image/png",
  IMAGE_JPEG = "image/jpeg"
}

import { Client as DClient, ClientOptions } from "discord.js";

export class Client extends DClient {
  constructor(options: ClientOptions) {
    super(options);
  }
}

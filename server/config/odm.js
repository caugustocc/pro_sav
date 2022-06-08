import mongoose from 'mongoose';
import winston from './winston';

class MongooseODM {
  constructor(url) {
    this.url = url;
  }

  async connect() {
    try {
      mongoose.Promise = global.Promise;
      winston.info(`conectado a la base de datos: ${this.url}`);
      const connection = await mongoose.connect(this.url);
      return connection;
    } catch (error) {
      winston.error(
        `Sin conexiom con la conexion devido a: ${error.message} 💀`
      );
      return false;
    }
  }
}
export default MongooseODM;

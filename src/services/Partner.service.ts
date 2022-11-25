import { AppError } from "../errors/AppError";
import jwt from "jsonwebtoken";

interface IClient {
  id: string;
  name: string;
  email: string;
  cellphone: string;
}

var clients: IClient[] = require("../../clients.json");

class PartnerService {
  //Simulação do sistema de authenticação da API do parceiro
  private partnerApiTokenValidator = (propToken: string) => {
    if (!propToken) throw new AppError("Token not found", 401);

    const token = propToken.split(" ")[1];

    jwt.verify(
      token,
      process.env.SECRET_KEY as string,
      (error: any, decoded: any) => {
        if (error) throw new AppError("Invalid token", 401);
      }
    );

    const decode: any = jwt.decode(token);
    return decode;
  };

  //Requisição fake
  private fakeApiRetrieve = async (token: string): Promise<any | undefined> => {
    const client = new Promise((resolve, reject) => {
      const decoded = this.partnerApiTokenValidator(token);

      const client = clients.find((item) => {
        return item.id === decoded.id;
      });

      if (!client) throw new AppError("Invalid token", 401);
      
      //Simulando delay da api
      setTimeout(() => {
          return resolve(client); 
      }, 1000);
    });
    return client;
  };

  //Função de chamada da API do parceiro
  private callApiFunction = async (token: string) => {
    try {
      const client = await this.fakeApiRetrieve(token);
      return client;
    } catch (error: any) {
      throw new AppError(error.message, error.statusCode);
    }
  };

  //Serviço que é chamado pelo controller
  public getUserFromPartner = async (token: string) => {
    const client = this.callApiFunction(token);
    return client;
  };
}

export default PartnerService;

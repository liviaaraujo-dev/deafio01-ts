import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (): void => {
    if(this.getStatus()){
      console.log('Voce pegou um empréstimo')
    }
  }
}

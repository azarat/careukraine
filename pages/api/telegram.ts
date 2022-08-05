import type { NextApiRequest, NextApiResponse } from 'next'
import { CartProductType } from '../../types/types'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  let msg = "Заявка с сайта\r\n\r\n"
  if (req.body.hasOwnProperty("fname"))
    msg += "First name: " + req.body.fname + "\r\n";
  if (req.body.hasOwnProperty("lname"))
    msg += "Last name: " + req.body.lname + "\r\n";
  if (req.body.hasOwnProperty("phone"))
    msg += "Phone: " + req.body.phone + "\r\n";
  if (req.body.hasOwnProperty("adress"))
    msg += "Adress line: " + req.body.adress + "\r\n";
  if (req.body.hasOwnProperty("city"))
    msg += "City: " + req.body.city + "\r\n";
  if (req.body.hasOwnProperty("state"))
    msg += "State/Province/Region: " + req.body.state + "\r\n";
  if (req.body.hasOwnProperty("zip"))
    msg += "Zip/Postal: " + req.body.zip + "\r\n";
  if (req.body.hasOwnProperty("country"))
    msg += "Country: " + req.body.country + "\r\n";

  msg += "-------------\r\n";
  msg += "Products:\r\n";
  
  req.body.products.forEach((p: CartProductType, index: number) => {
    msg += (index + 1) + ". " + p.name + " (" + p.alias + ") / " + p.size + " / " + p.quantity + "шт.\r\n";    
  });

  const endpoint = 'https://api.telegram.org/bot' + process.env.botKey + '/sendMessage';

  const data = {
    chat_id: '@CareUkraineOrders',
    text: msg
  };

  const u = new URLSearchParams(data).toString();

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  }

  const response = await fetch(endpoint + "?" + u, options)
  const result = await response.json()

  res.status(200).json(result)
}

export default handler
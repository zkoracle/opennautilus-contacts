import {
  IERC20,
  IERC20Events,
  ERC20Events,
  buildERC20Contract,
} from './token/Erc20Token.js';
import {
  IBasicTokenContract,
  buildBasicTokenContract,
} from './token/BasicTokenContract.js';
import {
  IERC677,
  IERC677Events,
  ERC677Events,
  buildERC677Contract,
  SErc677Contract,
} from './token/Erc677Token.js';
import { Toolkit } from './Toolkit.js';
import {
  IOracleClient,
  IOracleEvents,
  IOracleData,
  OracleContract,
} from './zkapp/OracleContract.js';
import {
  buildOracleRequestTx,
  BasicRequestClient,
} from './zkapp/BasicRequestClient.js';
import { OracleRequest } from './gen/oracle-request_pb.js';

export {
  Toolkit,
  IBasicTokenContract,
  buildBasicTokenContract,
  IERC20,
  IERC20Events,
  ERC20Events,
  buildERC20Contract,
  IERC677,
  IERC677Events,
  ERC677Events,
  buildERC677Contract,
  SErc677Contract,
  IOracleClient,
  IOracleEvents,
  IOracleData,
  OracleContract,
  BasicRequestClient,
  buildOracleRequestTx,
  // buildBasicRequestClient,
  OracleRequest,
};

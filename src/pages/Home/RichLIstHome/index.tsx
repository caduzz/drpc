import { SubHeader } from "../../../components/SubHeader";
import { RichListContainer } from "./style";
import { IoMdTrash } from "react-icons/io";

type FormData = {
  id: number;
  clientId: string;
  details: string;
  state: string;
  largeImageKey?: string;
  largeImageText?: string;
  smallImageKey?: string;
  smallImageText?: string;
};

interface RichListHomeProps {
  formDataList: FormData[];
  selectedFormData: FormData | {};
  onSelectFormData: (item: FormData) => void;
  onDeleteFormData: (id: number) => void;
  onStartRpc: () => void;
  onStopRpc: () => void;
  isRpcActive: boolean;
}

export function RichListHome({
  formDataList,
  selectedFormData,
  onSelectFormData,
  onDeleteFormData,
  onStartRpc,
  onStopRpc,
  isRpcActive,
}: RichListHomeProps) {
  return (
    <RichListContainer>   
      <div className="formDataList">
        <SubHeader
          title="Lista de Rich Presence criados"
          subTitle="Selecione um Rich Presence e clique em start para iniciar"
        />
        <ul>
          {formDataList.map((item) => (
            <li
              key={item.id}
              onClick={() => onSelectFormData(item)}
              className={(selectedFormData as FormData).id === item.id ? 'selected' : ''}
            >
              <div className="items">
                <p>Details: {item.details}</p>
                <p>Client ID: <span className='clientId'>{item.clientId}</span></p>
              </div>
              <button
                className="btnDelete"
                onClick={() => onDeleteFormData(item.id)}
              >
                <IoMdTrash />
              </button>
            </li>
          ))}
        </ul>
        <div className='actionsArea'>
          <button onClick={onStartRpc}>
            Start
          </button>
          <button onClick={onStopRpc}>
            Stop
          </button>
        </div>
        {isRpcActive && (
          <div className="rpcStatus">
            <p>RPC is currently active.</p>
          </div>
        )}
      </div>
    </RichListContainer>
  );
}
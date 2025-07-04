import { Button, type TableColumnsType } from "antd";
import CustomTable, { type DataType } from "../components/CustomTable";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

function SelectedUsersPage() {
    const selectedUsers = useSelector(
        (state: RootState) => state.users.selectedUsers
    );

    const columns: TableColumnsType<DataType> = [
        {
            title: "Name",
            dataIndex: "name",
            render: (text: string) => <a>{text}</a>,
        },
        { title: "Surname", dataIndex: "surname" },
        { title: "Age", dataIndex: "age" },
        { title: "Address", dataIndex: "address" },
    ];

    const navigate = useNavigate();

    return (
        <div className="p-5">
            <div className="bg-white rounded-xl">
                <div className="flex justify-between px-3 pt-2 items-center ">
                    <h1 className="text-[20px] font-semibold">Selected Users Page</h1>
                    <Button
                        onClick={() => navigate(-1)}
                        className="m-2 !font-semibold !text-white !bg-amber-700 !flex !items-center"
                    >
                        Back <LeftOutlined />
                    </Button>
                </div>
                {/* @ts-ignore */}
                <CustomTable columns={columns} data={selectedUsers} />
            </div>
        </div>
    );
}

export default SelectedUsersPage;

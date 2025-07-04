import { Button, type TableColumnsType } from "antd";
import CustomTable, { type DataType } from "../components/CustomTable";
import { RightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function MainPage() {
    const navigate = useNavigate();

    const columns: TableColumnsType<DataType> = [
        {
            title: "Name",
            dataIndex: "name",
            render: (text: string) => <a>{text}</a>,
        },
        {
            title: "Surname",
            dataIndex: "surname",
        },
        {
            title: "Age",
            dataIndex: "age",
        },
        {
            title: "Address",
            dataIndex: "address",
        },
    ];

    const data: DataType[] = [
        {
            key: "1",
            name: "John Brown",
            age: 32,
            address: "New York No. 1 Lake Park",
            surname: "Alison",
        },
        {
            key: "2",
            name: "Jim Green",
            age: 42,
            address: "London No. 1 Lake Park",
            surname: "Alison",
        },
        {
            key: "3",
            name: "Joe Black",
            age: 32,
            address: "Sydney No. 1 Lake Park",
            surname: "Alison",
        },
        {
            key: "4",
            name: "Disabled User",
            age: 99,
            address: "Sydney No. 1 Lake Park",
            surname: "Alison",
        },
        {
            key: "5",
            name: "John Brown",
            age: 32,
            address: "New York No. 1 Lake Park",
            surname: "Alison",
        },
        {
            key: "6",
            name: "Jim Green",
            age: 42,
            address: "London No. 1 Lake Park",
            surname: "Alison",
        },
        {
            key: "7",
            name: "Joe Black",
            age: 32,
            address: "Sydney No. 1 Lake Park",
            surname: "Alison",
        },
        {
            key: "8",
            name: "Disabled User",
            age: 99,
            address: "Sydney No. 1 Lake Park",
            surname: "Alison",
        },
    ];

    return (
        <div className="p-5">
            <div className="bg-white rounded-xl">
                <div className="flex justify-between px-3 pt-2 items-center ">
                  <h1 className="text-[20px] font-semibold">Main Page</h1>
                    <Button
                        onClick={() => navigate("selected")}
                        className="m-2 !font-semibold !text-white !bg-amber-700 !flex !items-center"
                    >
                        Next page <RightOutlined />
                    </Button>
                </div>
                <CustomTable columns={columns} data={data} />
            </div>
        </div>
    );
}

export default MainPage;

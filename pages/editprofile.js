/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  Tabs,
  Form,
  Input,
  Radio,
  Cascader,
  Button,
  Modal,
  Upload,
  message,
  Select,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { states } from "@/data/arrays.js";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { accountClient } from "@/appWrite-client/settings.config";
import countriesJson from "../data/countryCod.json";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const Documents = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const handleSave = () => {
    message.success("Picture uploaded successfully!");
  };

  const uploadButton = (
    <div>
      <PlusOutlined className="text-white" />
      <div
        style={{
          marginTop: 8,
          color: "white",
        }}
      >
        Upload
      </div>
    </div>
  );

  return (
    <div className="">
      <div className="rounded-xl w-full p-4 mt-8 bg-[#2A9988] text-white gap-10 xl:gap-20 flex flex-row items-center justify-between">
        <h1 className="w-full text-xl font-semibold">Profile Picture</h1>
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-circle"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
        >
          {fileList.length >= 1 ? null : uploadButton}
        </Upload>
      </div>

      <br />
      <br />
      <br />

      <Button
        onClick={handleSave}
        size="large"
        className="w-full bg-[#2A9988] text-white"
      >
        Save
      </Button>

      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <Image alt="example" className="w-full" src={previewImage} />
      </Modal>
    </div>
  );
};

const Basic = () => {
  const [uId, setUId] = useState();
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState([]);
  const router = useRouter();
  const countryPhoneCodes = countriesJson.countries;

  useEffect(() => {
    const userDetails = accountClient.get();
    userDetails.then(
      function (response) {
        setUId(response.email);
      },
      function (error) {
        message.error("Oops you're not logged in :(");
        router.push("/login");
        return;
      }
    );
  }, []);

  const handleReset = () => {
    setUId();
    setName("");
    setGender("");
    setCountryCode("");
    setPhoneNumber("");
    setPassword("");
    setAge("");
    setLocation([]);
  };

  const handleSave = async () => {
    try {
      const prefs = { location: location.join(", ") };

      if (name.trim() !== "") {
        accountClient.updateName(name);
      }

      if (gender) {
        prefs.gender === gender;
      }

      if (phoneNumber.trim() !== "") {
        const fullPhoneNumber = countryCode + phoneNumber;
        accountClient.updatePhone(fullPhoneNumber, password);
      }

      if (age.trim() !== "") {
        prefs.age === age;
      }

      await accountClient.updatePrefs(prefs);

      message.success("Profile edited successfully!", 3);
      handleReset();
    } catch (error) {
      message.error("Error editing profile");
      console.log(error.message);
    }
  };

  const handleAgeChange = (e) => {
    const inputAge = e.target.value;
    if (/^\d+$/.test(inputAge) || inputAge === "") {
      setAge(inputAge);
    }
  };

  const handleNumberChange = (e) => {
    const inputNumber = e.target.value;
    if (/^\d+$/.test(inputNumber) || inputNumber === "") {
      setPhoneNumber(inputNumber);
    }
  };

  return (
    <div className="w-full py-4 bg-white">
      <Form className="flex flex-col items-start justify-start w-full">
        <Form.Item label="Change full name" className="w-full">
          <Input
            className="w-full h-12"
            value={name}
            onChange={(e) => setName(e.target.value)}
            minLength={3}
          />
        </Form.Item>

        <Form.Item label="Gender" className="w-full">
          <Radio.Group
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <Radio value="male"> Male </Radio>
            <Radio value="female"> Female </Radio>
          </Radio.Group>
        </Form.Item>

        <label label="Phone Number" className="w-full mb-6">
          Phone no.
          <div className="flex gap-2">
            <select
              onChange={(e) => setCountryCode(e.target.value)}
              className="w-full basis-1/2 rounded-lg bg-transparent border px-2"
            >
              <option value="">Country code</option>

              {countryPhoneCodes.map((code, index) => (
                <option key={index} value={code.code}>
                  {code.name + " (" + code.code + ")"}
                </option>
              ))}
            </select>

            <Input
              type="tel"
              className="w-full h-12"
              value={phoneNumber}
              onChange={handleNumberChange}
              minLength={10}
              placeholder="8034360345"
            />
          </div>
        </label>

        {phoneNumber && (
          <Form.Item label="Your Password" className="w-full">
            <Input
              type="password"
              className="w-full h-12"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={8}
            />
          </Form.Item>
        )}

        <Form.Item label="Age" className="w-full">
          <Input
            type="number"
            step={1}
            className="w-full h-12"
            value={age}
            onChange={handleAgeChange}
          />
        </Form.Item>

        <Form.Item label="State / City" className="w-full">
          <Cascader
            className="h-12"
            options={options}
            placeholder="Please select your state / city"
            value={location}
            onChange={(value) => setLocation(value)}
          />
        </Form.Item>

        <br />

        <Form.Item className="w-full">
          <Button
            size="large"
            className="w-full bg-[#2A9988] text-white"
            onClick={handleSave}
          >
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const options = states.map((item) => {
  return {
    value: item.state.toLowerCase(),
    label: item.state,
    children: item.lgas.map((item) => {
      return {
        value: item.toLowerCase(),
        label: item,
      };
    }),
  };
});

const items = [
  {
    key: "1",
    label: `Basic`,
    children: <Basic />,
  },
  {
    key: "2",
    label: "Documents",
    children: <Documents />,
  },
];

const Editprofile = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Edit profile | NEXTGEN Patients</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex items-center justify-center w-full min-h-screen px-4 pt-4 bg-white xl:p-0">
        <div className="hidden min-h-screen image-section xl:block"></div>
        <div className="flex justify-center w-full xl:w-1/2">
          <div className="xl:w-[90%] w-full max-w-[450px]">
            <div className="w-full pb-4">
              <button className="text-black" onClick={() => router.back()}>
                &larr; back
              </button>
            </div>
            <h1 className="w-full text-left font-bold text-2xl text-[#1C665B]">
              Edit Profile
            </h1>
            <div className="w-full">
              <Tabs defaultActiveKey="1" items={items} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editprofile;

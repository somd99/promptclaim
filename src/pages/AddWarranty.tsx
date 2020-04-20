import React, { useState, useEffect } from "react";

import {
  IonSlides,
  IonSlide,
  IonDatetime,
  IonList,
  IonInput,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItemDivider,
  IonListHeader,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
  IonImg,
  IonCard,
  IonToast,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { image } from "ionicons/icons";
import "./AddWarranty.css";
import { usePhotoGallery } from "../hooks/usePhotoGallery";
import moment from "moment";

const slideOpts = {
  initialSlide: 1,
  speed: 400,
};

export interface Retailer {
  retailer_name: string;
  retailer_id: string;
}
export interface Retailerprops {
  item: Retailer;
}

export interface Branch {
  retailer_branch_id: string;
  retailer_branch_name: string;
}
export interface Branchprops {
  item: Branch;
}

const AddWarranty: React.FC = () => {
  const [pname, setPname] = useState<string>("");
  const [serial, setSerial] = useState<string>("");
  const [wranNumber, setWranNumber] = useState<string>();
  const [wranLife, setWranLife] = useState<string>();
  const [pNumber, setPnumber] = useState<string>();
  const [retailer, setRetailer] = useState<Retailer[]>([]);
  const [retailerName, setRetailerName] = useState<string>();
  const [branchList, setBranchList] = useState<Branch[]>([]);
  const [branchName, setBranchName] = useState<string>("");
  const { photos, takePhoto } = usePhotoGallery();
  const { photos1, takePhoto1 } = usePhotoGallery();
  const { photos2, takePhoto2 } = usePhotoGallery();
  const today = new Date().toISOString();
  const [selectedDate, setSelectedDate] = useState<string>(
    moment(today).add(0, "days").format()
  );

  const [idRetail, setIdRetail] = useState<string>();
  const [preId, setPreId] = useState<Branch[]>([]);
  const [idBranch, setIdBranch] = useState<string>();
  const [showToast1, setShowToast1] = useState(false);
  const [showToast2, setShowToast2] = useState(false);
  const [todayD, setTodayD] = useState<string>(new Date().toISOString());

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch(
      "http://localhost:8001/customer/product/getRetailer",
      {
        headers: {
          Authorization: localStorage.token,
        },
      }
    );
    console.log(data);
    const item = await data.json();
    console.log(item);
    setRetailer(item);
    console.log(retailer);
  };

  const addProduct = async () => {
    if (serial === "" || pname === "") {
      console.log("no input");
      setShowToast2(true);
    } else {
      const data = await fetch(
        "http://localhost:8001/customer/product/addproduct",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.token,
          },
          body: JSON.stringify({
            serialNo: serial,
            productNo: pNumber,
            productNickname: pname,
            createTimestamp: selectedDate,
            price: 100,
            isValidate: 0,
            claimQty: 0,
            retailerName: idRetail,
            retailerBranchName: idBranch,
          }),
        }
      );
      console.log(data);
      const response = await data.json();
      console.log(response);
      if (data.status === 200) {
        console.log("Sucess Add");
        setSerial("");
        setPname("");
        setPnumber("");
        setSelectedDate(today);
        setRetailerName("");
        setBranchName("");
        setShowToast1(true);
      } else {
        console.log("Fail Add");
      }
    }
  };

  const fetchBranch = async (name: string) => {
    setRetailerName(name);
    console.log(retailerName);
    setBranchName("");
    console.log(name);
    const final = retailer.filter((item) => item.retailer_name === name);
    console.log(final[0]);
    setIdRetail(final[0].retailer_id);
    const branchRes = await fetch(
      "http://localhost:8001/customer/product/getRetailerBranchByRetailerId/" +
        final[0].retailer_id,
      {
        headers: {
          Authorization: localStorage.token,
        },
      }
    );
    console.log(branchRes);
    const braItem = await branchRes.json();
    console.log(braItem);
    setBranchList(braItem);
  };

  const forBranchId = async (name: string) => {
    setBranchName(name);
    console.log(branchName);

    const ress = branchList.filter(
      (item) => item.retailer_branch_name === name
    );
    await setIdBranch(ress[0].retailer_branch_id);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Add New Warranty</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonListHeader>Product Information</IonListHeader>

          <IonItem>
            <IonLabel position="floating" color="medium">
              Product Name
            </IonLabel>
            <IonInput
              value={pname}
              onIonChange={(e) => setPname(e.detail.value!)}
              clearInput
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating" color="medium">
              Product Number
            </IonLabel>

            <IonInput
              value={pNumber}
              onIonChange={(e) => setPnumber(e.detail.value!)}
              clearInput
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating" color="medium">
              Serial Number
            </IonLabel>

            <IonInput
              value={serial}
              onIonChange={(e) => setSerial(e.detail.value!)}
              clearInput
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating" color="medium">
              Warranty Number
            </IonLabel>
            <IonInput
              value={wranNumber}
              onIonChange={(e) => setWranNumber(e.detail.value!)}
              clearInput
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating" color="medium">
              Warranty Life
            </IonLabel>
            <IonInput
              value={wranLife}
              onIonChange={(e) => setWranLife(e.detail.value!)}
              clearInput
            ></IonInput>
          </IonItem>

          <IonItemDivider></IonItemDivider>
          <IonListHeader>Purchase Information</IonListHeader>
          <IonItem>
            <IonLabel position="floating" color="medium">
              Date of Purchase
            </IonLabel>
            <IonDatetime
              displayFormat="DDDD MMM D, YYYY"
              min="2017"
              max={todayD}
              value={selectedDate}
              onIonChange={(e) => setSelectedDate(e.detail.value!)}
            ></IonDatetime>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Retailer</IonLabel>
            <IonSelect
              value={retailerName}
              placeholder="Select One"
              onIonChange={(e) => fetchBranch(e.detail.value)}
            >
              {retailer.map((item) => (
                <IonSelectOption value={item.retailer_name}>
                  {item.retailer_name}
                </IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Retailer Branch</IonLabel>
            <IonSelect
              value={branchName}
              placeholder="Select One"
              onIonChange={(e) => forBranchId(e.detail.value)}
            >
              {branchList.map((item) => (
                <IonSelectOption value={item.retailer_branch_name}>
                  {item.retailer_branch_name}
                </IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>
        </IonList>
        <IonItemDivider></IonItemDivider>
        <IonListHeader>Photos</IonListHeader>

        <IonSlides scrollbar={true} pager={true} options={slideOpts}>
          <IonSlide>
            <IonCard>
              <IonButton fill="clear" onClick={takePhoto}>
                <IonIcon icon={image}></IonIcon>Add Product Photo
              </IonButton>
              {photos.map((photo, index) => (
                <IonImg src={photo.webviewPath} />
              ))}{" "}
            </IonCard>
          </IonSlide>
          <IonSlide>
            <IonCard>
              <IonButton fill="clear" onClick={takePhoto1}>
                <IonIcon icon={image}></IonIcon>Add Warranty Photo
              </IonButton>
              {photos1.map((photo, index) => (
                <IonImg src={photo.webviewPath} />
              ))}
            </IonCard>
          </IonSlide>
          <IonSlide>
            <IonCard>
              <IonButton fill="clear" onClick={takePhoto2}>
                <IonIcon icon={image}></IonIcon> Add Receipt Photo
              </IonButton>
              {photos2.map((photo, index) => (
                <IonImg src={photo.webviewPath} />
              ))}
            </IonCard>
          </IonSlide>
        </IonSlides>

        <IonButton onClick={addProduct} expand="block">
          Add
        </IonButton>
        <IonToast
          position="bottom"
          color="primary"
          isOpen={showToast1}
          onDidDismiss={() => setShowToast1(false)}
          message="Product Added"
          duration={2000}
        />
        <IonToast
          position="bottom"
          color="danger"
          isOpen={showToast2}
          onDidDismiss={() => setShowToast2(false)}
          message="Input Require"
          duration={2000}
        />
      </IonContent>
    </IonPage>
  );
};

export default AddWarranty;

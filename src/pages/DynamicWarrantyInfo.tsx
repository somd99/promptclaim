import React, { useState, useEffect } from "react";
import { RefresherEventDetail } from "@ionic/core";
import moment from "moment";
import "./DynamicWarrantyInfo.css";

import {
  IonRefresherContent,
  IonRefresher,
  IonToast,
  IonInfiniteScroll,
  IonImg,
  IonActionSheet,
  IonContent,
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonToggle,
  IonListHeader,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonSlides,
  IonSlide,
  IonInput,
  IonDatetime,
} from "@ionic/react";
import { notifications, call, trash, close, closeCircle } from "ionicons/icons";
import "./WarrantyInfo.css";
import { RouteComponentProps } from "react-router-dom";
import { triggerAsyncId } from "async_hooks";

interface RouteParam {
  id: string;
}
interface Match extends RouteComponentProps<RouteParam> {
  params: string;
  //ไม่จำเปน
}
export interface Product {
  product_name: string;
  uuid: string;
  img: string;
  category_name: string;
  create_timestamp: string;
  serial_no: string;
  supplier_name: string;
  contact: string;
  retailer_branch_name: string;
}
export interface Productprops {
  item: Product;
}
const slideOpts = {
  initialSlide: 1,
  speed: 400,
};

const WarrantyInfo: React.FC<Match> = ({ match }) => {
  const [checked, setChecked] = useState(false);
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [showActionSheet1, setShowActionSheet1] = useState(false);
  const [done, setDone] = useState("Edit Warranty");
  const [fill, setFill] = useState("outline");
  const [butStat, setButstat] = useState<boolean>(true);

  const [showToast1, setShowToast1] = useState(false);
  const [phoneNum, setphoneNum] = useState("");
  const [remainingPeriod, setRemainingPeriod] = useState("");
  const [displayDate, setdisplayDate] = useState("");
  const [serial, setSerial] = useState("");
  const [retialer, setRetailer] = useState<string>();
  const [supplier, setSupplier] = useState<string>();

  const trigger = () => {
    console.log(butStat);
    if (!butStat) {
      setButstat(false);
      setDone("Done");
    }

    if (butStat === true) {
      setButstat(false);
      setDone("Done");
    } else {
      setButstat(true);
      setDone("Edit Warranty");
    }
    console.log(butStat);
  };
  console.log(butStat);

  console.log(match.params.id);
  useEffect(() => {
    fetchItems();
  }, []);
  const [item, setItem] = useState<Product[]>([]);

  const fetchItems = async () => {
    const data = await fetch(
      "http://localhost:8001/customer/product//getByUuid/" + match.params.id,
      {
        headers: {
          Authorization: localStorage.token,
        },
      }
    );
    console.log(data);
    const item = await data.json();
    setItem(item);
    console.log(item);
    setSerial(item[0].serial_no);
    setSupplier(item[0].supplier_name);
    setRetailer(item[0].retailer_branch_name);
    setphoneNum(item[0].contact);
    var dateFormat = item[0].create_timestamp.split("T")[0];
    setdisplayDate(item[0].create_timestamp.split("T")[0]);
    console.log(dateFormat);
    console.log("Days =");
    function countDay() {
      var today = moment();
      var purchase = moment(dateFormat);
      return today.diff(purchase, "days");
    }
    console.log(countDay());
    setRemainingPeriod(countDay() + "");
  };

  function doRefresh(event: CustomEvent<RefresherEventDetail>) {
    console.log("Begin async operation");

    setTimeout(() => {
      console.log("Async operation has ended");
      event.detail.complete();
    }, 2000);
  }

  type Item = {
    src: string;
    text: string;
  };

  return (
    <IonPage>
      <IonContent>
        <IonInfiniteScroll>
          <IonCard color="light">
            <IonRow>
              <IonCol>
                <IonCardHeader>
                  {item.map((item) => (
                    <IonCardTitle>{item.product_name}</IonCardTitle>
                  ))}
                  {item.map((item) => (
                    <IonCardSubtitle>{item.category_name}</IonCardSubtitle>
                  ))}
                </IonCardHeader>
              </IonCol>
              <IonCol>
                <IonButton
                  class="ion-float-right"
                  size="small"
                  fill="clear"
                  routerLink="/myWarranty"
                  routerDirection="root"
                >
                  <IonIcon size="large" icon={closeCircle}></IonIcon>
                </IonButton>
              </IonCol>
            </IonRow>
            <IonSlides pager={true} options={slideOpts}>
              <IonSlide>
                {item.map((item) => (
                  <IonImg src={item.img}></IonImg>
                ))}
              </IonSlide>
              <IonSlide>
                {item.map((item) => (
                  <IonImg src={item.img}></IonImg>
                ))}
              </IonSlide>{" "}
              <IonSlide>
                {item.map((item) => (
                  <IonImg src={item.img}></IonImg>
                ))}
              </IonSlide>
            </IonSlides>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonButton
                    fill="outline"
                    size="large"
                    expand="block"
                    onClick={() => setShowActionSheet(true)}
                  >
                    <IonIcon icon={call}></IonIcon>
                  </IonButton>
                  <IonActionSheet
                    isOpen={showActionSheet}
                    onDidDismiss={() => setShowActionSheet(false)}
                    buttons={[
                      {
                        text: "Cancel",
                        icon: close,
                        role: "cancel",
                        handler: () => {
                          console.log("Cancel clicked");
                        },
                      },
                      {
                        text: "Contact Supplier",
                        icon: call,
                        handler: () => {
                          window.location.href = "tel:" + phoneNum;
                        },
                      },

                      {
                        text: "Contact Retailer",
                        icon: call,
                        handler: () => {
                          console.log("Contact Re clicked");
                        },
                      },
                    ]}
                  ></IonActionSheet>
                </IonCol>
                <IonCol>
                  <IonButton fill="outline" size="large" expand="block">
                    <IonIcon icon={notifications}></IonIcon>
                    <IonToggle
                      onClick={() => setShowToast1(true)}
                      color="success"
                      checked={checked}
                      onIonChange={(e) => setChecked(e.detail.checked)}
                    />
                  </IonButton>
                </IonCol>
              </IonRow>
              <IonButton
                expand="block"
                fill="outline"
                href="http://www.instagram.com/somd99"
              >
                View Policy
              </IonButton>

              <IonButton
                expand="block"
                routerLink={`/addClaimDate/${match.params.id}`}
              >
                Add Claim Date
              </IonButton>
            </IonGrid>
            <IonListHeader>Warranty Information</IonListHeader>

            <IonItem>
              <IonLabel color="medium" position="floating">
                Date of Purchase
              </IonLabel>
              <IonDatetime
                displayFormat="DDDD MMM D, YYYY"
                min="2020"
                max="2024"
                disabled={butStat}
                value={displayDate}
                onIonChange={(e) => setdisplayDate(e.detail.value!)}
              ></IonDatetime>
            </IonItem>

            <IonItem>
              <IonLabel
                color="medium"
                class="ion-no-padding"
                position="floating"
              >
                Days Since Purchased
              </IonLabel>
              <IonInput
                class="ion-no-padding"
                size={5}
                required
                type="text"
                disabled={butStat}
                value={remainingPeriod}
                onIonChange={(e) => setRemainingPeriod(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel class="ion-no-padding" position="floating">
                <h1> Serial Number</h1>
              </IonLabel>
              <IonInput
                class="ion-no-padding"
                size={5}
                required
                type="text"
                disabled={butStat}
                value={serial}
                onIonChange={(e) => setSerial(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel class="ion-no-padding" position="floating">
                <h1> Supplier</h1>
              </IonLabel>
              <IonInput
                class="ion-no-padding"
                size={5}
                placeholder="-"
                required
                type="text"
                disabled={butStat}
                value={supplier}
                onIonChange={(e) => setSupplier(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel class="ion-no-padding" position="floating">
                <h1> Retailer</h1>
              </IonLabel>
              <IonInput
                class="ion-no-padding"
                placeholder="-"
                size={5}
                required
                type="text"
                disabled={butStat}
                value={retialer}
                onIonChange={(e) => setRetailer(e.detail.value!)}
              ></IonInput>
            </IonItem>

            <IonButton color="primary" expand="block" onClick={() => trigger()}>
              {done}
            </IonButton>
            <IonButton
              color="danger"
              onClick={() => setShowActionSheet1(true)}
              expand="block"
            >
              <IonIcon icon={trash} item-left></IonIcon>Remove Warranty
            </IonButton>
            <IonActionSheet
              isOpen={showActionSheet1}
              onDidDismiss={() => setShowActionSheet1(false)}
              buttons={[
                {
                  text: "Cancel",
                  icon: close,
                  role: "cancel",
                  handler: () => {
                    console.log("Contact Re clicked");
                  },
                },
                {
                  text: "Remove Warranty",
                  icon: trash,
                  handler: () => {
                    console.log("Contact Re clicked");
                  },
                },
              ]}
            ></IonActionSheet>
            <IonToast
              position="bottom"
              color="primary"
              isOpen={showToast1}
              onDidDismiss={() => setShowToast1(false)}
              message=" You will be noitified 3 days before the period ends"
              duration={1000}
            />
          </IonCard>
        </IonInfiniteScroll>
        <IonRefresher
          slot="fixed"
          onIonRefresh={doRefresh}
          pullFactor={1}
          pullMin={100}
          pullMax={200}
        >
          <IonRefresherContent
            pullingIcon="arrow-dropdown"
            pullingText="Pull to refresh"
            refreshingSpinner="circles"
            refreshingText="Refreshing..."
          ></IonRefresherContent>
        </IonRefresher>
      </IonContent>
    </IonPage>
  );
};

export default WarrantyInfo;

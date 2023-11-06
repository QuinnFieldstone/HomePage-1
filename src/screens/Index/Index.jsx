import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { ArrowsChevron } from "../../components/ArrowsChevron";
import { ComercialShopping } from "../../components/ComercialShopping";
import { Footer } from "../../components/Footer";
import { Frame } from "../../components/Frame";
import { FreeDiscount } from "../../components/FreeDiscount";
import { FreeeShippingCard } from "../../components/FreeeShippingCard";
import { HotBanner } from "../../components/HotBanner";
import { InterfaceEssential } from "../../components/InterfaceEssential";
import { MainTopNav } from "../../components/MainTopNav";
import { PropertyDefault } from "../../components/PropertyDefault";
import { PropertyDefaultWrapper } from "../../components/PropertyDefaultWrapper";
import "./style.css";

export const Index = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="index">
      <div
        className="div-2"
        style={{
          height: screenWidth < 1521 ? "6079px" : screenWidth >= 1521 ? "5027px" : undefined,
          overflow: screenWidth < 1521 ? "hidden" : undefined,
          width: screenWidth < 1521 ? "1512px" : screenWidth >= 1521 ? "1521px" : undefined,
        }}
      >
        {screenWidth >= 1521 && (
          <>
            <p className="text-wrapper-31">What are you looking for?</p>
            <div className="frame-10">
              <img className="element-2" alt="Element" src="/img/0-1.png" />
              <div className="overlap-group-6">
                <p className="text-wrapper-32">Visionary Brew Magic Mushroom Tea</p>
                <div className="text-wrapper-33">$25</div>
              </div>
            </div>
            <div className="frame-11">
              <img className="element-2" alt="Element" src="/img/0-1-1.png" />
              <div className="overlap-group-6">
                <p className="text-wrapper-32">Visionary Brew Magic Mushroom Tea</p>
                <div className="text-wrapper-33">$25</div>
              </div>
            </div>
            <div className="frame-12">
              <img className="element-2" alt="Element" src="/img/0-1-2.png" />
              <div className="overlap-group-6">
                <p className="text-wrapper-32">Visionary Brew Magic Mushroom Tea</p>
                <div className="text-wrapper-33">$25</div>
              </div>
            </div>
            <div className="frame-13">
              <img className="element-2" alt="Element" src="/img/0-1-3.png" />
              <div className="overlap-group-6">
                <p className="text-wrapper-32">Visionary Brew Magic Mushroom Tea</p>
                <div className="text-wrapper-33">$25</div>
              </div>
            </div>
            <div className="frame-14">
              <img className="element-2" alt="Element" src="/img/0-1-4.png" />
              <div className="overlap-group-6">
                <p className="text-wrapper-32">Visionary Brew Magic Mushroom Tea</p>
                <div className="text-wrapper-33">$25</div>
              </div>
            </div>
            <div className="frame-15">
              <img className="element-2" alt="Element" src="/img/0-1-5.png" />
              <div className="overlap-group-6">
                <p className="text-wrapper-32">Visionary Brew Magic Mushroom Tea</p>
                <div className="text-wrapper-33">$25</div>
              </div>
            </div>
            <p className="explore-some-edibles">
              <span className="text-wrapper-34">Explore Some</span>
              <span className="text-wrapper-35">&nbsp;</span>
              <span className="text-wrapper-36">Edibles</span>
            </p>
            <p className="FAQ-about-lorem">
              <span className="text-wrapper-34">FAQ About </span>
              <span className="text-wrapper-36">Lorem Ipsum </span>
            </p>
            <img className="line-2" alt="Line" src="/img/line-2.png" />
          </>
        )}

        <div
          className="overlap-5"
          style={{
            height: screenWidth >= 1521 ? "401px" : screenWidth < 1521 ? "1499px" : undefined,
            left: screenWidth >= 1521 ? "100px" : screenWidth < 1521 ? "0" : undefined,
            top: screenWidth >= 1521 ? "1600px" : screenWidth < 1521 ? "0" : undefined,
            width: screenWidth >= 1521 ? "871px" : screenWidth < 1521 ? "1632px" : undefined,
          }}
        >
          {screenWidth >= 1521 && (
            <>
              <div className="rectangle-6" />
              <img className="KS-BLOOM-BACK" alt="Ks BLOOM BACK" src="/img/ks-bloom-back-705x705-1.png" />
              <div className="text-wrapper-37">Tomorrows Reason Why</div>
              <div className="text-wrapper-38">Dosing Protocol</div>
              <div className="available-to-buy">
                <div className="text-wrapper-39">Available to Buy</div>
              </div>
            </>
          )}

          {screenWidth < 1521 && (
            <>
              <div className="rectangle-7" />
              <div className="background">
                <div className="overlap-group-7">
                  <img className="vector" alt="Vector" src="/img/vector-4.png" />
                  <img className="union" alt="Union" src="/img/union.png" />
                  <img className="union-2" alt="Union" src="/img/union-1.png" />
                  <img className="union-3" alt="Union" src="/img/union-2.png" />
                </div>
              </div>
              <FreeDiscount
                className="free-discount-instance"
                comercialDiscountStyleOutlined="/img/comercial-discount-2.png"
              />
              <FreeeShippingCard
                className="freee-shipping-card-instance"
                comercialDeliveryStyleOutlined="/img/comercial-delivery.png"
              />
              <HotBanner className="hot-banner-instance" />
              <div className="top-categories">
                <div className="text-wrapper-40">Top Categories</div>
                <div className="overlap-6">
                  <Frame className="frame-1" property1="default" />
                  <Frame
                    className="frame-1-instance"
                    property1="default"
                    text={
                      <>
                        Shrom <br />
                        Edibles
                      </>
                    }
                    wavyzX="/img/wavyz3-1-300x300-1-1.png"
                  />
                  <Frame
                    className="frame-17"
                    driedMagicClassName="frame-16"
                    property1="default"
                    text={
                      <>
                        Magic <br />
                        Mushrooms Tea
                      </>
                    }
                    wavyzX="/img/wavyz3-1-300x300-1-2.png"
                  />
                  <div className="frame-18">
                    <div className="frame-19" />
                    <div className="dried-magic-2">
                      Microdosing
                      <br />
                      Capsules
                    </div>
                    <div className="hover-item-2">
                      <div className="group-2">
                        <div className="overlap-group-8">
                          <div className="text-wrapper-41">Shop Now</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <MainTopNav
                className="main-top-nav-instance"
                comercialShoppingStyleOutlined="/img/comercial-shopping-basket-1.png"
                interfaceEssentialStyleOutlined="/img/interface-essential-magnifier-2x.png"
                userPersonStyleOutlined="/img/user-person.png"
              />
              <div className="text-wrapper-42">Canada’s</div>
              <div className="text-wrapper-43">Best Spot to</div>
              <p className="buy-shroms-online">
                <span className="text-wrapper-44">Buy </span>
                <span className="text-wrapper-45">Shroms</span>
                <span className="text-wrapper-46">&nbsp;</span>
                <span className="text-wrapper-44">Online!</span>
              </p>
            </>
          )}
        </div>
        {screenWidth >= 1521 && (
          <>
            <div className="top-product-sale-wrapper">
              <div className="top-product-sale">
                <div className="text-wrapper-39">Available to Buy</div>
              </div>
            </div>
            <div className="FAQ-expand">
              <img
                className="arrows-chevron-arrow"
                alt="Arrows chevron arrow"
                src="/img/arrows-chevron-arrow-right.png"
              />
              <p className="text-wrapper-47">Lorem ipsum dolor sit amet</p>
            </div>
            <div className="FAQ-expand-2">
              <img
                className="arrows-chevron-arrow"
                alt="Arrows chevron arrow"
                src="/img/arrows-chevron-arrow-right.png"
              />
              <p className="text-wrapper-47">Lorem ipsum dolor sit amet</p>
            </div>
            <div className="text-wrapper-48">How your order works</div>
            <div className="text-wrapper-49">let’s get your started</div>
          </>
        )}

        <div
          className="about-US"
          style={{
            height: screenWidth < 1521 ? "819px" : screenWidth >= 1521 ? "556px" : undefined,
            left: screenWidth < 1521 ? "83px" : screenWidth >= 1521 ? "804px" : undefined,
            top: screenWidth < 1521 ? "1599px" : screenWidth >= 1521 ? "2819px" : undefined,
            width: screenWidth < 1521 ? "1347px" : screenWidth >= 1521 ? "620px" : undefined,
          }}
        >
          {screenWidth < 1521 && (
            <>
              <div className="overlap-7">
                <img className="rectangle-8" alt="Rectangle" src="/img/rectangle-12.png" />
                <p className="text-wrapper-50">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore.
                </p>
                <img className="ellipse-4" alt="Ellipse" src="/img/ellipse-16.png" />
                <div className="about-text">
                  <p className="lorem-ipsum-dolor">
                    <span className="text-wrapper-51">Lorem ipsum dolor sit a sectetur </span>
                    <span className="text-wrapper-52">adipiscing</span>
                    <span className="text-wrapper-51"> elit sed do </span>
                    <span className="text-wrapper-52">eiusmod</span>
                    <span className="text-wrapper-51"> tempor </span>
                  </p>
                  <p className="text-wrapper-53">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore.
                  </p>
                  <div className="overlap-group-9">
                    <div className="rectangle-9" />
                    <p className="text-wrapper-54">Lorem ipsum dolor sit amet,</p>
                  </div>
                </div>
              </div>
              <div className="overlap-8">
                <p className="knowing-us">
                  <span className="text-wrapper-34">Knowing</span>
                  <span className="text-wrapper-52"> us</span>
                </p>
                <div className="text-wrapper-55">Getting to</div>
              </div>
            </>
          )}

          {screenWidth >= 1521 && (
            <div className="group-3">
              <div className="overlap-group-10">
                <div className="overlap-9">
                  <img className="group-4" alt="Group" src="/img/group-6.png" />
                  <p className="we-serve-all">
                    We serve all&nbsp;&nbsp;
                    <br />
                    Provinces <br />
                    in Canada
                  </p>
                </div>
                <p className="we-are-delighted-to">We are delighted&nbsp;&nbsp;to let you know</p>
              </div>
            </div>
          )}
        </div>
        {screenWidth >= 1521 && (
          <>
            <div className="order-process">
              <div className="order-process-2">
                <div className="overlap-group-11">
                  <div className="overlap-10">
                    <div className="rectangle-10" />
                    <div className="ellipse-5" />
                    <div className="text-wrapper-56">1</div>
                    <div className="text-wrapper-57">Place your Order</div>
                  </div>
                  <div className="overlap-11">
                    <div className="rectangle-11" />
                    <div className="ellipse-6" />
                    <div className="text-wrapper-58">2</div>
                    <div className="text-wrapper-59">2</div>
                    <div className="text-wrapper-60">Receive a Confirmation Email</div>
                  </div>
                  <div className="overlap-12">
                    <img className="rectangle-12" alt="Rectangle" src="/img/rectangle-51.png" />
                    <div className="ellipse-6" />
                    <div className="text-wrapper-61">3</div>
                    <div className="text-wrapper-62">Receive Product Tracking Details</div>
                  </div>
                  <div className="overlap-13">
                    <div className="rectangle-10" />
                    <div className="ellipse-5" />
                    <div className="text-wrapper-63">4</div>
                    <p className="text-wrapper-64">Get Product to your Door Step</p>
                  </div>
                  <p className="we-aim-to-provide">We Aim To Provide The Best Customer Experience</p>
                </div>
              </div>
            </div>
            <Footer
              className="footer-instance"
              lineClassName="footer-2"
              text="Mushroom Species"
              text1="Mirodosing Capsules"
            />
            <div className="user-top-nav">
              <div className="overlap-14">
                <img className="layer-2" alt="Layer" src="/img/layer-1-1.png" />
                <div className="mushroom">MUSHROOM</div>
                <div className="CA-nn-AB-is">CANNABIS</div>
                <div className="overlap-15">
                  <div className="add-cart">
                    <div className="comercial-shopping-basket-wrapper">
                      <ComercialShopping
                        className="comercial-shopping-basket-instance"
                        style="outlined"
                        styleOutlined="/img/comercial-shopping-basket-2.png"
                      />
                    </div>
                  </div>
                  <div className="count">
                    <div className="text-wrapper-65">0</div>
                  </div>
                </div>
                <div className="search-wrapper">
                  <div className="search-2">
                    <div className="overlap-group-12">
                      <InterfaceEssential
                        className="interface-essential-magnifier"
                        style="outlined"
                        styleOutlined="/img/interface-essential-magnifier.png"
                      />
                      <div className="text-wrapper-66">What do you want</div>
                    </div>
                  </div>
                </div>
                <div className="wishlist">
                  <div className="img-wrapper">
                    <img className="icon-2" alt="Icon" src="/img/icon-2x.png" />
                  </div>
                </div>
                <div className="my-account">
                  <img className="ellipse-7" alt="Ellipse" src="/img/ellipse-28.png" />
                  <div className="text-wrapper-67">Account</div>
                </div>
              </div>
            </div>
            <div className="group-5">
              <div className="group-6">
                <div className="text-wrapper-68">All</div>
                <img className="layout-grid" alt="Layout grid" src="/img/layout-grid-2.png" />
              </div>
              <div className="group-7">
                <img className="layout-grid" alt="Layout grid" src="/img/layout-grid-2-1.png" />
                <div className="text-wrapper-69">Cognitive</div>
              </div>
              <div className="group-8">
                <div className="text-wrapper-70">Energy</div>
                <img className="layout-grid" alt="Layout grid" src="/img/layout-grid-2-2.png" />
              </div>
              <div className="group-9">
                <img className="layout-grid" alt="Layout grid" src="/img/layout-grid-2-3.png" />
                <div className="text-wrapper-71">Aphrodisiac</div>
              </div>
              <div className="group-10">
                <img className="layout-grid" alt="Layout grid" src="/img/layout-grid-2-4.png" />
                <div className="text-wrapper-72">Immune Support</div>
              </div>
              <div className="group-11">
                <img className="layout-grid" alt="Layout grid" src="/img/layout-grid-2-5.png" />
                <div className="text-wrapper-73">Pure Mushroom</div>
              </div>
              <div className="group-12">
                <img className="layout-grid" alt="Layout grid" src="/img/layout-grid-2-6.png" />
                <div className="text-wrapper-74">Trip Stopper</div>
              </div>
            </div>
          </>
        )}

        {screenWidth < 1521 && (
          <>
            <div className="text-wrapper-75">How your order works</div>
            <div className="text-wrapper-76">let’s get your started</div>
            <div className="highlights">
              <div className="overlap-16">
                <div className="overlap-17">
                  <div className="text-wrapper-77">Some Awesome</div>
                  <div className="text-wrapper-78">Review Highlights</div>
                </div>
                <div className="pignation-2">
                  <div className="overlap-group-13">
                    <div className="ellipse-8" />
                  </div>
                  <div className="ellipse-9" />
                  <div className="ellipse-10" />
                </div>
                <div className="overlap-18">
                  <div className="frame-20">
                    <div className="group-13">
                      <img className="ellipse-11" alt="Ellipse" src="/img/ellipse-18.png" />
                    </div>
                    <p className="text-wrapper-79">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua
                    </p>
                    <div className="text-wrapper-80">John Doe</div>
                  </div>
                  <div className="arrows-chevron-chevron-right-wrapper">
                    <ArrowsChevron
                      className="arrows-chevron-instance"
                      style="filled"
                      styleFilled="/img/arrows-chevron-chevron-right-2.png"
                    />
                  </div>
                </div>
                <div className="frame-21">
                  <div className="group-14">
                    <img className="ellipse-11" alt="Ellipse" src="/img/ellipse-18-1.png" />
                  </div>
                  <p className="text-wrapper-81">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua
                  </p>
                  <div className="text-wrapper-82">Mary Jane</div>
                </div>
                <div className="arrows-chevron-instance-wrapper">
                  <ArrowsChevron
                    className="arrows-chevron-chevron-right-instance"
                    style="filled"
                    styleFilled="/img/arrows-chevron-chevron-right-1.png"
                  />
                </div>
              </div>
            </div>
            <div className="overlap-19">
              <div className="subscribtion">
                <div className="overlap-20">
                  <div className="text-wrapper-83">Your email address</div>
                  <div className="text-wrapper-84">Subscribe</div>
                </div>
                <div className="text-wrapper-85">Subscribing to our newsletters</div>
                <p className="text-wrapper-86">Get weekly insights on new products and offers avialable</p>
              </div>
              <PropertyDefault className="property-1-default" />
            </div>
            <div className="frame-22">
              <div className="overlap-9">
                <img className="group-4" alt="Group" src="/img/group-6-2x.png" />
                <p className="we-serve-all-2">
                  We serve all&nbsp;&nbsp;
                  <br />
                  Provinces <br />
                  in Canada
                </p>
              </div>
              <p className="we-are-delighted-to-2">We are delighted&nbsp;&nbsp;to let you know</p>
            </div>
            <div className="order-process-3">
              <div className="overlap-10">
                <div className="rectangle-13" />
                <div className="ellipse-5" />
                <div className="text-wrapper-87">1</div>
                <div className="text-wrapper-88">Place your Order</div>
              </div>
              <div className="overlap-11">
                <div className="rectangle-11" />
                <div className="ellipse-6" />
                <div className="text-wrapper-89">2</div>
                <div className="text-wrapper-90">2</div>
                <div className="text-wrapper-91">Receive a Confirmation Email</div>
              </div>
              <div className="overlap-21">
                <div className="rectangle-11" />
                <div className="ellipse-6" />
                <div className="text-wrapper-92">3</div>
                <div className="text-wrapper-93">Receive Product Tracking Details</div>
              </div>
              <div className="overlap-13">
                <div className="rectangle-10" />
                <div className="ellipse-5" />
                <div className="text-wrapper-94">4</div>
                <p className="text-wrapper-95">Get Product to your Door Step</p>
              </div>
              <p className="we-aim-to-provide-2">We Aim To Provide The Best Customer Experience</p>
            </div>
            <Footer className="footer-3" lineClassName="footer-2" text="Mushroom Spices" text1="Saprotrophic" />
            <div className="perks">
              <div className="top-perks-for-you-wrapper">
                <p className="top-perks-for-you">
                  <span className="text-wrapper-34">Top</span>
                  <span className="text-wrapper-52"> Perks</span>
                  <span className="text-wrapper-34"> for you</span>
                </p>
              </div>
              <PropertyDefaultWrapper className="frame-18-instance" property1="default" />
              <div className="frame-wrapper">
                <div className="frame-23">
                  <div className="frame-24">
                    <div className="frame-25">
                      <div className="frame-26">
                        <p className="lorem-ipsum-dolor-2">
                          <span className="text-wrapper-51">Lorem </span>
                          <span className="text-wrapper-52">ipsum dolor</span>
                          <span className="text-wrapper-51"> sit amet consectetur </span>
                        </p>
                        <p className="text-wrapper-96">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore.
                        </p>
                      </div>
                      <div className="top-product-sale-2">
                        <div className="text-wrapper-97">ipsum dolos</div>
                      </div>
                    </div>
                    <div className="frame-27">
                      <div className="dames-grape-wrapper">
                        <img className="dames-grape" alt="Dames grape" src="/img/0-1-3-2.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

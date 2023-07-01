import { createContext, useEffect, useState } from "react";
import { lists } from "./component/API";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
import AOS from "aos";
import React from "react";
export const AppContext = createContext({});
export const AppProvider = ({ children }) => {
  const [list, setList] = useState(() => lists);
  const [earings, setEarings] = useState(() => lists.earings);
  const [bracelets, setBracelets] = useState(() => lists.bracelets);
  const [rings, setRings] = useState(() => lists.rings);
  const [necklaces, setNecklaces] = useState(() => lists.necklaces);
  const [entertainment, setEntertainment] = useState(() => lists.entertainment);
  const [storage, setStorage] = useState(() => lists.storage);
  const [sleepingorlying, setSleepingorlying] = useState(
    () => lists.sleepingorlying
  );
  const [isCurr, setIsCurr] = useState(false);
  const [img, setImg] = useState();
  const [curr, setCurr] = useState(() => {
    if (localStorage.getItem("current-product")) {
      let CurrentPizza = JSON.parse(localStorage.getItem("current-product"));
      setImg(CurrentPizza.img[0]);
      return CurrentPizza;
    }
  });
  const [check, setCheck] = useState(0);
  const [isLayout, setIsLayout] = useState(false);
  const [bill, setBill] = useState(0);
  const [isemail, setIsemail] = useState(false);
  const [eproduct, setEproduct] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [mess, setMess] = useState("");
  const [find, setFind] = useState("");
  const [search, setSearch] = useState(false);
  const handle_popup = (id) => {
    setIsCurr(!isCurr);
    if (id !== undefined) {
      const CurrPro = list.AllProducts.find((product) => product.id === id);
      setCurr(CurrPro);
    }
  };
  const [test1, setTest1] = useState(true);
  const [test2, setTest2] = useState(false);
  const [test3, setTest3] = useState(false);
  const handle_test1 = () => {
    setTest1(true);
    setTest2(false);
    setTest3(false);
  };
  const handle_test2 = () => {
    setTest2(true);
    setTest1(false);
    setTest3(false);
  };
  const handle_test3 = () => {
    setTest3(true);
    setTest2(false);
    setTest1(false);
  };
  const [table, setTable] = useState(() => lists.table);
  const [product1, setProduct1] = useState(true);
  const [product2, setProduct2] = useState(false);
  const [product3, setProduct3] = useState(false);
  const [product4, setProduct4] = useState(false);
  const handle_show1 = () => {
    setProduct1(true);
    setProduct2(false);
    setProduct3(false);
    setProduct4(false);
  };
  const handle_show2 = () => {
    setProduct2(true);
    setProduct1(false);
    setProduct3(false);
    setProduct4(false);
  };
  const handle_show3 = () => {
    setProduct3(true);
    setProduct1(false);
    setProduct2(false);
    setProduct4(false);
  };
  const handle_show4 = () => {
    setProduct4(true);
    setProduct1(false);
    setProduct2(false);
    setProduct3(false);
  };
  const handle_search = () => {
    setSearch(!search);
    setFind("");
  };
  const [cart, setCart] = useState([]);
  const addCart = (id) => {
    let kq = list.AllProducts.find((item) => item.id === id);
    const index = cart.findIndex((item) => item.id == id);
    if (index >= 0) {
      let newList = cart;
      newList[index]["qty"]++;
      setCart(newList);
      localStorage.setItem("cart-list", JSON.stringify(newList));
    } else {
      setCart([...cart, { ...kq, qty: 1 }]);
      localStorage.setItem(
        "cart-list",
        JSON.stringify([...cart, { ...kq, qty: 1 }])
      );
    }
    console.log(cart);
  };
  const ChangeQty = (id, num) => {
    const kq = cart.map((item) =>
      item.id == id && !(num == -1 && item.qty == 1)
        ? {
            ...item,
            qty: item.qty + num,
          }
        : item
    );
    setCart(kq);
    localStorage.setItem("cart-list", JSON.stringify(kq));
  };
  const Delete = (id) => {
    const kq = cart.filter((item) => item.id != id);
    setCart(kq);
    localStorage.setItem("cart-list", JSON.stringify(kq));
  };
  useEffect(() => {
    if (localStorage.getItem("cart-list")) {
      setCart(JSON.parse(localStorage.getItem("cart-list")));
    }
  }, []);
  const changeQty2 = (id, num) => {
    setCurr(() => {
      if (curr.id === id && !(curr.qty == 1 && num == -1)) {
        return { ...curr, qty: curr["qty"] + num };
      } else {
        return curr;
      }
    });
  };
  const handle_addCart2 = (id) => {
    const kq = list.AllProducts.find((item) => {
      return item.id === id;
    });
    const index = cart.findIndex((item) => item.id === id);
    if (index >= 0) {
      const NewList = cart;
      NewList[index]["qty"] = curr.qty + NewList[index]["qty"];
      setCart(NewList);
    } else {
      setCart([...cart, { ...kq, qty: curr.qty }]);
    }
  };
  const handle_product = (id, img) => {
    const CurrProduct = list.AllProducts.find((item) => item.id === id);
    // setCurr(CurrPizza);

    setCurr({ ...CurrProduct, qty: 1 });
    localStorage.setItem(
      "current-product",
      JSON.stringify({ ...CurrProduct, qty: 1 })
    );
  };
  const handle_hover = (image, index) => {
    setImg(image);
  };
  const sum_bill = () => {
    const sum = cart.reduce((acc, valueCur) => {
      let kq = valueCur.prices * valueCur.qty;
      return acc + kq;
    }, 0);
    setBill(sum.toFixed(2));
  };
  useEffect(() => {
    sum_bill();
  }, [cart]);
  const scrolltotop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsemail(false);
  };
  const handle_sort = (arr) => {
    if (check == 1) {
      return arr
        .slice()
        .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
    } else if (check == 2) {
      return arr
        .slice()
        .sort((a, b) => (a.name > b.name ? -1 : b.name > a.name ? 1 : 0));
    } else if (check == 3) {
      return arr.slice().sort((a, b) => a.prices - b.prices);
    } else if (check == 4) {
      return arr.slice().sort((a, b) => b.prices - a.prices);
    } else {
      return arr;
    }
  };
  const handle_layout = () => {
    if (window.innerWidth < 576) {
      setIsLayout(false);
    }
  };
  useEffect(() => {
    handle_layout();
    window.addEventListener("resize", handle_layout);
    return () => window.removeEventListener("resize", handle_layout);
  }, []);
  const NavFixed = () => {
    if (window.scrollY >= 300) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  };
  useEffect(() => {
    NavFixed();
    window.addEventListener("scroll", NavFixed);
    return () => window.removeEventListener("scroll", NavFixed);
  }, []);
  const email_handle = () => {
    const emailproduct = cart.map((item) => {
      return item.name;
    });
    setEproduct(emailproduct);
    console.log(eproduct);
  };
  const handle_showemail = () => {
    setIsemail(!isemail);
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    swal({
      title: "Successfully!",
      text: "Your product will be deliveried very soon !!!",
      icon: "success",
      button: "Close!",
    });
    setEmail("");
    setName("");
    setPhone("");
    setIsemail(false);
    setCart([]);
    scrolltotop();
    setMess("");
    emailjs
      .sendForm(
        "service_ziwg5se",
        "template_4qn25pi",
        form.current,
        "ZZkjljvX7r-lelnI7"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <AppContext.Provider
      value={{
        earings,
        bracelets,
        rings,
        necklaces,
        entertainment,
        handle_show1,
        handle_show2,
        handle_show3,
        handle_show4,
        product1,
        product2,
        product3,
        product4,
        sleepingorlying,
        storage,
        table,
        test1,
        test2,
        test3,
        handle_test1,
        handle_test2,
        handle_test3,
        setCurr,
        isCurr,
        curr,
        handle_popup,
        addCart,
        ChangeQty,
        cart,
        Delete,
        curr,
        img,
        handle_hover,
        handle_addCart2,
        changeQty2,
        sum_bill,
        scrolltotop,
        handle_product,
        setImg,
        handle_layout,
        handle_sort,
        check,
        setCheck,
        setIsLayout,
        isLayout,
        bill,
        eproduct,
        bill,
        isemail,
        name,
        email,
        phone,
        setName,
        setEmail,
        setPhone,
        form,
        sendEmail,
        mess,
        setMess,
        email_handle,
        search,
        handle_search,
        find,
        setFind,
        list,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

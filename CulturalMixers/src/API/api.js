// springbootのURL（仮定）
const API_BASE_URL = "http://localhost:8080";

// 1. 送金処理 se_user_idは送金する人のID re_user_idは受け取る人のID
export const sendMoney = async (se_user_id, re_user_id, money) => {
  try {
    const response = await fetch(`${API_BASE_URL}/send`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        se_user_id,
        re_user_id,
        money,
      }),
    });

    if (!response.ok) {
      throw new Error("エラー発生");
    }

    const data = await response.json();
    return data.balance;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

// 2. ユーザーリスト取得
export const getUserList = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user_list/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("エラー発生");
    }

    const data = await response.json();
    return data; // レスポンスのデータをそのまま返す
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

// 3. ユーザー情報取得
export const getUserInfo = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("エラー発生");
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

<template>
  <div class="wrapper">
    <div class="contact-us">
      <h2 class="main__header">Свяжитесь с нами</h2>
      <table class="contact-us__table-contacts">
        <tr class="table-contacts__row">
          <th>Наши телефоны</th>
          <td>
            <a href="tel:+373 (333) 333-3333" class="table-contacts__tel">
              +373 (333) 333-3333
            </a><br>
            <a href="tel:+737 (777) 777-7777" class="table-contacts__tel">
              +737 (777) 777-7777
            </a>
          </td>
        </tr>
        <tr class="table-contacts__row">
          <th>Наша почта</th>
          <td>witchersbag@lab.tuss</td>
        </tr>
        <tr class="table-contacts__row">
          <th>Наш адрес</th>
          <td>Империя Нильфгаард, Княжество Туссент, Долина Сансретура, усадьба "Корво Бьянко"</td>
        </tr>
        <tr class="table-contacts__row">
          <th>Наш график</th>
          <td>ПН - ПТ с 10:00 до 16:00, СБ и ВС - выходные дни</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
  }),
};
</script>

<style lang="scss" scoped>
  @media (max-width: 768px) {
    div .wrapper {
      margin: 5%;
    }
    div .contact-us {
      .main__header {
        margin-bottom: 1rem;
        font-size: 2rem;
      }
      .contact-us__table-contacts {
        font-size: 1rem;
        .table-contacts__tel {
          font-size: 1rem;
        }
      }
    }
  }
  .wrapper {
      margin: 6rem 7rem;
    }
  .contact-us {
    .main__header {
      font-size: 3rem;
      margin-bottom: 1.5rem;
    }
    .contact-us__table-contacts {
      margin: 0 auto;
      font-size: 1.4rem;
      border-collapse: collapse;
      .table-contacts__row {
        height: 4rem;
        border-bottom: 1px solid black;
      }
      th {
        text-align: left;
        padding-right: 1.25rem;
      }
      .table-contacts__tel {
        font-size: 1.3rem;
        text-decoration: none;
        color: black;
      }
    }
  }
</style>

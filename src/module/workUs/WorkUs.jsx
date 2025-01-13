import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles.css";
import { Footer } from "../../UI/footer/footer";

export const WorkUs = () => {
  return (
    <div className="WorkUsContainer">
      <div className="WorkUsFirstContainer">
        <span>
          Мы специализируемся на цифровизации и реализации любых идей, используя
          передовые технологии. <br />
          <br />
        </span>
        <ul>
          <li>
            Индивидуальные программы и игры для ПК и VR С помощью мощного
            инструментария Unreal Engine мы создаем фотореалистичную графику,
            захватывающий пользовательский опыт и эффективные решения для
            воплощения даже самых сложных проектов.
          </li>
          <li>
            Приложения для App Store и Play Market Мы разрабатываем динамичные,
            интуитивно понятные и функциональные приложения, которые идеально
            соответствуют потребностям вашего бизнеса и ожиданиям пользователей.
          </li>
          <li>
            Дизайн и разработка веб-сайтов Мы предлагаем современные и
            инновационные решения, которые сочетают точный дизайн и передовые
            технологии, обеспечивая полное отражение особенностей вашего
            бизнеса.
          </li>
          <li>
            Ваши идеи — на любом устройстве Мы цифровизируем самые амбициозные
            идеи, превращая их в функциональные и эффективные решения для любых
            устройств — от компьютеров до мобильных.
          </li>
          <li className="lastParagraph">Преимущества решения</li>
        </ul>
        <span>
          Мы объединяем инновации, передовые технологии и индивидуальный подход,
          чтобы обеспечить высокое качество и уникальные решения. Наша команда
          предоставляет постоянную техническую поддержку, а индивидуальные
          программные разработки делают нас надежным партнером на пути
          превращения ваших идей в цифровую реальность.
        </span>
      </div>
      <div className="WorkUsTwoContainer">
        <iframe
          src="https://www.youtube.com/embed/hD_VipQ32Mc?si=br8YsImUR5O9eIfH"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="video"
        ></iframe>
        <p>
          Дополненная реальность (Augmented Reality, AR)
          <br /> Что это <br />
          Дополненная реальность — это технология, которая добавляет цифровые
          элементы (объекты, тексты, звуки) в реальный мир, создавая
          комбинированную среду. Она изменяет окружающее пространство в реальном
          времени, накладывая цифровые слои на физический мир.
        </p>
      </div>

      <div className="WorkUsThreeContainer">
        <div className="WorkUsThreeList">
          <ul>
            <span className="WorkUsThreeListTitle">Применение</span>
            <li>
              Образование: Визуализация учебных материалов, таких как 3D-модели.
            </li>
            <li>
              Розничная торговля: Возможность «примерить» товары (например,
              мебель или одежду).
            </li>
            <li>
              Медицина: Используется для подготовки к операциям или обучения.
            </li>
            <li>Строительство: Визуализация архитектурных проектов.</li>
            <li>Игры и развлечения: Например, Pokémon GO.</li>
            <span className="WorkUsThreeListTitle">
              Поддерживаемые устройства
            </span>
            <li>Смартфоны и планшеты: iPhone (ARKit), Android (ARCore).</li>
            <li>AR-очки: Magic Leap, Microsoft HoloLens.</li>
            <li>Проекторы: Lightform.</li>
          </ul>
        </div>
        <div>
          <iframe
            src="https://www.youtube.com/embed/hD_VipQ32Mc?si=br8YsImUR5O9eIfH"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="video"
          ></iframe>
        </div>
      </div>
      <div className="WorkUsThorContainer">
        <iframe
          src="https://www.youtube.com/embed/hD_VipQ32Mc?si=br8YsImUR5O9eIfH"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="video"
        ></iframe>
        <div className="WorkUsThorParagraphList">
          <p>
            Смешанная реальность (Mixed Reality, MR)
            <br />
            Что это
            <br />
            Что это Смешанная реальность объединяет реальный и виртуальный миры,
            создавая среду, где цифровые элементы становятся частью физического
            мира. Пользователь может взаимодействовать как с реальными, так и с
            цифровыми объектами.
          </p>
          <span>Применение</span>
          <ul>
            <li>Образование и обучение: Виртуальные лаборатории.</li>
            <li>
              Дизайн и архитектура: Размещение цифровых проектов в реальной
              среде.
            </li>
            <li>Медицина: Планирование операций.</li>
            <li>
              Рабочие пространства: Интеграция цифровых инструментов в реальную
              среду.
            </li>
          </ul>
        </div>
      </div>

      <div className="WorkUsFiveContainer">
        <span>Поддерживаемые устройства</span>
        <ul>
          <li>Microsoft HoloLens: Многофункциональные MR-очки.</li>
          <li>Magic Leap: Для сложного моделирования.</li>
          <li>
            Meta Quest Pro: Более доступное решение для смешанной реальности.
          </li>
          <li>
            Apple Vision Pro:
            <br />
            Устройство нового поколения от Apple, сочетающее возможности AR и VR
            для образовательных, профессиональных и развлекательных целей.
          </li>
        </ul>
      </div>
      <div className="WorkUsSixContainer">
        <p>
          Виртуальная реальность (Virtual Reality, VR)
          <br />
          Что это
          <br />
          Виртуальная реальность создает полностью цифровую,
          компьютерно-генерируемую среду, где пользователь полностью
          «переносится» в другой мир, практически без взаимодействия с реальной
          средой.
        </p>
        <iframe
          src="https://www.youtube.com/embed/hD_VipQ32Mc?si=br8YsImUR5O9eIfH"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="video"
        ></iframe>
      </div>

      <div className="WorkUsSevenContainer">
        <iframe
          src="https://www.youtube.com/embed/hD_VipQ32Mc?si=br8YsImUR5O9eIfH"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="video"
        ></iframe>

        <div>
          <span>Применение</span>
          <ul>
            <li>Игры и развлечения: Полное погружение в виртуальную среду.</li>
            <li>Образование: Виртуальные лаборатории, симуляции.</li>
            <li>Медицина: Симуляции операций, психологическая терапия.</li>
            <li>Инженерия и дизайн: Просмотр моделей в VR-среде.</li>
          </ul>

          <span>Поддерживаемые устройства</span>
          <ul>
            <li>Meta Quest 2/Pro: Автономные VR-устройства.</li>
            <li>HTC Vive: Для профессионального использования.</li>
            <li>PlayStation VR: Для консольных игр.</li>
            <li>Valve Index: Для высококачественного игрового опыта.</li>
          </ul>
        </div>
      </div>
      <div className="WorkUsEightContainer">
        <div>
          <span>
            Компьютер: незаменимый инструмент современного дизайна
            <br />С использованием современных программ, таких как Autodesk 3ds
            Max, SketchUp, Blender и Unreal Engine, можно:
          </span>
          <ul>
            <li>
              Создавать точные и детализированные 3D-модели, включая самые
              мелкие элементы.
            </li>
            <li>
              Планировать размеры и размещение мебели, обеспечивая оптимальные
              решения и исключая ошибки.
            </li>
            <li>
              Пробовать различные стили и цветовые сочетания, подбирая лучший
              вариант для конкретной среды.
            </li>
            <li>
              Добавлять функциональность и динамику проектам, делая виртуальное
              пространство более естественным и интерактивным с помощью Unreal
              Engine.
            </li>
          </ul>
          <span>
            Совмещая эти технологии, вы получаете чёткое представление о проекте
            ещё до его реализации, что делает процесс дизайна не только
            эффективным, но и творческим.
          </span>
        </div>
        <iframe
          src="https://www.youtube.com/embed/hD_VipQ32Mc?si=br8YsImUR5O9eIfH"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="video"
        ></iframe>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

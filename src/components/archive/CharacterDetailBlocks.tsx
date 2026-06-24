import type { ReactNode } from "react";
import Link from "next/link";
import { CHARACTER_STYLES } from "@/constants/ui-styles";

type DetailRow = {
  href?: string;
  label: string;
  value: ReactNode;
};

type DetailTab = {
  id: string;
  label: string;
  href: string;
};

type DetailPanel = {
  id: string;
  title: string;
  lines: readonly string[];
  rowGroups?: readonly {
    title: string;
    rows: readonly DetailRow[];
  }[];
  rows: readonly DetailRow[];
};

type DetailSectionProps = {
  children: ReactNode;
  id?: string;
  title: string;
};

type DetailRowsProps = {
  rows: readonly DetailRow[];
};

type DetailNavigationProps = {
  ariaLabel: string;
  title: string;
  items: readonly DetailTab[];
};

const renderDetailRowValue = (row: DetailRow) => {
  if (!row.href || typeof row.value !== "string") {
    return row.value;
  }

  return (
    <Link className={CHARACTER_STYLES.combatDataValueLink} href={row.href}>
      {row.value}
    </Link>
  );
};

export const CharacterDetailSection = ({
  children,
  id,
  title,
}: DetailSectionProps) => {
  return (
    <section className={CHARACTER_STYLES.detailSection} id={id}>
      <header className={CHARACTER_STYLES.detailSectionHeader}>
        <span className={CHARACTER_STYLES.detailSectionAccent} />
        <h2 className={CHARACTER_STYLES.detailSectionTitle}>{title}</h2>
      </header>
      {children}
    </section>
  );
};

export const CharacterDetailLedger = ({ rows }: DetailRowsProps) => {
  return (
    <dl className={CHARACTER_STYLES.detailLedger}>
      {rows.map((row) => (
        <div className={CHARACTER_STYLES.detailLedgerRow} key={row.label}>
          <dt className={CHARACTER_STYLES.detailLedgerTerm}>{row.label}</dt>
          <dd className={CHARACTER_STYLES.detailLedgerValue}>{row.value}</dd>
        </div>
      ))}
    </dl>
  );
};

export const CharacterDetailNavigation = ({
  ariaLabel,
  items,
  title,
}: DetailNavigationProps) => {
  return (
    <section className={CHARACTER_STYLES.recordNavigation}>
      <p className={CHARACTER_STYLES.recordNavigationTitle}>{title}</p>
      <nav aria-label={ariaLabel} className={CHARACTER_STYLES.recordNavigationList}>
        {items.map((item) => (
          <a
            className={CHARACTER_STYLES.recordNavigationLink}
            href={item.href}
            key={item.id}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </section>
  );
};

export const CharacterCombatDataPanels = ({
  panels,
}: {
  panels: readonly DetailPanel[];
}) => {
  return (
    <div className={CHARACTER_STYLES.combatDataGrid}>
      {panels.map((panel) => (
        <article className={CHARACTER_STYLES.combatDataPanel} id={panel.id} key={panel.id}>
          <h3 className={CHARACTER_STYLES.combatDataTitle}>{panel.title}</h3>

          {panel.lines.length > 0 && (
            <div className={CHARACTER_STYLES.combatDataLines}>
              {panel.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          )}

          {panel.rows.length > 0 && (
            <dl className={CHARACTER_STYLES.combatDataRows}>
              {panel.rows.map((row) => (
                <div className={CHARACTER_STYLES.combatDataRow} key={row.label}>
                  <dt className={CHARACTER_STYLES.combatDataTerm}>{row.label}</dt>
                  <dd className={CHARACTER_STYLES.combatDataValue}>
                    {renderDetailRowValue(row)}
                  </dd>
                </div>
              ))}
            </dl>
          )}

          {panel.rowGroups && panel.rowGroups.length > 0 && (
            <div className={CHARACTER_STYLES.combatDataGroups}>
              {panel.rowGroups.map((group) => (
                <section className={CHARACTER_STYLES.combatDataGroup} key={group.title}>
                  <h4 className={CHARACTER_STYLES.combatDataGroupTitle}>
                    {group.title}
                  </h4>
                  <dl
                    className={
                      group.rows.length === 1
                        ? CHARACTER_STYLES.combatDataRowsSingle
                        : CHARACTER_STYLES.combatDataRows
                    }
                  >
                    {group.rows.map((row) => (
                      <div className={CHARACTER_STYLES.combatDataRow} key={row.label}>
                        <dt className={CHARACTER_STYLES.combatDataTerm}>{row.label}</dt>
                        <dd className={CHARACTER_STYLES.combatDataValue}>
                          {renderDetailRowValue(row)}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </section>
              ))}
            </div>
          )}

        </article>
      ))}
    </div>
  );
};

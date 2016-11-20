namespace GTiHub.Models.EntityModel
{
    #region

    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    #endregion

    public class Rule : BaseEntity
    {
        public Rule()
        {
            this.RuleSourceFields = new List<RuleSourceField>();
        }

        public string Alt_Value { get; set; }

        public string Rule_Operation { get; set; }

        public string Rule_Value { get; set; }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int RuleId { get; set; }

        public virtual ICollection<RuleSourceField> RuleSourceFields { get; set; }

        public virtual TargetField TargetField { get; set; }

        public int TargetFieldId { get; set; }

        public virtual Transformation Transformation { get; set; }

        public int TransformationId { get; set; }
    }
}
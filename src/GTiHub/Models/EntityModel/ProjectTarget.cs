namespace GTiHub.Models.EntityModel
{
    public class ProjectTarget : BaseEntity
    {
        public virtual Project Project { get; set; }

        public int ProjectId { get; set; }

        public virtual Target Target { get; set; }

        public int TargetId { get; set; }
    }
}